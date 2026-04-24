/**
 * Contact form handler — posts to Web3Forms with the access key held server-side.
 * Environment variables (set in Vercel):
 *   WEB3FORMS_ACCESS_KEY  - required, from web3forms.com dashboard
 *   CONTACT_EMAIL         - optional, overrides the email destination configured in Web3Forms
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message, botcheck } = req.body || {};

  // Honeypot: legitimate users leave this empty; bots fill it
  if (botcheck) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !subject) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Accept common env var names so the same code works regardless of
  // how the access key was named in Vercel.
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY ||
    process.env.WEB3FORMS_KEY ||
    process.env.WEB3FORM_KEY ||
    process.env.WEB3_FORMS_KEY ||
    process.env.WEB3_KEY ||
    process.env.WEB3_ACCESS_KEY ||
    process.env.PUBLIC_WEB3FORMS_KEY;

  if (!accessKey) {
    console.error('No Web3Forms access key env var is set');
    return res.status(500).json({
      error: 'Form backend not configured',
      detail:
        'No Web3Forms access key env var detected. Expected one of: WEB3FORMS_ACCESS_KEY, WEB3FORMS_KEY, WEB3FORM_KEY, WEB3_FORMS_KEY, WEB3_KEY, WEB3_ACCESS_KEY, PUBLIC_WEB3FORMS_KEY',
    });
  }

  // Build Web3Forms payload
  const payload = {
    access_key: accessKey,
    subject: `EIS Enquiry: ${subject}`,
    from_name: 'EIS Website',
    // Web3Forms maps these to the email body automatically
    name,
    email,
    phone: phone || 'Not provided',
    enquiry_subject: subject,
    message: message || 'No message provided',
    // Reply-to so you can reply to the enquirer directly from your inbox
    replyto: email,
  };

  // Optional destination override (if you want to route to a different inbox
  // than the one set in your Web3Forms dashboard)
  if (process.env.CONTACT_EMAIL) {
    payload.to = process.env.CONTACT_EMAIL;
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error('Web3Forms error:', result);
      return res.status(502).json({
        error: 'Failed to send enquiry',
        detail: result?.message || 'Unknown Web3Forms error',
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
