// ============================================
// FAQ Accordion
// ============================================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Close other items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});

// ========== Observer para iniciar só quando aparecer na tela ==========
function initAnimations() {
  const animationObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        el.classList.add("animated");

        // para de observar depois de animar
        observer.unobserve(el);
      });
    },
    {
      threshold: 0.2,
    },
  );

  document.querySelectorAll("[data-animate]").forEach((el) => animationObserver.observe(el));
}
initAnimations();

/* =========================================== */

const overlay = document.getElementById("image-overlay");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.querySelector(".close-overlay");

document.querySelectorAll(".service-image img").forEach((img) => {
  img.addEventListener("click", () => {
    overlayImg.src = img.src; // Pega o link da imagem clicada
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Trava o scroll do site
  });
});

// Fechar ao clicar no X ou no fundo preto
[closeBtn, overlay].forEach((el) => {
  el.addEventListener("click", () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "auto"; // Libera o scroll
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("active")) {
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

document.querySelectorAll(".service-image img").forEach((img) => {
  img.addEventListener("click", () => {
    // Só abre a overlay se a largura da tela for maior que 768px
    if (window.innerWidth > 768) {
      overlayImg.src = img.src;
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});
