const dbCoffee = [
    {
        name: 'Americano',
        id: 1,
        price: 10,
    },
    {
        name: 'Cappuccino',
        id: 2,
        price: 12,
    },
    {
        name: 'Latte',
        id: 3,
        price: 15,
    },
    {
        name: 'Mocha',
        id: 4,
        price: 11,
    },
    {
        name: 'Chocolate',
        id: 5,
        price: 10,
    },
    {
        name: 'Double shot',
        id: 6,
        price: 20,
    },
    {
        name: 'Green tea',
        id: 7,
        price: 8,
    },
    {
        name: 'Milk',
        id: 8,
        price: 7,
    },
    {
        name: 'Hot watter',
        id: 9,
        price: 5,
    }
];
const list = document.querySelector(".list");
const wrapper = document.querySelector(".wrapper");
const display = document.querySelector(".display");
const start = document.createElement("button");
start.classList.add('start');
start.innerText = 'Start'
list.innerHTML = getRenderedCoffee(dbCoffee);
let count = 10;
let ready = document.createElement('p');
ready.innerText = 'Take your coffee';

function getRenderedCoffee(dbCoffee) {
    return dbCoffee.reduce((html, {name, id, price}) =>
        html + `
                <li>
                    <button data-cid="${id}" class="btn">${name}</button>
                </li>
                `
    , '');
}


list.addEventListener("click", (e) => {
    const currentElement = e.target;
    if (currentElement.classList.contains("btn")) {
        const coffeeId = +currentElement.getAttribute("data-cid");
        const coffee = dbCoffee.find((coffee) => coffee.id === coffeeId);
        display.innerHTML = `${coffee.name} <br> ${coffee.price}$ <br>`;
    }
    display.append(start);
});
start.addEventListener("click", () => {
    let delay = 1000;
    start.style.visibility = "hidden";

    let timer = setInterval(() => {
        count--;
        display.innerHTML = count.toString();
        if (count <= 0){
            clearInterval(timer);
            display.innerHTML = '';
            display.appendChild(ready);
            count = 10;
            start.style.visibility = "visible";
        }
    }, delay);

});



