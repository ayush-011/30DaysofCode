document.addEventListener('DOMContentLoaded', function() {
    const clockElement = document.getElementById('clock');
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    let isDarkMode = false;
    
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    updateClock();
    setInterval(updateClock, 1000);
    
    themeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        body.classList.toggle('dark-mode', isDarkMode);
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        console.log('Theme changed to:', isDarkMode ? 'dark' : 'light');
    });
});