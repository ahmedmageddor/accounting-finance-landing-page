const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "outlok",
    auth: {
      user: "finmodelx@outlook.com",
      pass: "MahdyHema1999",
    },
  });

  const mailOptions = {
    from: email,
    to: "finmodelx@outlook.com",
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: "Email sent successfully!" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
