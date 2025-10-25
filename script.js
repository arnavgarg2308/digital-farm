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
});
 // ------- SIGNUP -------
function signupUser(e, role) {
  e.preventDefault();
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const email = document.getElementById('email').value.trim().toLowerCase();
  // Check duplicates
const phone = document.getElementById('phone').value.trim();

if (users.some(u => u.email === email)) {
  alert('Email already registered.');
  return;
}
if (users.some(u => u.phone === phone)) {
  alert('Phone number already registered.');
  return;
}

    // Create base user object
  const user = {
    id: Date.now(),
    name: document.getElementById('name').value.trim(),
    email,
    password: document.getElementById('password').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    role,
   avatar: "",
    createdAt: new Date().toISOString()
  };
user.avatar = "";
localStorage.removeItem(`lastAvatar_${role}`);

  // ---- Role specific fields ----
  if (role === 'farmer') {
    user.farmName = document.getElementById('farmName')?.value.trim() || '';
    user.farmArea = document.getElementById('farmArea')?.value.trim() || '';
    user.district = document.getElementById('district')?.value.trim() || '';
    user.state = document.getElementById('state')?.value.trim() || '';
    user.village = document.getElementById('village')?.value.trim() || '';
    user.productionType = document.getElementById('productionType')?.value || '';
  }

  if (role === 'admin') {
    user.designation = document.getElementById('designation')?.value.trim() || '';
    user.organization = document.getElementById('organization')?.value.trim() || '';
    user.officeAddress = document.getElementById('officeAddress')?.value.trim() || '';
    user.adminCode = document.getElementById('adminCode')?.value.trim() || '';

    if (user.adminCode !== 'ADMIN2024') {
      alert('Invalid Admin Access Code!');
      return;
    }
  }

  if (role === 'buyer') {
    user.company = document.getElementById('company')?.value.trim() || '';
    user.companyAddress = document.getElementById('companyAddress')?.value.trim() || '';
    user.gst = document.getElementById('gst')?.value.trim() || '';
    user.businessType = document.getElementById('businessType')?.value || '';
  }

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  alert('Account created successfully! Redirecting to login...');
  setTimeout(() => {
    window.location.href = `${role}-login.html`;
  }, 1500);
}

// ------- LOGIN -------
function loginUser(e, role) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass = document.getElementById('loginPassword').value;
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const u = users.find(x => x.email === email && x.password === pass && x.role === role);
  if (!u) return alert('Invalid credentials or wrong role.');

  localStorage.setItem("currentUser", JSON.stringify(u));
  localStorage.setItem(`currentUser_${role}`, JSON.stringify(u));
   localStorage.setItem('currentUserRole', role); // to remember which role logged in

  // ✅ Save latest avatar for header
if (u.avatar) {
  localStorage.setItem("lastAvatar", u.avatar);
} else {
  localStorage.removeItem("lastAvatar");
}

  alert('Login successful!');
  // Show correct header photo immediately
const headerAvatar = document.getElementById("headerAvatar");
if (headerAvatar) {
  if (u.avatar) {
    headerAvatar.src = u.avatar;
    headerAvatar.style.display = "inline-block";
  } else {
    headerAvatar.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    headerAvatar.style.display = "inline-block";
  }
}

  if (role === 'farmer') location.href = 'farmer.html';
  else if (role === 'buyer') location.href = 'buyer.html';
  else location.href = 'admin.html';
}
/* ---------- FORGOT PASSWORD (demo OTP flow) ---------- */

