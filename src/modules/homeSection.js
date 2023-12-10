
export default function createHomeSection(){
    const container = document.createElement('div');
    container.classList.add('home');

    const tagline = document.createElement('div');
    const content = document.createElement('p');
    content.textContent = 'Savor the Symphony of Flavors';
    tagline.classList.add('tagline');
    tagline.appendChild(content);

    container.appendChild(tagline);

    return container;
}