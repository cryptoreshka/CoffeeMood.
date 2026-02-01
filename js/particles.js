document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".coffee-particles");
    if (!container) return;

    console.log("Particles container found");

    setTimeout(createParticles, 800);

    function createParticles() {
        for (let i = 0; i < 25; i++) {
            spawnParticle();
        }
        console.log("Particles created:", container.children.length);
    }

    function spawnParticle() {
        const particle = document.createElement("span");
        particle.classList.add("coffee-particle");

        const size = Math.random() * 6 + 4;
        const duration = Math.random() * 10 + 8;
        const delay = Math.random() * 4;

        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = duration + "s";
        particle.style.animationDelay = delay + "s";

        particle.addEventListener("click", () => {
            particle.classList.add("pop");
            setTimeout(() => {
                particle.remove();
                spawnParticle(); // ✨ новая вместо лопнувшей
            }, 300);
        });

        container.appendChild(particle);
    }
});


