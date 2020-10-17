const colorPalette = ['accent__green', 'accent__pink', 'accent__cyan', 'accent__orange'];

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
        classList.add(nextAccent);
    })
}
themeToggleListeners();
colorPaletteListeners();