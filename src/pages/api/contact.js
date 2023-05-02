import nodemailer from "nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    try {
      const emailInfo = await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Contact Form Submission From ${data.name}`,
        html: `<h1>You have new contact form submission</h1><br />
        <p><strong>Email:</strong> ${data.email}</p><br />
        <p><strong>Name:</strong> ${data.name}</p><br />
        <p><strong>Phone:</strong> ${data.phone}</p><br />
        <p><strong>Business name:</strong> ${data.businessName}</p><br />
        <p><strong>Business address:</strong> ${data.businessAddress}</p><br />
        <p><strong>Business description:</strong> ${data.businessDescription}</p><br />
        <p><strong>Previous website link:</strong> ${data.previousWebsite}</p><br />
        <p><strong>Social media links:</strong> ${data.socialMedia}</p><br />
        <p><strong>Reference site link:</strong> ${data.referenceSite}</p><br />
        <p><strong>Hosting details:</strong> ${data.hostingDetails}</p><br />
        <p><strong>Hosting offer:</strong> ${data.hostingOffer}</p><br />`,
      });
      console.log("Message sent successfully", emailInfo.messageId);
    } catch (error) {
      console.log(error);
    }

    return res.json({ data });
  }

  return res.status(400).json({
    msg: "Bad Request",
  });
};

export default handler;
