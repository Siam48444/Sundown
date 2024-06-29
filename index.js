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
const design_buttons = document.querySelectorAll(".design_button_container button");
const design_buttons_line = document.querySelectorAll(".design_button_container button div");
