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

/* URL params */

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRoll = params.get('roll');


if (document.URL.includes("detail.html") ) {
    const imgname = rolls[chosenRoll].imageFile;
    const productImage = document.querySelector('#detail-img');
    productImage.src = 'products/' + imgname;

    const productTitle = document.querySelector('#detail-title');
    productTitle.innerText = chosenRoll + " Cinnamon Roll";

}
/* Price computation */

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

let cartArray = [];

function calculate(base, currentGlaze, currentPack){
    return ((base + currentGlaze) * currentPack).toFixed(2);
}

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cartArray);
    console.log(cartArrayString);
    localStorage.setItem('storedCart', cartArrayString);
}


function addTotal(price) {
    const cartTotal = document.querySelector(".cart-price");
    let onlyDigs = cartTotal.innerText.replace("$ ", "");
    let totalComp = parseFloat(onlyDigs) + parseFloat(price);
    cartTotal.innerText="$ " + totalComp.toFixed(2);
}

/* this function stays */
function deleteRoll(roll) {
    if (cartArray.length > 0) {
        roll.element.remove();
        cartArray.pop(roll);
        addTotal(-roll.totalPrice);
    }
    saveToLocalStorage();
}

/* this function stays */
function updateCart(roll) {
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
    roll.totalPrice = parseFloat(total).toFixed(2);
    rollImg.src = 'products/' + rolls[roll.type].imageFile;
    addTotal(total);
}

/* this function stays */
function createProduct(roll) {
    const template = document.querySelector("#cart-template");
    const copy = template.content.cloneNode(true);
    roll.element = copy.querySelector(".cart-item");
    const parent = document.querySelector("#cart-list");
    const remove = roll.element.querySelector('.remove');
    remove.addEventListener('click', () => {
        deleteRoll(roll);
    });
    parent.append(roll.element);
    updateCart(roll);
}


function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart');
    const arraycart = JSON.parse(cartArrayString);
    for (const item of arraycart) {
        console.log(item);
        cartArray.push(item);
    }
}

if (document.URL.includes("cart.html") ) {
    if (localStorage.getItem('storedCart') != null) {
        retrieveFromLocalStorage();
    }
}

if (document.URL.includes("detail.html") ) {
    if (localStorage.getItem('storedCart') != null) {
        retrieveFromLocalStorage();
    }
} 

//set defaults
let currentGlaze = glazingOptions["Keep original"];
let currentGlazeName = "Keep Original";
let currentPack = packsizeOptions[1];
let base = 2.49;
let selectGlaze = document.querySelector("#glazingOptions");
let selectPack = document.querySelector("#packsizeOptions");


if (document.URL.includes("detail.html") ) {
    //dynamically populate
    for (glaze in glazingOptions) {
        var option = document.createElement('option');
        option.text = glaze;
        option.value = glazingOptions[glaze];
        selectGlaze.appendChild(option);
    }

    for (pack in packsizeOptions) {
        var option = document.createElement('option');
        option.text = pack;
        option.value = packsizeOptions[pack];
        selectPack.appendChild(option);
    }

    function calculatePrice(){
        let price = (base + currentGlaze) * currentPack;
        document.querySelector("#detail-price").innerHTML = price.toFixed(2);
    }

    //update price on select change
    function glazingChange(){
        currentGlaze = parseFloat(this.value);
        currentGlazeName = this.options[this.selectedIndex].text;
        calculatePrice();
    }

    function packsizeChange(){
        currentPack = parseFloat(this.value);
        calculatePrice();
    }

    //window.onload = function() { populateOptions() };
    selectGlaze.addEventListener('change', glazingChange);
    selectPack.addEventListener('change', packsizeChange);
}
/* Add to cart */
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, totalPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element = null;
        this.totalPrice = totalPrice;
    }
}

/*adapted from lab 6*/
function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cartArray);
    console.log(cartArrayString);
    localStorage.setItem('storedCart', cartArrayString);
}

function addCart() {
    let basep = parseFloat(rolls[chosenRoll].basePrice);
    let total = ((basep + currentGlaze) * currentPack).toFixed(2);
    const roll = new Roll(chosenRoll, currentGlazeName, currentPack, base, total);
    console.log(cartArray);
    cartArray.push(roll);
    console.log(cartArray);
    saveToLocalStorage();
    return roll;
}




