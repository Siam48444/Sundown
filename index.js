// Project hover animation.
const project = document.querySelectorAll(".projects");
const project_visual = document.querySelectorAll(".project_visual");

for (let i = 0; i < project.length; i++) {
    project[i].addEventListener("mouseenter", () => {
        project_visual[i].classList.add("project_visual_open");
    });
    project[i].addEventListener("mouseleave", () => {
        project_visual[i].classList.remove("project_visual_open");
    });
}

// Design section buttons clicking.
const design_button = document.querySelectorAll(".design_button");
const design_buttons_line = document.querySelectorAll(".design_button div");
const design_image = document.querySelectorAll(".design_image");

design_button[0].classList.add("design_button_active");
design_buttons_line[0].classList.add("design_button_line_active");
design_image[0].classList.add("design_image_active");

for (let a = 0; a < design_button.length; a++) {
    design_button[a].addEventListener("click", () => {
        design_button.forEach((btn) => {
            btn.classList.remove("design_button_active");
        });
        design_button[a].classList.add("design_button_active");

        design_buttons_line.forEach((line) => {
            line.classList.remove("design_button_line_active");
        });
        design_buttons_line[a].classList.add("design_button_line_active");

        design_image.forEach((img) => {
            img.classList.remove("design_image_active");
        });
        design_image[a].classList.add("design_image_active");
    });
}

// Partners swiper.
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
});
