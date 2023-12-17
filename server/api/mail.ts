import { createTransport } from 'nodemailer'
const { mailHost, mailUser, mailPassword, mailRecipient } = useRuntimeConfig()

async function mail(text: string) {
  const transporter = createTransport({
    host: mailHost,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: mailUser,
      pass: ''
    }
  })

  const info = await transporter.sendMail({
    from: mailUser,
    to: mailRecipient,
    subject: 'Test',
    text,
    html: `<p>${text}</p>`
  })

  return info
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  try {
    await mail(body.text)
    return 'success'
  } catch (error) {
    return 'error'
  }
})
