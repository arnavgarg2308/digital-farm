// support.js

// Open Support Modal
function openSupport() {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  if (!modal || !modalBody) {
    console.error("Support modal not found in HTML!");
    return;
  }

  modal.classList.remove("hidden");

  modalBody.innerHTML = `
    <h2>🛠️ Help & Support</h2>
    <p>If you are facing any issues, please contact our support team using the details below.</p>
    <hr style="margin:10px 0;">
    
    <h3>📞 Contact Information</h3>
    <p><strong>Email:</strong> support@smartfarmsolution.com</p>
    <p><strong>Helpline:</strong> +91 98765 43210</p>
    <p><strong>Office Hours:</strong> Monday – Saturday, 9 AM – 6 PM</p>

    <hr style="margin:10px 0;">
    <h3>💡 Common Help Topics</h3>
    <ul style="line-height:1.6;">
      <li>Having trouble logging in? Try resetting your password from the login page.</li>
      <li>Need help applying for a loan or scheme? Visit the “Government Schemes” section.</li>
      <li>For training videos, open the “Training & Guides” tab.</li>
      <li>For profile or account issues, email us with your registered phone number.</li>
    </ul>

    <hr style="margin:10px 0;">
    <p style="font-size:0.9rem;color:#555;">We usually respond within 24 hours. Thank you for being part of Smart Farm Solution!</p>

    <div style="text-align:right;margin-top:15px;">
      <button onclick="closeModal()" style="padding:8px 16px;background:#4CAF50;color:white;border:none;border-radius:6px;cursor:pointer;">Close</button>
    </div>
  `;
}

// Close Modal
function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) modal.classList.add("hidden");
}