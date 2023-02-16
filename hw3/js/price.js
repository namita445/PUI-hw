let currentGlaze = 0.0;
let currentPack = 1.0;
let base = 2.49;


const glazingOptions = {
    "Keep original": 0.0,
    "Sugar milk": 0.0,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50
}

const selectGlaze = document.querySelector("#glazingOptions");
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

function calculate(){
    let price = (base + currentGlaze) * currentPack;
    document.querySelector("#detail-price").innerHTML = price.toFixed(2);
}

function glazingChange(){
    currentGlaze = parseFloat(this.value);
    let price = (base + currentGlaze) * currentPack;
    document.querySelector("#detail-price").innerHTML = price.toFixed(2);
}

function packsizeChange(){
    currentPack = parseFloat(this.value);
    calculate();
}
selectGlaze.addEventListener('change', glazingChange);
selectGlaze.addEventListener('change', packsizeChange);
