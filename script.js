const body_page = document.body;
const button_right = document.getElementById('button-right');
const button_left = document.getElementById('button-left');
const text = document.getElementById('title');
const textSabor = document.getElementById('title-sabor');
const scrap = document.getElementById('latinha');
const fruit = document.getElementById('fruit');
const button_menu = document.getElementById('button-case');
const menu = document.getElementById('main-menu');


function buttonRight() {
    if (scrap.src.includes('morango')) {
        scrap.style.opacity = '0.4';
        fruit.style.opacity = '0.4';
    
        setTimeout(() => {
            body_page.style.background = 'radial-gradient(circle at center, rgb(255, 241, 198), rgb(228, 181, 95), rgb(255, 136, 0))';
            textSabor.innerText = 'LARANJA';
            textSabor.style.fontSize = '23cqw';
            scrap.src = 'images/latinha-laranja.png';
            fruit.src = 'images/laranja-um.webp';

            scrap.style.opacity = '1';
            fruit.style.opacity = '1';
        }, 400);
    }

    if (scrap.src.includes('laranja')) {
        scrap.style.opacity = '0.4';
        fruit.style.opacity = '0.4';
    
        setTimeout(() => {
            body_page.style.background = 'radial-gradient(circle at center, rgb(182, 224, 165), rgb(134, 199, 125), rgb(50, 197, 62))';
            textSabor.innerText = 'LIMÃO';
            textSabor.style.fontSize = '30cqw';
            scrap.src = 'images/latinha-limao.png';
            fruit.src = 'images/limao-um.png';

            scrap.style.opacity = '1';
            fruit.style.opacity = '1';
        }, 400);
    }
}

function buttonLeft() {
    if (scrap.src.includes('laranja')) {
        scrap.style.opacity = '0.4';
        fruit.style.opacity = '0.4';

    
        setTimeout(() => {
            body_page.style.background = 'radial-gradient(circle at center, rgb(219, 128, 128), rgb(182, 69, 69), rgb(175, 15, 15))';
            textSabor.innerText = 'MORANGO';
            textSabor.style.fontSize = '20cqw';
            scrap.src = 'images/latinha-morango.png';
            fruit.src = 'images/morango-dois.webp';

            scrap.style.opacity = '1';
            fruit.style.opacity = '1';
        }, 400);
    }

    if (scrap.src.includes('limao')) {
        scrap.style.opacity = '0.4';
        fruit.style.opacity = '0.4';
    
        setTimeout(() => {
            body_page.style.background = 'radial-gradient(circle at center, rgb(255, 241, 198), rgb(228, 181, 95), rgb(255, 136, 0))';
            textSabor.innerText = 'LARANJA';
            textSabor.style.fontSize = '23cqw';
            scrap.src = 'images/latinha-laranja.png';
            fruit.src = 'images/laranja-um.webp';

            scrap.style.opacity = '1';
            fruit.style.opacity = '1';
        }, 400);
    }
}

function activeMenu() {
    if (menu.style.width === '0px' || menu.style.width === '') {
        menu.style.width = '102%';
    }else {
        menu.style.width = '0px';
    }
}

