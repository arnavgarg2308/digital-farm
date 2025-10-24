import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors({ origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"] }));
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      console.log("❌ No query received");
      return res.status(400).json({ error: "Missing query" });
    }

    const isHindi = /[\u0900-\u097F]/.test(query);
    const langInstruction = isHindi
      ? `उत्तर हिंदी में दो: ${query}`
      : `Answer in English: ${query}`;

    const apiKey = "AIzaSyASq5OP_wpbZ9wPCgQMwTde8NP_V3St74A";
    const model = "models/gemini-2.5-flash";

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyASq5OP_wpbZ9wPCgQMwTde8NP_V3St74A`;
    console.log("🌍 Sending request to Gemini:", url);

    const bodyData = {
      contents: [{ role: "user", parts: [{ text: langInstruction }] }],
    };

    console.log("📤 Payload being sent:", JSON.stringify(bodyData, null, 2));

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyData),
    });

    console.log("📥 Gemini API status:", response.status);
    const data = await response.json();
    console.log("🧠 Full Gemini response ↓↓↓");
    console.dir(data, { depth: null });

    let reply = "No valid reply from Gemini.";
    if (data?.candidates?.length) {
      const parts = data.candidates[0].content?.parts;
      if (Array.isArray(parts)) {
        reply = parts.map((p) => p.text || "").join(" ").trim();
      }
    }

    if (!reply || reply.trim() === "") {
      reply =
        data?.candidates?.[0]?.output ||
        data?.output ||
        data?.promptFeedback?.output ||
        "No valid reply from Gemini.";
    }

    res.json({ reply });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
});
app.post("/analyze", async (req, res) => {
  try {
    // accept both "image" and "imageBase64" just in case
    const { image, imageBase64 } = req.body;
    const imgData = image || imageBase64;

    if (!imgData) {
      console.log("❌ No image data received.");
      return res.status(400).json({ error: "Missing image data" });
    }

    const apiKey = "AIzaSyASq5OP_wpbZ9wPCgQMwTde8NP_V3St74A"; // replace with your key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyASq5OP_wpbZ9wPCgQMwTde8NP_V3St74A`;

    const body = {
      contents: [
        {
          parts: [
            {
              text: "You are a veterinary AI. Analyze this animal image and tell if it looks healthy or diseased. Describe symptoms if any."
            },
            {
              inline_data: {
                mime_type: "image/jpeg",
                data: imgData
              }
            }
          ]
        }
      ]
    };

    console.log("📤 Sending image to Gemini...");
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    console.log("📥 Gemini response status:", response.status);
    const data = await response.json();
    console.dir(data, { depth: null });

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No valid analysis from Gemini.";

    res.json({ reply });
  } catch (err) {
    console.error("❌ Error analyzing image:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

app.listen(3000, () =>
  console.log("✅ Gemini AI server running on http://localhost:3000")
);