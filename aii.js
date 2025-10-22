const chatBody = document.getElementById("chatBody");
const aiInput = document.getElementById("aiInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = "msg " + sender;
  msg.innerHTML = `<div class="bubble">${text}</div>`;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

async function handleSend(text) {
  const query = text || aiInput.value.trim();
  if (!query) return;
  appendMessage("user", query);
  aiInput.value = "";

  try {
    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ query }),
    });
    const data = await res.json();
    appendMessage("ai", data.reply);
    speakText(data.reply);
  } catch {
    appendMessage("ai", "⚠️ Error connecting to AI server");
  }
}

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

sendBtn?.addEventListener("click", () => handleSend());
aiInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSend();
});

// 🎙️ Voice Input
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
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
