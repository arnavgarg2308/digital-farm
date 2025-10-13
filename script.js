// script.js

const translations = {
  en: {
    title: "Welcome to Smart Farm Solution",
    subtitle: "Choose your role to continue",
    farmer: "Farmer",
    admin: "Admin",
    buyer: "Buyer/Wholesaler",
    hintLaunch: "Tip: Click role → Signup (one time) → Login → Dashboard",
    loginTitle: "Login to Smart Farm Solution",
    signupTitle: "Create your Account",
    username: "Username",
    password: "Password",
    loginBtn: "Login",
    signupBtn: "Create Account",
    support: "Ai Chat+Support",
    dashboard: "Dashboard",
    Profile:"Profile",
    sup:"Support",
    log:"Logout",
    farmerDash:"👨‍🌾 Farmer Dashboard",
    risk:"Risk Assessment",
    history:"Assessment History",
    take:"Take assessment",
    training:"Training & Guides",
    trainingHint:"Short videos & tips",
    schemes:"Government Schemes",
    loan:"Apply Loan",
    session:"Book Session",
    vaccine:"Vaccination Schedule",
    feed:"Breeding & Feeding",
    sales:"Sales / Products",
    alerts:"Alerts",
    schemesList:"No schemes yet (demo)",
    loanHint:"Apply for small farm loan",
    sessionHint:"Book paid learning sessions",
    vaccineChart:"25 Sept — Bird Flu",
    feedHint:"Feeding schedule and charts",
    salesHint:"Update product listings",
    ask:"Ask questions & get voice replies",
    open1:"Open Chat",
    adminDash:"🛠️ Admin Dashboard",
    overview:"Farm Overview",
    heat:"Heatmap",
    compliance:"Compliance Tracker",
    reports:"Reports",
    open:"Open Heatmap",
    send:"Send demo alert",
    add:"Admin can add Training videos and guide",
    not:"[Shows who hasn't done assessment]",
    csv:"Generate CSV",
    adsc:"Admin can add schemes (demo)",
    total:"Total: 0",
    low:"Low: 0 | Medium: 0 | High: 0",
    buyerDash:"🛒 Buyer Dashboard",
    purchase:"Purchasing",
    farmDetails:"Farm Details",
    booking:"Booking",
    payment:"Payment",
    browse:"Browse Listings",
    ram:"Ramesh Poultry — Moderate Risk (demo)",
    book:"Book Order",
    pendind:"Pending: ₹0",
    pay:"Pay Now",
    vaccineChart:"25 Sept — Bird Flu",
    feedpig:"View Chat"


  },
  hi: {
    title: "स्मार्ट फार्म सॉल्यूशन में आपका स्वागत है",
    subtitle: "जारी रखने के लिए अपनी भूमिका चुनें",
    farmer: "किसान",
    admin: "प्रशासक",
    buyer: "खरीदार/थोक व्यापारी",
    hintLaunch: "टिप: भूमिका चुनें → साइनअप (एक बार) → लॉगिन → डैशबोर्ड",
    loginTitle: "स्मार्ट फार्म सॉल्यूशन में लॉगिन करें",
    signupTitle: "अपना खाता बनाएं",
    username: "उपयोगकर्ता नाम",
    password: "पासवर्ड",
    loginBtn: "लॉगिन",
    signupBtn: "खाता बनाएं",
    support: "ऐ चैट+सहायता",
    dashboard: "डैशबोर्ड",
    Profile:"प्रोफ़ाइल",
    sup: "सहायता",
    log:"लॉगआउट",
    farmerDash:"👨‍🌾 किसान डैशबोर्ड",
    risk:"जोखिम मूल्यांकन",
    history:"मूल्यांकन इतिहास",
    take:"मूल्यांकन करें",
    training:"प्रशिक्षण और मार्गदर्शिकाएँ",
    trainingHint:"छोटी वीडियो और सुझाव",
    schemes:"सरकारी योजनाएँ",
    loan:"ऋण के लिए आवेदन करें",
    session:"सत्र बुक करें",
    vaccine:"वैक्सीनेशन कार्यक्रम",
    feed:"प्रजनन और भोजन",
    sales:"बिक्री/उत्पाद",
    alerts:"अलर्ट्स",
    schemesList:"अभी तक कोई योजनाएं नहीं (डेमो)",
    loanHint:"छोटी कृषि ऋण के लिए आवेदन करें",
    sessionHint:"पेड लर्निंग सत्रों को बुक करें",
    vaccineChart:"25 सितंबर - बर्ड फ्लू",
    feedHint:"खिलाने के कार्यक्रम और चार्ट",
    salesHint:"उत्पाद सूची अपडेट करें",
    ask:"प्रश्न पूछें और आवाज़ में उत्तर प्राप्त करें",
    open1:"चैट खोलें",
    adminDash:"🛠️ प्रबंधक डैशबोर्ड",
    overview:"फार्म का अवलोकन",
    heat:"हीट अप मैप",
    compliance:"अनुपालन ट्रैकर",
    reports:"रिपोर्ट",
    open:"ओपन हीटमैप",
    send:"डेमो अलर्ट भेजें",
    add:"एडमिन प्रशिक्षण वीडियो और मार्गदर्शिका जोड़ सकता है",
    not:"[प्रदर्शित करें कि किसने आकलन नहीं किया है]",
    csv:"सीएसवी उत्पन्न करें",
    adsc:"व्यवस्थापक योजनाएँ जोड़ सकते हैं (डेमो)",
    total:"कुल: 0",
    low:"कम: 0 | मध्यम: 0 | उच्च: 0",
    buyerDash:"🛒 खरीददार डैशबोर्ड",
    purchase:"खरीदारी",
    farmDetails:"फार्म का विवरण",
    booking:"बुकिंग",
    payment:"भुगतान",
    browse:"सूची ब्राउज़ करें",
    ram:"रामेश पोल्ट्री — मध्य जोखिम (डेमो)",
    book:"पुस्तक आदेश",
    pendind:"लंबित:₹0",
    pay:"अब भुगतान करें",
    vaccineChart:"25 सितंबर - बर्ड फ्लू",
    feedpig:"चार्ट देखें"


  }
};

