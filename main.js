function themeToggleListeners() {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function (ev) {
        const { classList } = document.body;
        classList.toggle('dark');
        const toggleIcon = document.querySelector('#theme-toggle i');
        if (!classList.contains('dark')) {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        } else {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');            
        }
    })
}

themeToggleListeners();