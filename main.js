// Lenis
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Splitting Js
Splitting();

// GSAP timeline.
var tl = gsap.timeline();

// Hamburger button.
document.querySelector(".hamburger_button").addEventListener("click", () => {
    document.querySelectorAll(".hamburger_line")[0].classList.toggle("line_1_clicked");
    document.querySelectorAll(".hamburger_line")[1].classList.toggle("line_2_clicked");
});

// Load animation.
var nav_height = document.querySelector("nav").clientHeight;
tl.from("nav", { y: -(nav_height + 35), duration: 1, delay: 1, esae: "power1.out" }, "main");
tl.from("main .char", { y: "101%", duration: 1, delay: 1, esae: "power1.out" }, "main");
tl.from(".below_main_section", { opacity: 0, duration: 1, esae: "power1.out" });

// Scroll appear animation.
