import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: "Missing query" });
 const isHindi = /[\u0900-\u097F]/.test(query);
    const apiKey = "AIzaSyCvc7-KaV6f8nedTIaapzeyk36UI2Fehlk"; // ✅ Use your key
    const model = "models/gemini-2.5-pro"; // ✅ Verified working model name

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=AIzaSyCvc7-KaV6f8nedTIaapzeyk36UI2Fehlk`;

    const payload = {
      contents: [{ role: "user", parts: [{ text: query }] }],
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: isHindi
                  ? `Answer this in Hindi: ${query}`
                  : `Answer this in English: ${query}`
              }
            ]
          }
        ]
      })
    });

    const data = await response.json();

    console.log("Gemini full response ↓↓↓");
    console.dir(data, { depth: null });

    // ✅ Fix: look for text safely, even if wrapped differently
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.candidates?.[0]?.output ||
      data?.output ||
      data?.promptFeedback?.output ||
      "No valid reply from Gemini.";

    res.json({ reply });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () =>
  console.log("✅ Gemini AI server running on http://localhost:3000")
);