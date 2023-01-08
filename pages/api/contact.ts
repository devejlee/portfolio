import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await transporter.sendMail({
        from: 'test@example.com',
        to: 'develijahlee@gmail.com',
        subject: 'Test Subject',
        text: 'Test Text'
      });
      res.status(200).send('Email sent');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    }
  }
};

export default handler;