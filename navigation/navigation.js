document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            
            const targetUrl = button.getAttribute('href');
            
            button.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                button.style.transform = '';
                if (targetUrl) {
                    window.location.href = targetUrl;
                }
            }, 200);
        });
    });
});