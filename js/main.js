document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       ЖИВОЕ ПОЯВЛЕНИЕ ТЕКСТА
    =============================== */
    const title = document.querySelector(".hero-title");
    const text = document.querySelector(".hero-text");

    if (title) {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }

    if (text) {
        setTimeout(() => {
            text.style.opacity = "1";
            text.style.transform = "translateY(0)";
        }, 300);
    }

    /* ===============================
       АНИМАЦИЯ ЗЕЛЁНОГО ПОЛУШАРА
    =============================== */
    const shape = document.querySelector(".green-shape");

    if (shape) {
        setTimeout(() => {
            shape.style.transition = "all 1.2s ease";
            shape.style.width = "300px";
            shape.style.height = "300px";
            shape.style.opacity = "1";
        }, 800);

        setTimeout(() => {
            shape.style.transition = "all 1.5s cubic-bezier(.22,1.2,.36,1)";
            shape.style.width = "85%";
            shape.style.height = "160%";
            shape.style.borderRadius = "0 100% 100% 0";
        }, 2000);
    }

    /* ===============================
       ПОЯВЛЕНИЕ КАРТОЧЕК (STAGGER)
    =============================== */
    const cards = document.querySelectorAll(".card");

    if (cards.length) {
        const cardsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("show");
                        }, index * 120);
                        cardsObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach(card => cardsObserver.observe(card));
    }

    /* ===============================
       ИНДИКАТОР КРЕПОСТИ
    =============================== */
    document.querySelectorAll(".strength").forEach(strength => {
        const level = parseInt(strength.dataset.level, 10) || 0;
        const dots = strength.querySelectorAll("span");

        dots.forEach((dot, i) => {
            if (i < level) {
                dot.style.color = "#2e7d32";
            }
        });
    });

    /* ===============================
       FAQ АККОРДЕОН
    =============================== */
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        if (!question) return;

        question.addEventListener("click", () => {
            faqItems.forEach(el => {
                if (el !== item) el.classList.remove("active");
            });
            item.classList.toggle("active");
        });
    });

    /* ===============================
       NAV: ПОЯВЛЕНИЕ + ПОДСВЕТКА
    =============================== */
    const nav = document.querySelector(".nav");
    const links = document.querySelectorAll(".nav a");
    const sections = document.querySelectorAll("header[id], section[id]");

    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                nav.classList.add("visible");
            }
        });
    }

    if (sections.length && links.length) {
        const navObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        links.forEach(link => {
                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") === `#${id}`
                            );
                        });
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach(section => navObserver.observe(section));
    }

});
