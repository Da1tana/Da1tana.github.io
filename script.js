document.addEventListener('DOMContentLoaded', function() {
    // Тёмная тема
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        const isDark = document.body.hasAttribute('data-theme');
        document.body.toggleAttribute('data-theme');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
    
    // Проверка сохранённой темы
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }

    // Мобильное меню
    document.getElementById('menu-toggle').addEventListener('click', function() {
        document.getElementById('menu').classList.toggle('active');
    });

    // Кнопка "Наверх"
    const topBtn = document.getElementById('topBtn');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });
    topBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Форма
    const form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const status = document.getElementById('form-status');
            status.textContent = 'Отправка...';
            
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                status.textContent = 'Сообщение отправлено!';
                form.reset();
            })
            .catch(error => {
                status.textContent = 'Ошибка отправки';
            });
        });
    }
});