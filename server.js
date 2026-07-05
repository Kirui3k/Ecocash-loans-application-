const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// 🔐 Put these in Render Environment Variables
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.use(cors());
app.use(express.json());

app.post("/apply", async (req, res) => {
  const data = req.body;

  const message = `
📩 NEW LOAN APPLICATION

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
🆔 NID: ${data.nid}
🎂 DOB: ${data.dob}
💼 Employment: ${data.employment}
💰 Loan: ${data.loanAmount}
⏳ Repayment: ${data.repayment}
`;

  try {
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message
    });

    res.status(200).send("OK");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Failed");
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
