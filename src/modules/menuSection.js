
export default function createMenuSection(){
    const container = document.createElement('div');
    container.classList.add('menu');

    const menuList = createMenuList();
    container.appendChild(menuList);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('menu-img');

    container.appendChild(imgContainer);

    return container;
}

const menu = {
    Breakfast: [
        "Sunrise Scramble Delight",
        "Fluffy Pancake Bliss",
        "Avocado Toast Extravaganza",
        "Berry Blast Smoothie Bowl"
    ],
    Brunch: [
        "Mediterranean Brunch Platter",
        "Savory Spinach and Feta Quiche",
        "Brunch Tacos with Spicy Salsa",
        "Croissant Sandwich Royale"
    ],
    Lunch : [
        "Grilled Chicken Caesar Wrap",
        "Quinoa Salad with Roasted Vegetables",
        "Classic Caprese Panini",
        "Thai Basil Chicken Stir-Fry"
    ],
    Dinner: [
        "Balsamic Glazed Salmon",
        "Creamy Mushroom Risotto",
        "BBQ Pulled Pork Tacos",
        "Pesto Pasta with Sun-Dried Tomatoes"
    ],
}

function createMenuList(){
    const container = document.createElement('ul');
    container.classList.add('list');

    for(let [title, listItems] of Object.entries(menu)){
        let list = createList(title.toLowerCase(), title, listItems);
        container.appendChild(list);
    }

    return container;
}


function createList(name, title = "", listItem=[]){
    const container = document.createElement('li');
    container.classList.add(name);

    const heading = document.createElement('span');
    heading.textContent = title;

    const listItemContainer = document.createElement('ul');

    listItem.forEach((itemName)=>{
        let element = document.createElement('li');
        element.textContent = itemName;
        listItemContainer.appendChild(element);
    });

    container.appendChild(heading);
    container.appendChild(listItemContainer);

    return container;
}