const chatBody = document.getElementById("chatBody");
const aiInput = document.getElementById("aiInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");
const BASE_URL = "https://digitalfarming-1.onrender.com";
function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `msg ${sender}`;
  msg.innerHTML = `<div class="bubble">${text}</div>`;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function createThinkingBubble() {
  const msg = document.createElement("div");
  msg.className = "msg ai thinking";
  msg.innerHTML = `<div class="bubble"><i>🤔 Thinking...</i></div>`;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
  return msg;
}

async function handleSend(text) {
  const query = text || aiInput.value.trim();
  if (!query) return;

  appendMessage("user", query);
  aiInput.value = "";
  sendBtn.disabled = true;
  aiInput.disabled = true;

  const thinkingMsgElement = createThinkingBubble();

  try {
    const res = await fetch(`${BASE_URL}/chat`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
});


    thinkingMsgElement.remove();

    if (!res.ok) {
      appendMessage("ai", "⚠️ Server error. Try again later.");
      return;
    }

    const data = await res.json();
    const reply = data.reply?.trim() || "⚠️ No valid response.";
    appendMessage("ai", reply);
    speakText(reply);
  } catch (error) {
    thinkingMsgElement.remove();
    appendMessage("ai", "⚠️ Error connecting to AI server.");
    console.error("Fetch error:", error);
  } finally {
    sendBtn.disabled = false;
    aiInput.disabled = false;
    aiInput.focus();
  }
}

// 🔊 Speak in correct language automatically
function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = /[\u0900-\u097F]/.test(text) ? "hi-IN" : "en-US";
  utterance.rate = 1.05;
  speechSynthesis.speak(utterance);
}

sendBtn?.addEventListener("click", () => handleSend());
aiInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSend();
});

// 🎙️ Voice Input
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recog = new SpeechRecognition();
  recog.continuous = false;
  recog.lang = "hi-IN";

  micBtn.addEventListener("click", () => {
    micBtn.textContent = "🎤 Listening...";
    recog.start();
  });

  recog.onresult = (e) => {
    micBtn.textContent = "🎙️";
    const transcript = e.results[0][0].transcript;
    handleSend(transcript);
  };

  recog.onerror = () => (micBtn.textContent = "🎙️");
}
