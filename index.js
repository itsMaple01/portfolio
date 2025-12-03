function toggleTheme() {
    document.body.classList.toggle("dark");
    const themeBtn = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");
    const themeBtn = document.querySelector(".theme-btn");
    
    themeBtn.textContent = "🌙 Dark Mode"; 

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️ Light Mode";
    }
}

window.addEventListener("DOMContentLoaded", initializeTheme);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
