
export default function createHomeSection(){
    const container = document.createElement('div');
    container.classList.add('home');

    const img = new Image();
    img.src = "../images/Designer.png"
    img.classList.add('logo');

    container.appendChild(img);

    return container;
}