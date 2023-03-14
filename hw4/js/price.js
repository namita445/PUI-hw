
/* Rolls database */
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

const imgname = rolls[chosenRoll].imageFile;
const productImage = document.querySelector('#detail-img');
productImage.src = 'products/' + imgname;

const productTitle = document.querySelector('#detail-title');
productTitle.innerText = chosenRoll + " Cinnamon Roll";


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

//set defaults
let currentGlaze = glazingOptions["Keep original"];
let currentPack = packsizeOptions[1];

let base = rolls[chosenRoll].basePrice;

let selectGlaze = document.querySelector("#glazingOptions");
let selectPack = document.querySelector("#packsizeOptions");


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

//update price on select change
function glazingChange(){
    currentGlaze = parseFloat(this.value);
    calculate();
}

function packsizeChange(){
    currentPack = parseFloat(this.value);
    calculate();
}

//window.onload = function() { populateOptions() };
selectGlaze.addEventListener('change', glazingChange);
selectPack.addEventListener('change', packsizeChange);

function calculate(){
    let price = (base + currentGlaze) * currentPack;
    document.querySelector("#detail-price").innerHTML = price.toFixed(2);
    //cuts two decimal spaces
}

/* Add to cart */
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let cartArray = [];

function addCart() {
    const roll = new Roll(chosenRoll, currentGlaze, currentPack, base);
    cartArray.push(roll);
    console.log(cartArray);
}
