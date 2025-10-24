// translateServer.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fetch from "node-fetch"; // npm install node-fetch@2

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/translate", async (req, res) => {
  try {
    const { q, target } = req.body;
    if (!q || !target) return res.status(400).json({ error: "Missing q or target" });

    // Using MyMemory free translation API
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=en|${target}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data?.responseData?.translatedText) {
      res.json({ translatedText: data.responseData.translatedText });
    } else {
      console.error("API response error:", data);
      res.status(500).json({ error: "No translation returned" });
    }
  } catch (err) {
    console.error("❌ Translation failed:", err);
    res.status(500).json({ error: "Translation failed" });
  }
});

app.listen(3000, () => console.log("✅ Translation server running at http://localhost:3000"));
async function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");

  for (let el of elements) {
    const text = el.textContent.trim();
    try {
      const res = await fetch("http://localhost:3000/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: text, target: lang })
      });
      const data = await res.json();
      if (data.translatedText) {
        el.textContent = data.translatedText;
      }
    } catch (e) {
      console.error("Error translating:", e);
    }
  }
}

