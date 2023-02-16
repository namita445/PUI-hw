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
//whyyyy
let base = 2.49;


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