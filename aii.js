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
function createThinkingBubble() {
    const msg = document.createElement("div");
    msg.className = "msg ai thinking"; // Added 'thinking' class for easy finding
    msg.innerHTML = `<div class="bubble">... Thinking ...</div>`;
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

  // 3. 'Thinking...' message dikhao aur uska reference save karo
  const thinkingMsgElement = createThinkingBubble();
  try {
    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ query }),
    });
    thinkingMsgElement.remove();
    const data = await res.json();
    appendMessage("ai", data.reply);
    speakText(data.reply);
  } catch {
    appendMessage("ai", "⚠️ Error connecting to AI server");
  }finally {
    // 6. Finally: Button aur input ko wapas enable karo
    sendBtn.disabled = false;
    aiInput.disabled = false;
    aiInput.focus(); // Wapas input field par focus lao
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
