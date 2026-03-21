export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !subject) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const html = `
    <h2>New Enquiry from EIS Website</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="font-weight:bold;background:#f5f5f5;width:140px">Name</td><td>${name}</td></tr>
      <tr><td style="font-weight:bold;background:#f5f5f5">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="font-weight:bold;background:#f5f5f5">Phone</td><td>${phone || '—'}</td></tr>
      <tr><td style="font-weight:bold;background:#f5f5f5">Subject</td><td>${subject}</td></tr>
      <tr><td style="font-weight:bold;background:#f5f5f5">Message</td><td style="white-space:pre-wrap">${message || '—'}</td></tr>
    </table>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'EIS Contact Form <noreply@eis-uk.com>',
        to: process.env.CONTACT_EMAIL || 'enquiries@eis-uk.com',
        reply_to: email,
        subject: `EIS Enquiry: ${subject}`,
        html
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
