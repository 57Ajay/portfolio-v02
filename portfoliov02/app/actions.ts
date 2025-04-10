"use server"

import nodemailer from "nodemailer"

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER || "smtp.gmail.com",
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: data.email,
    subject: `Portfolio Contact: ${data.subject}`,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      
      Message:
      ${data.message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `,
  }


  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}
