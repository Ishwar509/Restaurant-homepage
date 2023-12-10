
export default function createAboutSection(){
    const container = document.createElement('div');
    container.classList.add('aboutSection');

    container.appendChild(sideImgContent());
    container.appendChild(aboutContent());

    return container;
}

function sideImgContent(){
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('aboutSideImg');

    const img = new Image();
    img.src = "./images/tables-chairs-with-umbrellas.jpg";
    img.alt = "restaurant outside view";
    
    imgContainer.appendChild(img);

    return imgContainer;
}

function aboutContent(){
    const container = document.createElement('div');
    container.classList.add('aboutInfo');

    const heading = document.createElement('h1');
    heading.textContent = "Flavor Haven";

    const para1 = document.createElement('p');
    para1.textContent = "Welcome to Flavor Haven, where passion for taste meets culinary artistry.Nestled in the heart of Leonida, our restaurant is a celebration of diverse flavors and a commitment to creating a unique dining experience.";

    const para2 = document.createElement('p');
    para2.textContent = "At Flavor Haven, our chefs meticulously craft each dish,blending international influences with local ingredients. The result is a menu that offers a symphony of tastes, inviting you to embark on a culinary journey that is both exciting and satisfying."

    let arr = [heading, para1, para2];
    arr.forEach(element => {
        container.appendChild(element);
    });

    return container;
}