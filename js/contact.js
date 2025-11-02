document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    status.textContent = "";
    status.className = "form-status";

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "❗ Please fill in all required fields.";
      status.classList.add("error");
      return;
    }

    status.textContent = "⏳ Sending...";
    setTimeout(() => {
      status.textContent = "✅ Your message has been sent successfully!";
      status.classList.add("success");
      form.reset();
    }, 1200);
  });

  form.addEventListener("reset", () => {
    status.textContent = "";
    status.className = "form-status";
  });
});
