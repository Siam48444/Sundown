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

design_button[0].classList.add("design_button_active");
design_buttons_line[0].classList.add("design_button_line_active");

for (let a = 0; a < design_button.length; a++) {
}