// Change language function
function changeLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang); // Save preference
}
function initHeatmap() {
  // Map ko India ke center pe set karo
  var map = L.map('map').setView([22.9734, 78.6569], 5);

  // OpenStreetMap tiles load karo
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Example heat data (lat, lng, intensity)
  var heat = L.heatLayer([
    [28.6139, 77.2090, 0.8], // Delhi
    [19.0760, 72.8777, 0.6], // Mumbai
    [13.0827, 80.2707, 0.4], // Chennai
    [22.5726, 88.3639, 0.9]  // Kolkata
  ], {radius: 40}).addTo(map);
}
/* ==== Full Page AI Chat Support ==== */
const chatBody = document.getElementById('chatBody');
const aiInput = document.getElementById('aiInput');
const sendBtn = document.getElementById('sendBtn');
const micBtn = document.getElementById('micBtn');

function appendMessage(who, text){
  if(!chatBody) return;
  const wrap = document.createElement('div');
  wrap.className = 'msg ' + (who==='user'?'user':'ai');
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerText = text;
  wrap.appendChild(bubble);
  chatBody.appendChild(wrap);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function speakText(text){
  if(!('speechSynthesis' in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = (localStorage.getItem('sflang')==='hi') ? 'hi-IN' : 'en-US';
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function simpleResponder(q){
  const ql = q.toLowerCase();

  // vaccine related
  if(ql.includes('vaccine') || ql.includes('vaccination') || ql.includes('schedule')) {
    return "Yes. Here is a sample vaccination schedule: \n- Day 1: Marek's disease \n- Week 2: Newcastle + IB \n- Week 4: Gumboro \n- Week 6: Booster (Newcastle) \n(Always confirm with your local vet)";
  }

  // sickness
  if(ql.includes('sick') || ql.includes('ill') || ql.includes('disease') || ql.includes('symptom')) {
    return "No. Sick animals should always be isolated and reported to a vet immediately.";
  }

  // feeding
  if(ql.includes('feed') || ql.includes('feeding') || ql.includes('food') || ql.includes('ration')) {
    return "Yes. Feed a balanced diet twice daily and provide clean water at all times.";
  }

  // antibiotics
  if(ql.includes('antibiotic') || ql.includes('medicine') || ql.includes('drug')) {
    return "No. Avoid antibiotics without veterinarian advice.";
  }

  // loans and schemes
  if(ql.includes('loan') || ql.includes('scheme') || ql.includes('government')) {
    return "Yes. You can apply under the Government Schemes → Loan section.";
  }

  return "Sorry, I don’t know that. Please consult a vet.";
}


function handleSend(text){
  const query = text || aiInput.value.trim();
  if(!query) return;
  appendMessage('user', query);
  aiInput.value = '';
  const ans = simpleResponder(query);
  appendMessage('ai', ans);
  speakText(ans);
}

if(sendBtn) sendBtn.addEventListener('click', ()=> handleSend());
if(aiInput) aiInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter') handleSend(); });

if(micBtn){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(SpeechRecognition){
    const recog = new SpeechRecognition();
    recog.lang = (localStorage.getItem('sflang')==='hi') ? 'hi-IN' : 'en-US';
    micBtn.addEventListener('click', ()=> recog.start());
    recog.onresult = (e)=> handleSend(e.results[0][0].transcript);
  }
}

// Sirf admin.html me heatmap load karna hai
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("map")) {
    initHeatmap();
  }
});


// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  document.getElementById("language").value = savedLang;
  changeLanguage(savedLang);
});