// Start: ask user for email OR phone
function startForgotPassword() {
  const identifier = prompt("Enter your registered Email or Phone number:");
  if (!identifier) return;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === identifier.toLowerCase() || u.phone === identifier);
  if (!user) {
    alert("User not found with this email/phone.");
    return;
  }

  // generate OTP (4-digit) and save in localStorage with expiry (5 min)
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const otpObj = { otp, userId: user.id, expiresAt: Date.now() + 5 * 60 * 1000 };
  localStorage.setItem("sf_pwd_otp", JSON.stringify(otpObj));

  // In real app: send OTP via email/SMS. Demo: show OTP to user (or alert)
  alert(`Demo OTP (for testing): ${otp}\n(OTP valid 5 minutes)`);

  // prompt for OTP
  const entered = prompt("Enter OTP you received:");
  if (!entered) return alert("OTP entry cancelled.");

  const stored = JSON.parse(localStorage.getItem("sf_pwd_otp") || "null");
  if (!stored || stored.userId !== user.id) return alert("No OTP found. Try again.");
  if (Date.now() > stored.expiresAt) { localStorage.removeItem("sf_pwd_otp"); return alert("OTP expired. Try again."); }
  if (entered.trim() !== stored.otp) return alert("Invalid OTP.");

  // OTP valid — prompt for new password
  const newPass = prompt("Enter new password (min 8 characters, include upper, lower, number):");
  if (!newPass) return alert("Password reset cancelled.");
  if (!validatePassword(newPass)) return alert("Password does not meet strength requirements.");

  // update user password
  const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
  const idx = allUsers.findIndex(x => x.id === user.id);
  if (idx === -1) return alert("User not found (unexpected).");
  allUsers[idx].password = newPass;
  localStorage.setItem("users", JSON.stringify(allUsers));
  localStorage.removeItem("sf_pwd_otp");
  showToast("✅ Password updated. You can now login.", "success");
}
/* ---------- ADMIN: render farmers list & view details ---------- */

function renderFarmersOverview() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const farmers = users.filter(u => u.role === "farmer");
  const list = document.getElementById("farmerList");
  if (!list) return; // if container not present on page
  list.innerHTML = "";
  if (farmers.length === 0) {
    list.innerHTML = "<div style='color:#bbb'>No farmers registered.</div>";
    return;
  }

  farmers.forEach((f) => {
    const div = document.createElement("div");
    div.style.background = "#0b0b0b";
    div.style.border = "1px solid #222";
    div.style.padding = "10px";
    div.style.borderRadius = "8px";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";

    const left = document.createElement("div");
    left.innerHTML = `<strong>${escapeHtml(f.fullName || f.name || "—")}</strong><div style="font-size:0.9rem;color:#9aa0a6">${f.email} • ${f.phone || '—'}</div>`;

    const right = document.createElement("div");
    const viewBtn = document.createElement("button");
    viewBtn.innerText = "View";
    viewBtn.className = "mini";
    viewBtn.onclick = () => showFarmerDetails(f.id);

    right.appendChild(viewBtn);

    div.appendChild(left);
    div.appendChild(right);
    list.appendChild(div);
  });
}

function showFarmerDetails(userId) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const u = users.find(x => x.id == userId);
  if (!u) return alert("Farmer not found.");
  // build detail HTML
  let html = `<h3>${escapeHtml(u.fullName || u.name)}</h3>`;
  html += `<p><strong>Email:</strong> ${escapeHtml(u.email)}</p>`;
  html += `<p><strong>Phone:</strong> ${escapeHtml(u.phone || '—')}</p>`;
  html += `<p><strong>Role:</strong> ${escapeHtml(u.role)}</p>`;
  html += `<p><strong>Created:</strong> ${new Date(u.createdAt).toLocaleString()}</p>`;

  // load assessments if available
  const assessments = JSON.parse(localStorage.getItem("sf_assessments") || "[]").filter(a => a.user === u.phone || a.user === u.email || a.user === u.id);
  if (assessments.length) {
    html += `<h4>Assessments</h4><ul>`;
    assessments.forEach(a => {
      html += `<li>${new Date(a.createdAt).toLocaleString()} — ${Math.round(a.score*100)}% — ${a.level}</li>`;
    });
    html += `</ul>`;
  } else html += `<p style="color:#aaa">No assessments recorded.</p>`;

  document.getElementById("farmerModalBody").innerHTML = html;
  document.getElementById("farmerModal").classList.remove("hidden");
}

function closeFarmerModal() {
  const m = document.getElementById("farmerModal");
  if (m) m.classList.add("hidden");
}

