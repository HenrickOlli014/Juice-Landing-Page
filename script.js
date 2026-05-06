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

    scrap.style.opacity = '0.4';
    fruit.style.opacity = '0.4';

    setTimeout(() => {
        if (scrap.src.includes('morango')) {
            body_page.style.background = 'radial-gradient(circle at center, rgb(255, 241, 198), rgb(228, 181, 95), rgb(255, 136, 0))';
            textSabor.innerText = 'LARANJA';
            textSabor.style.fontSize = '23cqw';
            scrap.src = 'images/latinha-laranja.png';
            fruit.src = 'images/laranja-um.webp';
        } else if (scrap.src.includes('laranja')) {
            scrap.style.opacity = '0.4';
            fruit.style.opacity = '0.4';
            body_page.style.background = 'radial-gradient(circle at center, rgb(182, 224, 165), rgb(134, 199, 125), rgb(50, 197, 62))';
            textSabor.innerText = 'LIMÃO';
            textSabor.style.fontSize = '30cqw';
            scrap.src = 'images/latinha-limao.png';
            fruit.src = 'images/limao-um.png';
        } else if (scrap.src.includes('limao')) {
            scrap.style.opacity = '0.4';
            fruit.style.opacity = '0.4';
            body_page.style.background = 'radial-gradient(circle at center, rgb(219, 128, 128), rgb(182, 69, 69), rgb(175, 15, 15))';
            textSabor.innerText = 'MORANGO';
            textSabor.style.fontSize = '20cqw';
            scrap.src = 'images/latinha-morango.png';
            fruit.src = 'images/morango-dois.webp';
        }

        scrap.style.opacity = '1';
        fruit.style.opacity = '1';
    }, 400);
}

function buttonLeft() {
    scrap.style.opacity = '0.4';
    fruit.style.opacity = '0.4';

    
    setTimeout(() => {
        if (scrap.src.includes('laranja')) {
            body_page.style.background = 'radial-gradient(circle at center, rgb(219, 128, 128), rgb(182, 69, 69), rgb(175, 15, 15))';
            textSabor.innerText = 'MORANGO';
            textSabor.style.fontSize = '20cqw';
            scrap.src = 'images/latinha-morango.png';
            fruit.src = 'images/morango-dois.webp';
        } else if (scrap.src.includes('limao')) {
            body_page.style.background = 'radial-gradient(circle at center, rgb(255, 241, 198), rgb(228, 181, 95), rgb(255, 136, 0))';
            textSabor.innerText = 'LARANJA';
            textSabor.style.fontSize = '23cqw';
            scrap.src = 'images/latinha-laranja.png';
            fruit.src = 'images/laranja-um.webp';
        } else if (scrap.src.includes('morango')) {
            body_page.style.background = 'radial-gradient(circle at center, rgb(182, 224, 165), rgb(134, 199, 125), rgb(50, 197, 62))';
            textSabor.innerText = 'LIMÃO';
            textSabor.style.fontSize = '30cqw';
            scrap.src = 'images/latinha-limao.png';
            fruit.src = 'images/limao-um.png';
        }
        scrap.style.opacity = '1';
        fruit.style.opacity = '1';
    }, 400);
}


function activeMenu() {
    const miniScrap_one = document.getElementById('soft-unit');
    const miniScrap_two = document.getElementById('soft-double');
    const miniScrap_two_reverse = document.getElementById('soft-double-two');
    const miniScrap_three_center = document.getElementById('soft-triple');
    const miniScrap_three = document.getElementById('soft-triple-two');
    const miniScrap_three_reverse = document.getElementById('soft-triple-three');
    const box_text = document.getElementsByClassName('menu-option');
    const background_image = document.getElementsByClassName('background-text')

    if (menu.style.width === '0px' || menu.style.width === '') {
        menu.style.width = '102%';
        setTimeout(() => {

            for (let i = 0; i < box_text.length; i++) {
                box_text[i].style.opacity = '1';
            }

            for (let i = 0; i < background_image.length; i++) {
                background_image[i].style.opacity = '1'
            }

            miniScrap_one.style.transform = 'rotate(-15deg)';

            miniScrap_two.style.transform = 'rotate(-20deg)';
            miniScrap_two_reverse.style.transform = 'rotate(20deg)';

            miniScrap_three.style.transform = 'rotate(30deg)';
            miniScrap_three_reverse.style.transform = 'rotate(-30deg)';

        }, 500);
    }else {
        menu.style.width = '0px';

        for (let i = 0; i < box_text.length; i++) {
                box_text[i].style.opacity = '0';
        }

        for (let i = 0; i < background_image.length; i++) {
            background_image[i].style.opacity = '0';
        }

        miniScrap_one.style.transform = 'rotate(0deg)';

        miniScrap_two.style.transform = 'rotate(0deg)';
        miniScrap_two_reverse.style.transform = 'rotate(0deg)';

        miniScrap_three.style.transform = 'rotate(0deg)';
        miniScrap_three_reverse.style.transform = 'rotate(0deg)';

    }
}

