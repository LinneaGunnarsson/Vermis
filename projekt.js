function docLoaded(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function indexPageLoaded() {
    loadItems(hamburger[0], "cheeseburger");
    loadItems(hamburger[1], "veggie");
    loadItems(hamburger[2], "cheese-bacon");
    loadItems(hamburger[3], "chevre-honey");
    loadItems(beercider[0], "carlsberg");
    loadItems(beercider[1], "heineken");
    loadItems(beercider[2], "pear-cider");
    loadItems(beercider[3], "apple-cider");
    loadItems(salad[0], "cesar");
    loadItems(salad[1], "meatball");
    loadItems(salad[2], "egg");
    loadItems(wine[0], "white");
    loadItems(wine[1], "rose");   
    loadItems(wine[2], "red");    
    loadItems(sideDish[0], "tacos");
    loadItems(sideDish[1], "fries");
    loadItems(sideDish[2], "nachos");
    loadItems(sideDish[3], "mozzarella-sticks");
    loadItems(softDrinks[0], "coca-cola");
    loadItems(softDrinks[1], "fanta");
    loadItems(softDrinks[2], "sprite");
    loadItems(softDrinks[3], "sparkling-water");
    loadItems(desserts[0], "semla");
    loadItems(desserts[1], "mudcake");
    loadItems(desserts[2], "lemoncake");
    showInfo(hamburger[0]);
}

var numbercomb = "";
var numbercomb2 = "";

function item(name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
}

function loadItems(item, ID) {
    var itemSection = document.getElementById(ID);
    var name = document.createElement("li");
    name.appendChild(document.createTextNode(item.name));
    itemSection.appendChild(name);
}

function numbers(id) {
    numbercomb = numbercomb + id;
}

function addNumbers() {
    numbercomb2 = numbercomb; 
    numbercomb = "";
}

function selectTable(){
    
}

function selectFood() {
    if(document.getElementById('hamburger').value=='Cheeseburger'){
        alert("hej");
    }
    if(document.getElementById('hamburger').value=='Cheese and bacon'){
        alert("you ordered a cheese and bacon burger");
    }
    if(document.getElementById('hamburger').value=='Chevre and honey'){
        alert("you ordered a chevre-honey burger");
    }
    if(document.getElementById('hamburger').value=='Veggie'){
        alert("you ordered a veggie burger");
    }
}

function replaceIfInList(listan, maten, replaceWith){ 
    var index = listan.indexOf(maten);
    if(index !== -1){
        listan[index-1] = replaceWith;
    }
    else {
        listan.push(replaceWith);
        listan.push(maten);
    }
}

function deleteIfNull(listan, maten){
    var index = listan.indexOf(maten);
    if(index !== -1){
        listan[index-1] = "";
        listan[index] = "";
    }
}

var receipt = [];

function sendToReceipt(hamm, shortie, version){
    if(document.getElementById(version).value==shortie){
        var receiptSection = document.getElementById("texten");
        var tableRow = document.createElement("tr");
        var item = document.createElement("BUTTON");
        item.style.height = "50px";
        var numberOne = 0;
        numberOne = numberOne + 1;
        var amount = document.createTextNode(numberOne + "x");
        var toReceipt = document.createTextNode(hamm);
        item.appendChild(amount);
        item.appendChild(toReceipt);
        tableRow.appendChild(item);
        receiptSection.appendChild(tableRow);
        receipt.push(numberOne);
        receipt.push(hamm);
        item.onclick = function(){
            var add = document.getElementById("plus");
            var subtract = document.getElementById("minus");
            if(numbercomb2 != ""){
                item.removeChild(item.childNodes[0]);
                numberOne = parseFloat(numbercomb2);
                var amount = document.createTextNode(numberOne + "x");
                item.appendChild(amount);
                item.appendChild(toReceipt);
                replaceIfInList(receipt, hamm, numbercomb2);
                numbercomb2="";
            }
            
            add.onclick = function(){
                if(numberOne >= 1){
                    item.removeChild(item.childNodes[0]);
                    numberOne = numberOne + 1;
                    var amount = document.createTextNode(numberOne + "x");
                    item.appendChild(amount);
                    item.appendChild(toReceipt);
                    replaceIfInList(receipt, hamm, numberOne);
                }
            }
            subtract.onclick = function(){
                if(numberOne >= 1){
                    item.removeChild(item.childNodes[0]);
                    numberOne = numberOne - 1;
                    var amount = document.createTextNode(numberOne + "x");
                    item.appendChild(amount);
                    item.appendChild(toReceipt);
                    replaceIfInList(receipt, hamm, numberOne);
                }
                if(numberOne == 0){
                    item.parentNode.removeChild(item);
                    deleteIfNull(receipt, hamm);
                }
            }
        }
    }
}

function sendToKitchenHamburger(){
    sendToReceipt("Cheeseburger", 'Cheeseburger', 'hamburger');
    sendToReceipt("Cheese and bacon", 'Cheese and bacon','hamburger');
    sendToReceipt("Chevre and honey", 'Chevre and honey','hamburger');
    sendToReceipt("Veggie",'Veggie','hamburger');
    document.getElementById('hamburger').value = 'Hamburger';
}

function sendToKitchenBeerCider(){
    sendToReceipt("Carlsberg", 'Carlsberg','beercider');
    sendToReceipt("Heineken", 'Heineken', 'beercider');
    sendToReceipt("Pear cider", 'Pear cider', 'beercider');
    sendToReceipt("Apple cider",'Apple cider', 'beercider');
    document.getElementById('beercider').value = 'Beer/cider';
}

function sendToKitchenSalad(){
    sendToReceipt("Ceasar salad",'Ceasar salad','salad');
    sendToReceipt("Meatball salad",'Meatball salad','salad');
    sendToReceipt("Egg salad",'Egg salad','salad');
    document.getElementById('salad').value = 'Salad';
}

function sendToKitchenWine(){
    sendToReceipt("White wine",'White wine','wine');
    sendToReceipt("Rosé wine",'Rosé wine','wine');
    sendToReceipt("Red wine",'Red wine','wine');
    document.getElementById('wine').value ='Wine';
}

function sendToKitchenSideDish(){
    sendToReceipt("Tacos",'Tacos','sideDish');
    sendToReceipt("French fries",'French fries','sideDish');
    sendToReceipt("Nachos",'Nachos','sideDish');
    sendToReceipt("Mozzarella-sticks",'Mozzarella-sticks','sideDish');
    document.getElementById('sideDish').value = 'Side dishes';
}

function sendToKitchenSoftDrinks(){
    sendToReceipt("Coca cola",'Coca cola','softDrinks');
    sendToReceipt("Fanta",'Fanta','softDrinks');
    sendToReceipt("Sprite",'Sprite','softDrinks');
    sendToReceipt("Sparkling water",'Sparkling water','softDrinks');
    document.getElementById('softDrinks').value = 'Soft drinks';
}

function sendToKitchenDesserts(){
    sendToReceipt("Semla",'Semla','desserts');
    sendToReceipt("Mudcake",'Mudcake','desserts');
    sendToReceipt("Lemoncake",'Lemoncake','desserts');
    document.getElementById('desserts').value = 'Desserts';
}

function sendtok(){
    alert(receipt);
    receipt = [];
    document.getElementById("texten").innerHTML = "";
}

function showInfo(object) {
    var infoSection = document.getElementById("infoText");
    var info = document.createElement("ul");
    info.appendChild(document.createTextNode("This item contains "+ object.ingredients));
    infoSection.appendChild(info);
}