// small helper to avoid injection while rendering
function escapeHtml(s) {
  if (!s) return "";
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
// ==== ADMIN VIDEO UPLOAD ====
function uploadVideo() {
  const input = document.getElementById('videoUpload');
  const files = input.files;

  if (!files.length) {
    alert("Please select video files to upload!");
    return;
  }

  // Get previously uploaded videos
  const stored = JSON.parse(localStorage.getItem('trainingVideos') || '[]');

  // Add new uploads
  Array.from(files).forEach(file => {
    const url = URL.createObjectURL(file); // temporary local URL for preview
    stored.push({ name: file.name, url });
  });

  // Save back to localStorage
  localStorage.setItem('trainingVideos', JSON.stringify(stored));
  alert("Videos uploaded successfully! They will appear on the Training & Guides page.");
}

/* ===== PROFILE BUTTON SECTION (appears in header) ===== */

function openProfile() {
  const role = localStorage.getItem("currentUserRole");
const currentUser = JSON.parse(localStorage.getItem(`currentUser_${role}`) || "null");
if (!currentUser) {
    alert("No user logged in!");
    return;
  }

  const container = document.getElementById("profileContainer");
  if (!container) return;

  // toggle visibility
  const isVisible = container.style.display === "block";
  if (isVisible) { container.style.display = "none"; return; }
  container.style.display = "block";

  // build HTML
  const avatarSrc = currentUser.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  container.innerHTML = `
    <div style="background:#141416;padding:20px;border-radius:12px;border:1px solid #222;">
      <div style="text-align:center;">
        <img src="${avatarSrc}" id="profileAvatar" style="width:110px;height:110px;border-radius:50%;object-fit:cover;border:2px solid #333;">
        <br>
        <input type="file" id="avatarUpload" accept="image/*" style="display:none;">
        <button onclick="document.getElementById('avatarUpload').click()">Change Photo</button>

      </div>

      <div id="profileDetails" style="margin-top:18px;text-align:left;"></div>

      <div style="margin-top:12px;text-align:center;">
        <button class="btn" onclick="editProfile()">Edit Profile</button>
        <button class="btn secondary" onclick="closeProfile()">Close</button>
      </div>
    </div>
  `;

  renderProfileDetails(currentUser);
}

function renderProfileDetails(user) {
  const details = document.getElementById("profileDetails");
  if (!details) return;
  let html = `
    <p><strong>Name:</strong> ${user.fullName || user.name || "-"}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone || "-"}</p>
    <p><strong>Role:</strong> ${user.role}</p>
  `;

  if (user.role === "farmer") {
    html += `
      <p><strong>Farm Name:</strong> ${user.farmName || "-"}</p>
      <p><strong>Area:</strong> ${user.farmArea || "-"}</p>
      <p><strong>District:</strong> ${user.district || "-"}</p>
    `;
  } else if (user.role === "buyer") {
    html += `<p><strong>Company:</strong> ${user.company || "-"}</p>`;
  } else if (user.role === "admin") {
    html += `<p><strong>Organization:</strong> ${user.organization || "-"}</p>`;
  }
  details.innerHTML = html;
}

/* ----- Edit mode ----- */
function editProfile() {
  const role = localStorage.getItem("currentUserRole");
  const currentUser = JSON.parse(localStorage.getItem(`currentUser_${role}`) || "null");
  if (!currentUser) return;
  
  let html = `
    <label>Full Name:</label><input id="edit_fullName" value="${currentUser.fullName || currentUser.name || ""}" />
    <label>Phone:</label><input id="edit_phone" value="${currentUser.phone || ""}" />
  `;

  if (currentUser.role === "farmer") {
    html += `
      <label>Farm Name:</label><input id="edit_farmName" value="${currentUser.farmName || ""}" />
      <label>Farm Area:</label><input id="edit_farmArea" value="${currentUser.farmArea || ""}" />
      <label>District:</label><input id="edit_district" value="${currentUser.district || ""}" />
    `;
  } else if (currentUser.role === "buyer") {
    html += `<label>Company:</label><input id="edit_company" value="${currentUser.company || ""}" />`;
  } else if (currentUser.role === "admin") {
    html += `<label>Organization:</label><input id="edit_organization" value="${currentUser.organization || ""}" />`;
  }

  html += `
    <div style="margin-top:12px;text-align:center;">
      <button class="btn" onclick="saveProfileChanges()">Save</button>
      <button class="btn secondary" onclick="cancelProfileEdit()">Cancel</button>
    </div>
  `;
  document.getElementById("profileDetails").innerHTML = html;
}

/* ----- Save edits ----- */
function saveProfileChanges() {
  const role = localStorage.getItem("currentUserRole");
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  let currentUser = JSON.parse(localStorage.getItem(`currentUser_${role}`) || "null");
  if (!currentUser) return;

  currentUser.fullName = document.getElementById("edit_fullName").value.trim();
  currentUser.phone = document.getElementById("edit_phone").value.trim();

  if (currentUser.role === "farmer") {
    currentUser.farmName = document.getElementById("edit_farmName").value.trim();
    currentUser.farmArea = document.getElementById("edit_farmArea").value.trim();
    currentUser.district = document.getElementById("edit_district").value.trim();
  } else if (currentUser.role === "buyer") {
    currentUser.company = document.getElementById("edit_company").value.trim();
  } else if (currentUser.role === "admin") {
    currentUser.organization = document.getElementById("edit_organization").value.trim();
  }

  // update users list
  const idx = users.findIndex(u => u.id === currentUser.id);
  if (idx !== -1) users[idx] = currentUser;

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem(`currentUser_${role}`, JSON.stringify(currentUser));

  alert("✅ Profile updated!");
  renderProfileDetails(currentUser);
}

/* ----- Cancel edit ----- */
function cancelProfileEdit() {
  const role = localStorage.getItem("currentUserRole");
  const currentUser = JSON.parse(localStorage.getItem(`currentUser_${role}`) || "null");
  if (currentUser) renderProfileDetails(currentUser);
}

/* ----- Close profile section ----- */
function closeProfile() {
  const container = document.getElementById("profileContainer");
  if (container) container.style.display = "none";
}

/* ----- Avatar upload ----- */
function triggerAvatarUpload() {
  document.getElementById("avatarUpload").click();
}
document.addEventListener("change", (e) => {
  if (e.target && e.target.id === "avatarUpload") {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const imgData = event.target.result;

      // ✅ show uploaded immediately
      const avatarImg = document.getElementById("profileAvatar");
      if (avatarImg) avatarImg.src = imgData;

      // ✅ update the correct logged-in user
      const role = localStorage.getItem("currentUserRole");
      let currentUser = JSON.parse(localStorage.getItem(`currentUser_${role}`) || "{}");
      if (!currentUser.id) return;

      currentUser.avatar = imgData;
      localStorage.setItem(`currentUser_${role}`, JSON.stringify(currentUser));

      // ✅ Update in the users array
      const allUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const idx = allUsers.findIndex(u => u.id === currentUser.id);
      if (idx !== -1) {
        allUsers[idx].avatar = imgData;
        localStorage.setItem("users", JSON.stringify(allUsers));
      }

      // ✅ Update header photo
      const headerAvatar = document.getElementById("headerAvatar");
      if (headerAvatar) {
        headerAvatar.src = imgData;
        headerAvatar.style.display = "inline-block";
      }
    };
    reader.readAsDataURL(file);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const role = localStorage.getItem("currentUserRole");
  const currentUser = JSON.parse(localStorage.getItem(`currentUser_${role}`) || "null");

  const headerAvatar = document.getElementById("headerAvatar");
  
  const profileAvatar = document.getElementById("profileAvatar");
  

  // ✅ Step 1: Load correct avatar when page opens
  if (currentUser && currentUser.avatar) {
    const imgSrc = currentUser.avatar;
    if (headerAvatar) {
      headerAvatar.src = imgSrc;
      headerAvatar.style.display = "inline-block";
    }
    if (profileAvatar) {
      profileAvatar.src = imgSrc;
    }

    // store session-based avatar for reload consistency
    localStorage.setItem(`lastAvatar_${role}`, imgSrc);
  }   else {
    // ✅ Always use default avatar for new users (no photo)
    const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
    if (headerAvatar) {
      headerAvatar.src = defaultAvatar;
      headerAvatar.style.display = "inline-block";
    }
    if (profileAvatar) {
      profileAvatar.src = defaultAvatar;
    }

    // remove old saved avatar (fix old image showing for new user)
    localStorage.removeItem(`lastAvatar_${role}`);
  }


  // ✅ Step 2: Before leaving / reload — persist last avatar safely
  window.addEventListener("beforeunload", () => {
    const role = localStorage.getItem("currentUserRole");
    const currentUser = JSON.parse(localStorage.getItem(`currentUser_${role}`) || "null");
    if (currentUser && currentUser.avatar) {
      localStorage.setItem(`lastAvatar_${role}`, currentUser.avatar);
    }
  });
});
function logout() {
  const role = localStorage.getItem("currentUserRole");
  localStorage.removeItem(`currentUser_${role}`);
  localStorage.removeItem("currentUserRole");
  window.location.href = "index.html";
}
function openFeature(feature) {
  if (feature === "health") {
    window.open("health.html", "_blank"); // open in new tab
  }
}
// ================== BASE URL ==================
const BASE_URL = "http://localhost:3000";

// 🩺 BOOK VET APPOINTMENT
async function bookVetAppointment(vet) {
  const role = localStorage.getItem("currentUserRole");
  if (role !== "farmer") return alert("Please login as Farmer first.");

  // ✅ fetch correct farmer data
  const currentUser = JSON.parse(localStorage.getItem("currentUser_farmer") || "{}");

  // validate
  if (!currentUser || !currentUser.id) {
    alert("Farmer not logged in properly!");
    return;
  }

  const farmerName = currentUser.fullName || currentUser.name || "Unknown Farmer";
  const farmAnimal = currentUser.farmName || "Farm Animal";

  console.log("🐮 Booking created by:", farmerName, currentUser);

  const res = await fetch(`${BASE_URL}/api/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: currentUser.id,           // ✅ store farmer id for tracking
      petOwner: farmerName,             // ✅ store correct name
      petName: farmAnimal,
      vetName: vet.name,
      date: new Date().toLocaleString(),
      status: "pending"
    })
  });

  if (res.ok) alert(`✅ Appointment booked by ${farmerName} with ${vet.name}`);
  else alert("⚠️ Failed to book appointment.");
}

// 💊 PLACE MEDICINE ORDER
async function placeMedicineOrder(name, qty, address) {
  const role = localStorage.getItem("currentUserRole");
  if (role !== "farmer") return alert("Please login as Farmer first.");

  const currentUser = JSON.parse(localStorage.getItem("currentUser_farmer") || "{}");

  if (!currentUser || !currentUser.id) {
    alert("Farmer not logged in properly!");
    return;
  }

  const farmerName = currentUser.fullName || currentUser.name || "Unknown Farmer";
  const farmAddress = address || currentUser.village || "No address";

  console.log("💊 Order placed by:", farmerName, currentUser);

  const res = await fetch(`${BASE_URL}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: currentUser.id,           // ✅ store id too
      petOwner: farmerName,             // ✅ farmer name
      medicineName: name,
      quantity: qty,
      deliveryAddress: farmAddress,
      orderDate: new Date().toLocaleString(),
      status: "pending"
    })
  });

  if (res.ok) alert(`🧾 Order placed by ${farmerName} for "${name}" (${qty})`);
  else alert("⚠️ Failed to place order.");
}

