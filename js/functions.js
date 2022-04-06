function addAndRemoveClass(id) {
    id = id.replace('ref-','');
    var pages = ['main', 'about', 'skills', 'works', 'contact'];
    pages = pages.filter((item) => item !== id);

    pages.forEach(page => {
        document.getElementById(page).classList.add('display-none');
    })

    document.getElementById(id).classList.remove('display-none');

    //fechar menu
    document.getElementById('cabecalho').classList.remove('remove-padding');
    document.getElementById('hambuguer-menu').classList.remove('menu-overlay');
    document.getElementById('hambuguer-btn').classList.remove('open');
}