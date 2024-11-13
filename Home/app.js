
document.addEventListener("DOMContentLoaded", function() {
    // Select the toggle button and the nav-links container
    const toggleButton = document.querySelector(".toggle-btn");
    const navLinks = document.getElementById("nav-links");

    // Add an event listener to the toggle button
    toggleButton.addEventListener("click", function() {
        // Toggle the 'show-links' class on the navLinks container
        navLinks.classList.toggle("show-links");
    });
});

