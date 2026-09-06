/* global process */

export default async function handler(req, res) {
  // 1. Accept POST requests only
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    // 2. Read visitor's approximate location from Vercel's automatic geo headers
    const decodeHeader = (val) => {
      if (!val) return ''
      try {
        return decodeURIComponent(val)
      } catch {
        return String(val)
      }
    }

    const city = decodeHeader(req.headers['x-vercel-ip-city'])
    const region = decodeHeader(req.headers['x-vercel-ip-region'])
    const country = decodeHeader(req.headers['x-vercel-ip-country'])

    const locationParts = []
    if (city) locationParts.push(city)
    if (region) locationParts.push(region)
    if (country) locationParts.push(country)
    const location = locationParts.length > 0 ? locationParts.join(', ') : 'Unknown'

    // 3. Read page, referrer, and userAgent from JSON request body
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
    const { page = '/', referrer = '', userAgent = '' } = body

    // 4. Device parsed from userAgent
    const isMobile = /mobile|iphone|ipod|android.*mobile|windows phone|blackberry/i.test(userAgent)
    const isTablet = /ipad|tablet|(android(?!.*mobile))/i.test(userAgent)
    const device = isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'

    // 5. Build readable message
    const formattedReferrer = referrer && referrer.trim() ? referrer.trim() : 'Direct'
    const currentTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }) + " IST"

    const message = [
      '🔔 New visitor',
      `Location: ${location}`,
      `Page: ${page || '/'}`,
      `Referrer: ${formattedReferrer}`,
      `Device: ${device}`,
      `Time: ${currentTime}`,
    ].join('\n')

    // 6. Read credentials from process.env (never hardcoded)
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variable is missing')
      return res.status(500).json({ error: 'Telegram configuration is missing' })
    }

    // 7. Send message to Telegram API
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    const telegramRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })

    if (!telegramRes.ok) {
      const errorText = await telegramRes.text()
      console.error('Telegram API error response:', errorText)
      return res.status(500).json({ error: 'Failed to send Telegram message' })
    }

    return res.status(200).json({ success: true })
  } catch (error) {
    // 8. Catch all errors gracefully without throwing unhandled exceptions
    console.error('Unhandled error in /api/notify:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
