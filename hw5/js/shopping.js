const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

let glazingOptions = {
    "Keep original": 0.00,
    "Sugar milk": 0.00,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50
}

let packsizeOptions = {
    1: 1,
    3: 3,
    6: 5,
    12: 10
}

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element = null;
        this.totalPrice = 0;
    }
}

let cartArray = [];

let original = new Roll("Original", "Sugar Milk", 1, rolls["Original"].basePrice);
let walnut = new Roll("Walnut", "Vanilla Milk", 12, rolls["Walnut"].basePrice);
let raisin = new Roll("Raisin", "Sugar Milk", 3, rolls["Raisin"].basePrice);
let apple = new Roll("Apple", "Keep Original", 3, rolls["Apple"].basePrice);

cartArray.push(original);
cartArray.push(walnut);
cartArray.push(raisin);
cartArray.push(apple);

function deleteRoll(roll) {
    roll.element.remove();
    cartArray.pop(roll);
}

function calculate(base, currentGlaze, currentPack){
    return ((base + currentGlaze) * currentPack).toFixed(2);
}

function updateCart(roll) {
    // get the HTML elements that need updating
    const rollTitle = roll.element.querySelector('.cart-title');
    const rollPack = roll.element.querySelector('.cart-pack');
    const rollImg = roll.element.querySelector(".cart-img");
    const rollGlaze = roll.element.querySelector('.cart-glaze');    
    const rollPrice = roll.element.querySelector('.item-price');  
    
    rollTitle.textContent = roll.type + " Cinnamon Roll";
    rollPack.textContent = "Pack Size: " + roll.size;
    rollGlaze.textContent = "Glazing: " + roll.glazing; 
    let glazeName = roll.glazing.charAt(0) + roll.glazing.slice(1).toLowerCase();
    let total = calculate(roll.basePrice, glazingOptions[glazeName], packsizeOptions[roll.size]);
    rollPrice.textContent = "$" + total;
    rollImg.src = 'products/' + rolls[roll.type].imageFile;
}

function createProduct(roll) {
    const template = document.querySelector("#cart-template");
    const copy = template.content.cloneNode(true);
    roll.element = copy.querySelector(".cart-item");
    const parent = document.querySelector("#cart-list");
    const remove = roll.element.querySelector('.remove');
    remove.addEventListener('click', () => {
        deleteRoll(roll);
    });

    parent.prepend(roll.element);
    updateCart(roll);
}

for (const item of cartArray) {
    console.log(item);
    createProduct(item);
}


