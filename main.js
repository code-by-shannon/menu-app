// menu objects and rendering

let ham_n_cheese = {
    name: 'Hot Ham and Cheese',
    description: 'OMG cheese AND ham',
    price : 9.99,
    quantity_available: 2,
    image: 'imgs/ham_n_cheese.png'
};

let chicken_beaks = {
    name: 'Crispy Baked Chicken Beaks',
    description: '\'nuff said!',
    price : .25,
    quantity_available: 200,
    image: 'imgs/chicken_beaks.png'
};

let old_dirty_sock = {
    name: 'Old and Dirty Sock',
    description: 'pre worn for your convenience',
    price : 39.99,
    quantity_available: 1,
    image: 'imgs/dirty_sock.png'
};
let random_snack = {
    name: 'Random Snack',
    description: 'could be anything: brave eaters only',
    price : 2.50,
    quantity_available: 9,
    image: 'imgs/question.png'
};
let fries = {
    name: 'French Fries',
    description: 'Fresh from the bottom of the fryer',
    price : 5.99,
    quantity_available: 20,
    image: 'imgs/french_fries.png'
};
let onion_rings = {
    name: 'Onion Rings',
    description: 'Bayou Bobby makes \'em fresh every day!',
    price : 9.99,
    quantity_available: 2,
    image: 'imgs/onion_ring.png'
};
let pop_tarts = {
    name: 'Pop Tarts',
    description: 'Why not?',
    price : 2.89,
    quantity_available: 7,
    image: 'imgs/pop_tart.png'
};
let biscuits_and_gravy = {
    name: 'Biscuits AND Gravy',
    description: 'gourmet level',
    price : 999.99,
    quantity_available: 200000000,
    image: 'imgs/biscuits_n_gravy.png'
};
let angry_octopus = {
    name: 'Angry Octopus / Kranky Kraken',
    description: 'Too smart to be eaten, he escaped',
    price : 1.00,
    quantity_available: 0,
    image: 'imgs/kranky_kraken.png'
};

let modal_cart = {};
const buttons = [];

 const allDishes = [ham_n_cheese, chicken_beaks, old_dirty_sock, random_snack, fries, onion_rings, pop_tarts, biscuits_and_gravy, angry_octopus];

allDishes.forEach((dish) =>{
    let div = document.createElement('div');
    div.classList.add('card');
    document.body.appendChild(div);
    console.log(div.innerHTML);

    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let img = document.createElement('img');
    img.classList.add('photo-sizing');
    img.src = dish.image;

    h2.innerText = dish.name;
    div.appendChild(h2);
    p1.innerText = dish.description;
    div.appendChild(p1);
    p2.innerText = "Price: $" + dish.price;
    div.appendChild(p2);
    p3.innerText = "Quantity Available:  " + dish.quantity_available;
    div.appendChild(p3);
    div.appendChild(img);

    // Select number of items
    let quant_div = document.createElement('div');
    let label = document.createElement('label');
    label.innerText = `Please enter the number of ${dish.name} for your order:`;
    quant_div.appendChild(label);
    let input = document.createElement('input');
    quant_div.appendChild(input);
    quant_div.classList.add('quantity_div');
    div.appendChild(quant_div);
    let button = document.createElement('button');
    button.innerText = 'ORDER';

    button.dataset.name = dish.name;
    

    quant_div.appendChild(button);
    buttons.push(button);
});

//  cart icon functionality - modal etc

const cart_icon = document.getElementById('cart');
const modal = document.getElementById('modal');

cart_icon.addEventListener('click', () => {
    cart_icon.style.color = 'blue';
    modal.classList.toggle('hidden');
});


buttons.forEach(btn => {
   btn.addEventListener('click', (e) =>{
        const name = e.currentTarget.dataset.name;
        console.log(name);
   })
})








