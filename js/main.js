document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lbImg = lightbox.querySelector(".lightbox-img");
  const lbClose = lightbox.querySelector(".lightbox-close");
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      const src = img.src;
      const alt = img.alt;
      lbImg.src = src;
      lbImg.alt = alt;
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  lbClose.addEventListener("click", () => {
    lightbox.setAttribute("aria-hidden", "true");
    lbImg.src = "";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.setAttribute("aria-hidden", "true");
      lbImg.src = "";
    }
  });
});
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});
