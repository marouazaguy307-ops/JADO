

const discoverBtn = document.getElementById("discoverBtn");

discoverBtn.addEventListener("click", () => {

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

});


// ==============================
// BOUTON SURPRISE FINALE
// ==============================

const surpriseBtn = document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {

    createConfetti();

    surpriseBtn.innerHTML = "🎂 HAPPY BIRTHDAY JADO 🤍";

});


// ==============================
// CONFETTIS
// ==============================

function createConfetti() {

    const container = document.getElementById("confetti-container");

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "%";

        confetti.style.top = "-20px";

        confetti.style.background =
            ["#c9a96e", "#f5f0e8", "#ffffff", "#b08b4f"]
            [Math.floor(Math.random() * 4)];

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);

    }

}

