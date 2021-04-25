const colorPalette = ['accent__green', 'accent__pink', 'accent__cyan', 'accent__teal'];

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

function updateThemeBasedOnPref() {
    const { classList } = document.body;
    const isDark = classList.contains('dark')
    const toggleIcon = document.querySelector('#theme-toggle i');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (!isDark) {
            classList.add('dark');
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        }
    } else {
        if (isDark) {
            classList.remove('dark')
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        }
    }
}

function themeListener() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
        updateThemeBasedOnPref();
      });
}

function findNextAccent(currAccent) {
    const nextAccentIndex = (colorPalette.findIndex(accent => accent == currAccent) + 1)
        % colorPalette.length;

    return colorPalette[nextAccentIndex];
}

function colorPaletteListeners() {
    const accentToggle = document.getElementById('accent-toggle');
    accentToggle.addEventListener('click', function (ev) {
        const { classList } = document.body;
        const _classList = [...classList];
        const currAccent = _classList.find(cl => cl.startsWith('accent__'));
        classList.remove(currAccent);
        const nextAccent = findNextAccent(currAccent);
        localStorage.setItem('--pk-accent', nextAccent);
        classList.add(nextAccent);
    })
}

function updateSavedAccent() {
    const savedAccent = localStorage.getItem('--pk-accent');
    if(savedAccent && savedAccent.startsWith('accent__')) {
        const { classList } = document.body;
        const _classList = [...classList]
        const currAccent = _classList.find(cl => cl.startsWith('accent__'));
        classList.remove(currAccent);
        classList.add(savedAccent);
    }
}


function showToast(message) {
    const toastContainer = document.getElementById('toast');
    toastContainer.innerHTML = message;
    toastContainer.classList.add('show');
    setTimeout(function () {
        toastContainer.classList.remove('show')
    }, 2000);
}

function copyEmailOnClickListener() {
    const emailText = document.querySelector('.on-hover');
    emailText.addEventListener('click', function (ev) {
        document.execCommand("copy");
        showToast('Copied to clipboard!')
    })
}
themeListener();
copyEmailOnClickListener();
themeToggleListeners();
colorPaletteListeners();
updateThemeBasedOnPref();
updateSavedAccent();