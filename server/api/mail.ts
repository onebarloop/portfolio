import { createTransport } from 'nodemailer'
import { ref } from 'vue'

const { mailHost, mailUser, mailPassword, mailRecipient } = useRuntimeConfig()
const counter = ref(0)

setInterval(() => {
  counter.value = 0
}, 1000000)

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
  counter.value += 1
  if (counter.value > 10) {
    throw createError({
      statusCode: 500,
      statusMessage: 'oops'
    })
  } else {
    const body = await readBody(event)
    try {
      await mail(body.text, body.email)
      return 'success'
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'servererror'
      })
    }
  }
})
