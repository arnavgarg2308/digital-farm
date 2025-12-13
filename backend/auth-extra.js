// auth-extra.js
// Handles real OTP and email-based password reset

// 🟩 OPTION B: Simulate real OTP sending with EmailJS (or similar service)
async function sendOtpEmail(toEmail, otp) {
  // EmailJS is a free service to send emails from client-side JS
  // 1. Go to https://www.emailjs.com/
  // 2. Create a free account and get YOUR service_id, template_id, and public_key
  // 3. Replace below placeholders

  const serviceId = "service_5fmnagd";
  const templateId = "template_qlf5sqd";
  const publicKey = "3hf1Za4wUtvckWSOw";

  const params = {
    to_email: toEmail,
    to_name: "Smart Farm Solution - Password Reset OTP",
    otp_code: `Your OTP for password reset is ${otp}. Valid for 5 minutes.`
  };

  try {
    await emailjs.send(serviceId, templateId, params, publicKey);
    alert("✅ OTP sent successfully to your email!");
  } catch (err) {
    console.error("Email send failed", err);
    alert("⚠️ Unable to send OTP email. Using demo OTP on screen instead.");
    alert(`Demo OTP (testing only): ${otp}`);
  }
}

// 🟦 Step 1: Start forgot password
async function startForgotPassword() {
  const identifier = prompt("Enter your registered Email or Phone number:");
  if (!identifier) return;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === identifier.toLowerCase() || u.phone === identifier);
  if (!user) return alert("User not found.");

  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  localStorage.setItem("sf_reset_otp", JSON.stringify({
    otp, userId: user.id, expiresAt: Date.now() + 5 * 60 * 1000
  }));

  if (user.email) {
    await sendOtpEmail(user.email, otp);
  } else {
    alert(`Demo OTP for ${user.phone}: ${otp}`); // SMS API could go here
  }

  const entered = prompt("Enter OTP received:");
  const stored = JSON.parse(localStorage.getItem("sf_reset_otp") || "null");
  if (!stored) return alert("OTP not found.");
  if (Date.now() > stored.expiresAt) return alert("OTP expired.");
  if (entered.trim() !== stored.otp) return alert("Invalid OTP.");

  const newPass = prompt("Enter new password:");
  if (!newPass) return alert("Cancelled.");
  if (newPass.length < 6) return alert("Password too short.");

  // Update user password
  const idx = users.findIndex(x => x.id === user.id);
  users[idx].password = newPass;
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.removeItem("sf_reset_otp");

  alert("✅ Password reset successful! You can now login.");
}
