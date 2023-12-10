
import createHomeSection from "./modules/homeSection.js";
import createContactSection from "./modules/contactSection.js";
import createMenuSection from "./modules/menuSection.js";
import createAboutSection from "./modules/aboutSection.js";

const mainContainer = document.querySelector('#content');
const navButtons = document.querySelectorAll('[data-tab]');

navButtons.forEach((item) => {
    item.addEventListener('click', changeTab);
});


loadTab(createHomeSection);

function removeCurrentTab(){
    let curr = document.querySelector('div.header + div');
    if(curr === null) return;

    mainContainer.removeChild(curr);
}

function changeTab(e){
    const tab = e.target.dataset.tab;

    if(tab === null) return;

    removeCurrentTab();

    switch (tab){
        case 'home':
            loadTab(createHomeSection);
            break;
        case 'about':
            loadTab(createAboutSection);
            break;
        case 'menu':
            loadTab(createMenuSection);
            break;
        case 'contact':
            loadTab(createContactSection);
            break;
    }
}

function loadTab(tabCreator){
    if(tabCreator === createHomeSection){
        mainContainer.classList.remove('otherTab');
        mainContainer.classList.add('homeTab', 'homepage');
    }
    else{
        mainContainer.classList.remove('homeTab', 'homepage');
        mainContainer.classList.add('otherTab');
    }

    mainContainer.appendChild(tabCreator());
}