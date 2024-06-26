// Lenis
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Hamburger button.
document.querySelector(".hamburger_button").addEventListener("click", () => {
    document.querySelectorAll(".hamburger_line")[0].classList.toggle("line_1_clicked");
    document.querySelectorAll(".hamburger_line")[1].classList.toggle("line_2_clicked");
});
