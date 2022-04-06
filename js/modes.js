// Capture o tema atual do armazenamento local e ajuste a página para usar o tema atual.
const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
var light = document.getElementById("light");
var dark = document.getElementById("dark");

if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
}

// Quando o usuário muda o tema, precisamos salvar o novo valor no armazenamento local
const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
    localStorage.setItem('theme', theme);

    if (theme == 'light') {
        dark.classList.remove("display-none");
        light.classList.add("display-none");
    } else {
        dark.classList.add("display-none");
        light.classList.remove("display-none");
    }
}