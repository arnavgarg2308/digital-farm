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
    feedpig:"View Chart"
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
    feedpig:"चार्ट देखें"
  }
};

// ------------------- ADMIN: ADD SCHEME -------------------
function showAddSchemeForm() {
  document.getElementById('addSchemeForm').style.display = 'block';
}

function saveScheme() {
  const title = document.getElementById('schemeTitle').value.trim();
  const description = document.getElementById('schemeDescription').value.trim();
  const eligibility = document.getElementById('schemeEligibility').value.trim();
  const farmType = document.getElementById('schemeFarmType').value.trim();
  const expiry = document.getElementById('schemeExpiry').value;

  if (!title || !description) {
    alert('Title and Description are required!');
    return;
  }

  const schemes = JSON.parse(localStorage.getItem('schemes') || '[]');
  schemes.push({
    id: Date.now(),
    title,
    description,
    eligibility,
    farmType,
    expiry,
    createdAt: new Date().toISOString()
  });

  localStorage.setItem('schemes', JSON.stringify(schemes));
  alert('Scheme added successfully ✅');

  // reset form
  document.getElementById('schemeTitle').value = '';
  document.getElementById('schemeDescription').value = '';
  document.getElementById('schemeEligibility').value = '';
  document.getElementById('schemeFarmType').value = '';
  document.getElementById('schemeExpiry').value = '';

  document.getElementById('addSchemeForm').style.display = 'none';
}

// ------------------- DISPLAY SCHEMES (FARMER / ADMIN) -------------------
function displaySchemesForUser() {
  const container = document.getElementById('schemesContainer');
  if (!container) return;

  const schemes = JSON.parse(localStorage.getItem('schemes') || '[]');
  container.innerHTML = '';

  const today = new Date().toISOString().split('T')[0];
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  if (schemes.length === 0) {
    container.innerHTML = '<p>No schemes available.</p>';
    return;
  }

  schemes.forEach((s, index) => {
    const farmMatch = !s.farmType || (currentUser.farmType && s.farmType.toLowerCase() === currentUser.farmType.toLowerCase());
    const notExpired = !s.expiry || s.expiry >= today;

    // Show only valid schemes to farmers, all schemes to admin
    if (currentUser.role === 'farmer' && !(farmMatch && notExpired)) return;

    const div = document.createElement('div');
    div.className = 'scheme-card';
    div.innerHTML = `
      <h4>${s.title}</h4>
      <p>${s.description}</p>
      <small>Eligibility: ${s.eligibility || 'N/A'}</small><br>
      <small>Farm Type: ${s.farmType || 'All'}</small><br>
      <small>Expires: ${s.expiry || 'N/A'}</small><br>
    `;

    if (currentUser.role === 'admin') {
      const btn = document.createElement('button');
      btn.textContent = 'Delete';
      btn.className = 'delete-btn';
      btn.onclick = () => deleteScheme(index);
      div.appendChild(btn);
    }

    container.appendChild(div);
  });
}

// ------------------- DELETE SCHEME -------------------
function deleteScheme(index) {
  if (!confirm("Are you sure you want to delete this scheme?")) return;
  const schemes = JSON.parse(localStorage.getItem('schemes') || '[]');
  schemes.splice(index, 1);
  localStorage.setItem('schemes', JSON.stringify(schemes));
  displaySchemesForUser();
  alert("Scheme deleted successfully!");
}

// ------------------- LANGUAGE SWITCH -------------------
function changeLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

// ------------------- PAGE LOAD -------------------
document.addEventListener("DOMContentLoaded", function() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  // Load Government Schemes if schemesContainer exists
  if (document.getElementById('schemesContainer')) {
    displaySchemesForUser();
  }

  // Load saved language
  const savedLang = localStorage.getItem("lang") || "en";
  changeLanguage(savedLang);
});
