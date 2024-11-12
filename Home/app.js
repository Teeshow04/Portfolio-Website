document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const listLinks = document.querySelector(".list-links");
    
    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        console.log('kol');
        
    });
});
