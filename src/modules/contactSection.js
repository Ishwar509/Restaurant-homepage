
export default function createContactSection(){
    const container = document.createElement('div');
    container.classList.add('contactSection');

    container.appendChild(contactContent());
    
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('contactSideImg');

    container.appendChild(imgContainer);

    return container;
}

function contactContent(){
    const content = document.createElement('div');
    content.classList.add('contactContainer');

    content.appendChild(openingHrsTable())
    content.appendChild(contactInfo());

    return content;
}

function openingHrsTable(){
    const table = document.createElement('table');
    table.classList.add('openingHrs');

    table.innerHTML = `<tbody>
            <tr>
                <th colspan="2">Opening Hours</th>
            </tr>
            <tr>
                <td>Tuesday</td>
                <td>18:00 - 22:00</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>18:00 - 22:00</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>18:00 - 22:00</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>18:00 - 23:00</td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>17:00 - 23:00</td>
            </tr>
            <tr>
                <td>Sunday</td>
                <td>17:00 - 23:00</td>
            </tr>
        </tbody>`;

    return table;
}

function contactInfo(){
    const info = document.createElement('div');
    info.classList.add('info');

    info.innerHTML = `<div class="address">
                        <h2>Address:</h2>
                        <p>123 Gourmet Street</p>
                        <p>Cityville, Stateburg, 56789</p>
                    </div>
                    <div class="phone">
                        <h2>Phone:</h2>
                        <p>(555) 123-4567</p>
                    </div>
                    <div class="email">
                        <h2>Email:</h2>
                        <p>info@flavorhavenrestaurant.com</p>
                    </div>`;

    return info;
}