async function placeMedicineOrder(name, qty, address) {
  const role = localStorage.getItem("currentUserRole");
  if (role !== "farmer") return alert("Please login as Farmer.");

  // ✅ Fetch correct farmer data
  const currentUser = JSON.parse(localStorage.getItem(`currentUser_${role}`) || "{}");

  if (!currentUser?.fullName && !currentUser?.name) {
    return alert("Farmer information not found. Please login again.");
  }

  const farmerName = currentUser.fullName || currentUser.name;
  const farmAddress = address || currentUser.village || "No Address";

  console.log("💊 Medicine order placed by:", farmerName);

  await fetch(`${BASE_URL}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      petOwner: farmerName,           // ✅ Correct farmer name
      medicineName: name,
      quantity: qty,
      deliveryAddress: farmAddress,
      orderDate: new Date().toLocaleString(),
      status: "pending"
    })
  });

  alert(`🧾 Order placed by ${farmerName} for "${name}" (${qty})`);
}

// ================== MEDICAL - ADMIN SIDE ==================
async function fetchMedicalData() {
  const bookingStatus = document.getElementById("bookingStatus")?.value || "all";
  const orderStatus = document.getElementById("orderStatus")?.value || "all";
  const searchTerm = document.getElementById("searchInput")?.value.toLowerCase() || "";

  // Vet Bookings
  const bookingTableBody = document.getElementById("bookingsTable")?.querySelector("tbody");
  if (bookingTableBody) {
    let bookings = await fetch(`${BASE_URL}/api/bookings`).then(res => res.json()).catch(()=>[]);
    bookings = bookings.filter(b => 
      (bookingStatus==="all" || b.status===bookingStatus) &&
      (b.petOwner.toLowerCase().includes(searchTerm) || b.petName.toLowerCase().includes(searchTerm) || b.vetName.toLowerCase().includes(searchTerm))
    );
    bookingTableBody.innerHTML = bookings.map(b => `<tr>
      <td>${b.petOwner}</td>
      <td>${b.petName}</td>
      <td>${b.vetName}</td>
      <td>${b.date}</td>
      <td>${b.status}</td>
      <td>
        ${b.status==="pending"?`<button onclick="updateBookingStatus('${b._id}','approved')">Approve</button>`:""}
        ${b.status!=="completed"?`<button onclick="updateBookingStatus('${b._id}','completed')">Complete</button>`:""}
      </td>
    </tr>`).join("");
  }

  // Medicine Orders
  const orderTableBody = document.getElementById("ordersTable")?.querySelector("tbody");
  if (orderTableBody) {
    let orders = await fetch(`${BASE_URL}/api/orders`).then(res => res.json()).catch(()=>[]);
    orders = orders.filter(o => 
      (orderStatus==="all" || o.status===orderStatus) &&
      (o.petOwner.toLowerCase().includes(searchTerm) || o.medicineName.toLowerCase().includes(searchTerm))
    );
    orderTableBody.innerHTML = orders.map(o => `<tr>
      <td>${o.petOwner}</td>
      <td>${o.medicineName}</td>
      <td>${o.quantity}</td>
      <td>${o.deliveryAddress}</td>
      <td>${o.orderDate}</td>
      <td>${o.status}</td>
      <td>
        ${o.status==="pending"?`<button onclick="updateOrderStatus('${o._id}','shipped')">Ship</button>`:""}
        ${o.status!=="delivered"?`<button onclick="updateOrderStatus('${o._id}','delivered')">Deliver</button>`:""}
      </td>
    </tr>`).join("");
  }
}

async function updateBookingStatus(id, status) {
  await fetch(`${BASE_URL}/api/bookings/${id}`, { 
    method:"PUT", 
    headers:{"Content-Type":"application/json"}, 
    body:JSON.stringify({status}) 
  });
  fetchMedicalData();
}

async function updateOrderStatus(id, status) {
  await fetch(`${BASE_URL}/api/orders/${id}`, { 
    method:"PUT", 
    headers:{"Content-Type":"application/json"}, 
    body:JSON.stringify({status}) 
  });
  fetchMedicalData();
}

// ================== DOM CONTENT LOAD ==================
document.addEventListener("DOMContentLoaded", () => {
  const role = localStorage.getItem("currentUserRole");
  const currentUser = JSON.parse(localStorage.getItem(`currentUser_${role}`) || "null");
  const headerAvatar = document.getElementById("headerAvatar");
  const profileAvatar = document.getElementById("profileAvatar");

  if (currentUser?.avatar) {
    if (headerAvatar) { headerAvatar.src = currentUser.avatar; headerAvatar.style.display = "inline-block"; }
    if (profileAvatar) profileAvatar.src = currentUser.avatar;
  }

  if (document.getElementById('bookingsTable')) fetchMedicalData();
});
function updateAlertBadge() {
    let alerts = JSON.parse(localStorage.getItem('alerts')) || [];
    let unseen = alerts.filter(a => !a.seen).length;

    const badge = document.getElementById('alertBadge');
    if (badge) {
        if (unseen > 0) {
            badge.style.display = 'inline-block';
            badge.textContent = unseen;
        } else {
            badge.style.display = 'none';
        }
    }
}

// Initial call and refresh every 5 seconds
updateAlertBadge();
setInterval(updateAlertBadge, 5000);

function sendAlert() {
    const msg = document.getElementById('alertMessage').value.trim();
    if (!msg) {
        alert("Please enter a message!");
        return;
    }

    // Get existing alerts from localStorage
    let alerts = JSON.parse(localStorage.getItem('alerts')) || [];

    // Add new alert
    alerts.push({
        message: msg,
        timestamp: new Date().toLocaleString(),
        seen: false
    });

    // Save back to localStorage
    localStorage.setItem('alerts', JSON.stringify(alerts));

    // Clear textarea
    document.getElementById('alertMessage').value = "";

    // Update badge immediately
    updateAlertBadge();

    // Show confirmation to admin
    const statusMsg = document.getElementById('statusMsg');
    if (statusMsg) statusMsg.textContent = "Alert sent successfully!";
}
// Function to display existing alerts
function loadExistingAlerts() {
    const container = document.getElementById('existingAlerts');
    let alerts = JSON.parse(localStorage.getItem('alerts')) || [];
    container.innerHTML = '';

    if (alerts.length === 0) {
        container.innerHTML = '<p style="color:#555;">No alerts sent yet.</p>';
        return;
    }

    alerts.forEach((alert, index) => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.style.background = '#f9f9f9';
        div.style.padding = '8px 12px';
        div.style.marginTop = '8px';
        div.style.borderRadius = '8px';
        div.style.boxShadow = '0 1px 5px rgba(0,0,0,0.05)';

        div.innerHTML = `
            <span>${alert.message} <small style="color:#999;">(${alert.timestamp})</small></span>
            <button style="
                background:#e53935; color:#fff; border:none; padding:4px 10px; border-radius:5px; cursor:pointer;
            ">Delete</button>
        `;

        const deleteBtn = div.querySelector('button');
        deleteBtn.onclick = () => {
            alerts.splice(index, 1); // Remove alert from array
            localStorage.setItem('alerts', JSON.stringify(alerts)); // Save updated alerts
            loadExistingAlerts(); // Refresh list
            updateAlertBadge(); // Update badge
        };

        container.appendChild(div);
    });
}

// Run on page load
loadExistingAlerts();
// ------------------ ADD VACCINATION (ADMIN) ------------------
function addVaccinationRecord() {
  const farmerId = document.getElementById('farmerId').value.trim();
  const animal = document.getElementById('animalType').value;
  const ageStage = document.getElementById('ageStage').value.trim();
  const vaccine = document.getElementById('vaccineName').value.trim();
  const disease = document.getElementById('disease').value.trim();
  const dosage = document.getElementById('dosage').value.trim();
  const date = document.getElementById('vaccinationDate').value;
  const nextDate = document.getElementById('nextDate').value;
  const status = document.getElementById('status').value;
  const remarks = document.getElementById('remarks').value.trim();

  if (!farmerId) return alert("Please select a farmer!");

  const newRecord = {
    farmerId,
    animal,
    ageStage,
    vaccine,
    disease,
    dosage,
    date,
    nextDate,
    status,
    remarks
  };

  allVaccinationData.push(newRecord);
  localStorage.setItem('allVaccinationData', JSON.stringify(allVaccinationData));
  alert('Vaccination record added successfully!');
  document.getElementById('vaccinationForm').reset();
}

// ------------------ FETCH FARMER DATA (FARMER PAGE) ------------------
function getFarmerRecords() {
  const loggedInFarmerId = localStorage.getItem('loggedInFarmerId');
  const allData = JSON.parse(localStorage.getItem('allVaccinationData')) || [];
  return allData.filter(item => String(item.farmerId) === String(loggedInFarmerId));
}

// ------------------ RENDER FARMER TABLE ------------------
function renderFarmerVaccinationTable() {
  const data = getFarmerRecords();
  const tbody = document.getElementById('vaccinationBody');
  if (!tbody) return;

  tbody.innerHTML = '';
  data.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.animal}</td>
      <td>${item.ageStage}</td>
      <td>${item.vaccine}</td>
      <td>${item.disease}</td>
      <td>${item.dosage}</td>
      <td>${item.date}</td>
      <td>${item.nextDate}</td>
      <td style="color:${item.status === 'Done' ? '#4CAF50' : 'orange'};">${item.status}</td>
      <td>${item.remarks || '-'}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ------------------ INIT ON PAGE LOAD ------------------
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // Auto-render farmer data if on farmer page
  if (path.includes('vaccination_farmer.html')) {
    renderFarmerVaccinationTable();
  }
});