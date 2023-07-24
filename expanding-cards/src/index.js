const panels = document.querySelectorAll(".panel");

const removeActive = () => {
    panels.forEach(panel => {
        panel.classList.remove("active"); // Remove the dot before "active"
    });
}

const addActive = (e) => {
    removeActive();
    e.classList.add("active"); // Use "currentTarget" instead of "target"
}

// add event listener
panels.forEach(panel => {
    panel.addEventListener("click", addActive(panel));
});
