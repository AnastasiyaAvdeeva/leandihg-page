

const popupButton = document.querySelector('.header__popup-button');
const popupWrapper = document.querySelector('.header__popup-menu');
const popupMenu = document.querySelector('.header__popup-page');

popupButton.addEventListener('click', handleMenu);

function handleMenu() {
    popupMenu.classList.toggle('hide-popup');
}

document.addEventListener('click', hidePopup);

function hidePopup(el) {
    let targetInside = popupWrapper.contains(el.target);
    if(!targetInside) {
        popupMenu.classList.add('hide-popup');
    }

    else {
        return;
    }
}