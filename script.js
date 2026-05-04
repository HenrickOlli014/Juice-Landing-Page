function buttonRight() {
    const body_page = document.body;
    const button = document.getElementById('button-right');
    const text = document.getElementById('title');
    const textSabor = document.getElementById('title-sabor');
    const scrap = document.getElementById('latinha');
    const fruit = document.getElementById('fruit');


    if (button) {
    body_page.style.background = 'radial-gradient(circle at center, rgb(255, 241, 198), rgb(228, 181, 95), rgb(255, 136, 0))';
    textSabor.innerText = 'LARANJA';
    textSabor.style.fontSize = '23cqw';
    scrap.src = 'images/latinha-laranja.png';
    fruit.src = 'images/laranja-um.webp';
    }
}
