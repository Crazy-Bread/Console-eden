fetch('lab1.xml').then(response => response.text()).then(data => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, 'text/html');
    const consoles = xml.querySelectorAll('console');
    const xmlData = document.getElementById('xmlData');

    consoles.forEach(console => {
        const id = console.querySelector('id').textContent;
        const name = console.querySelector('name').textContent;
        const type = console.querySelector('type').textContent;
        const memory = console.querySelector('memory').textContent;
        const carrier = console.querySelector('carrier').textContent;
        const price = console.querySelector('price').textContent;
        const have = console.querySelector('have').textContent;

        const consoleElement = document.createElement('div');
        consoleElement.innerHTML = <p>${id} ${name}: ${price} ${type} ${memory} ${carrier} ${have}</p>;

        xmlData.appendChild(consoleElement);
    });
});

// const xmlDoc = new DOMParser().parseFromString(lab1.xml, "text/xml");

// const items = xmlDoc.querySelectorAll("console");

// const list = document.getElementById("price-list");

// for (const console of items) {
//     const id = console.querySelector("id").textContent;
//     const name = console.querySelector("name").textContent;
//     const type = console.querySelector("type").textContent;
//     const memory = console.querySelector("memory").textContent;
//     const carrier = console.querySelector("carrier").textContent;
//     const price = console.querySelector("price").textContent;
//     const have = console.querySelector("have").textContent;

//     const listItem = document.createElement("li");
//     listItem.textContent = `${id} ${name} ${type} ${memory} ${carrier} ${price}  ${have}`;

//     list.appendChild(listItem);
// }