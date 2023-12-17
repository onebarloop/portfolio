import { createTransport } from 'nodemailer'
const { mailHost, mailUser, mailPassword, mailRecipient } = useRuntimeConfig()

async function mail(text: string, mail: string = 'Keine Angabe') {
  const transporter = createTransport({
    host: mailHost,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: mailUser,
      pass: mailPassword
    }
  })

  const info = await transporter.sendMail({
    from: mailUser,
    to: mailRecipient,
    subject: `Portfolio Post von ${mail}`,
    text,
    html: `<p>${text}</p>`
  })

  return info
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body)
  try {
    await mail(body.text, body.mail)
    return 'success'
  } catch (error) {
    return 'error'
  }
})
