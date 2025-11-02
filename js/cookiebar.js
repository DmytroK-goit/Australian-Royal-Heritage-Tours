const COOKIE_KEY = "crown_cookies_accepted_v1";

function createCookieBar() {
  const root = document.getElementById("cookie-root");
  if (!root) return;
  if (localStorage.getItem(COOKIE_KEY) === "true") return;

  const bar = document.createElement("div");
  bar.className = "cookiebar";
  bar.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="12" r="10" fill="#0b1a12"/></svg>
      <p>We use cookies to improve experience and to analyze traffic. By clicking "Accept" you agree to our Cookie Policy.</p>
    </div>
    <div class="cookie-actions">
      <button id="cookie-accept" class="btn primary">Accept</button>
      <a href="./cookies.html" class="btn outline">Learn more</a>
    </div>
  `;
  root.appendChild(bar);

  document.getElementById("cookie-accept").addEventListener("click", () => {
    localStorage.setItem(COOKIE_KEY, "true");
    bar.remove();
  });
}

document.addEventListener("DOMContentLoaded", createCookieBar);
