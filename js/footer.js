const footerHtml = `
  <div class="site-footer footer-inner" role="contentinfo">
    <div>
      <small>&copy; ${new Date().getFullYear()} Crown (Australia). All rights reserved.</small>
    </div>
    <div class="footer-links">
      <a href="./terms.html">Terms</a>
      <a href="./privacy.html">Privacy</a>
      <a href="./cookies.html">Cookie Policy</a>
      <a href="./#contact">Contact</a>
    </div>
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#site-footer");
  if (root) {
    root.innerHTML = footerHtml;
  }
});
