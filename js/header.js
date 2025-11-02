const headerHtml = `
  <div class="site-header header-inner" role="banner">
    <div class="brand">
      <a href="./" aria-label="Crown Australia home">
        <img src="./assets/logo.svg" alt="Crown (Australia) logo" style="width:44px;height:44px"/>
      </a>
      <div style="display:flex;flex-direction:column;line-height:1">
        <strong style="color:var(--accent)">Crown (Australia)</strong>
        <small style="color:var(--muted);font-size:12px">Royal Heritage Tours</small>
      </div>
    </div>

    <nav class="nav" role="navigation" aria-label="Main">
      <a href="./#about">About</a>
      <a href="./#tours">Tours</a>
      <a href="./#gallery">Gallery</a>
      <a href="./#support">Support</a>
      <a href="./#contact">Contact</a>
    </nav>
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#site-header");
  if (root) {
    root.classList.add("site-header");
    root.innerHTML = headerHtml;
  }
});
