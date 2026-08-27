document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        
        if (htmlElement.classList.contains('dark')) {
            themeToggleBtn.textContent = 'Andaji Light Mode';
        } else {
            themeToggleBtn.textContent = 'Andaji Dark Mode';
        }
    });

    //Simple Alert Button Logic
    const alertBtn = document.getElementById('alert-btn');
    
    alertBtn.addEventListener('click', () => {
        alert('Hello! Your JavaScript file is working Andaji.');
    });

});