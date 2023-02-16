let currentGlaze;
let currentPack;


const glazingOptions = {
    "Keep original": 0.00,
    "Sugar milk": 0.00,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50
}

let selectGlaze = document.querySelector("#glazingOptions");
for (glaze in glazingOptions) {
    var option = document.createElement('option');
    option.text = glaze;
    option.value = glazingOptions[glaze];
    selectGlaze.appendChild(option);
}

const packsizeOptions = {
    1: 1.00,
    3: 3.00,
    6: 5.00,
    12: 10.00
}

let selectPack = document.querySelector("#packsizeOptions");
for (pack in packsizeOptions) {
    var option = document.createElement('option');
    option.text = pack;
    option.value = packsizeOptions[pack];
    selectPack.appendChild(option);
}

let price = document.querySelector("#detail-price");
function glazingChange(element){
    const priceChange = parseFloat(element.value);
    const newprice = priceChange + 2.00;
    price.innerText = newprice.toFixed(2);
}

selectGlaze.addEventListener("change", glazingChange);
