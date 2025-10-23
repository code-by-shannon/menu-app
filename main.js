let ham_n_cheese = {
    name: 'Hot Ham and Cheese',
    description: 'OMG cheese AND ham',
    price : 9.99,
    quantity_available: 2
};

let chicken_beaks = {
    name: 'Crispy Baked Chicken Beaks',
    description: '\'nuff said!',
    price : .25,
    quantity_available: 200
};

let old_dirty_sock = {
    name: 'Old and Dirty Sock',
    description: 'pre worn for your convenience',
    price : 39.99,
    quantity_available: 1
};
let random_snack = {
    name: 'Random Snack',
    description: 'could be anything: brave eaters only',
    price : 2.50,
    quantity_available: 9
};
let fries = {
    name: 'French Fries',
    description: 'Fresh from the bottom of the fryer',
    price : 5.99,
    quantity_available: 20
};
let onion_rings = {
    name: 'Onion Rings',
    description: 'Bayou Bobby makes \'em fresh every day!',
    price : 9.99,
    quantity_available: 2
};
let pop_tarts = {
    name: 'Pop Tarts',
    description: 'Why not?',
    price : 2.89,
    quantity_available: 7
};
let biscuits_and_gravy = {
    name: 'Biscuits AND Gravy',
    description: 'gourmet level',
    price : 999.99,
    quantity_available: 200000000
};
let angry_octopus = {
    name: 'Angry Octopus',
    description: 'Too smart to be eaten, he escaped',
    price : 1.00,
    quantity_available: 0
};



const allDishes = [ham_n_cheese, chicken_beaks, old_dirty_sock, random_snack, fries, onion_rings, pop_tarts, biscuits_and_gravy, angry_octopus];

allDishes.forEach((dish) =>{
    let div = document.createElement('div');
    document.body.appendChild(div);
    console.log(div.innerHTML);

    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');

    h2.innerText = dish.name;
    div.appendChild(h2);
    console.log(h2);

    // loop through each key / value pair and log value
   
});



