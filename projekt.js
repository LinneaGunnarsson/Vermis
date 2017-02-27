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
}
/*
function indexPageL() {
    loadPrice("cheeseburger");
    loadPrice("veggie");
    loadPrice("cheese-bacon");
    loadPrice("chevre-honey");
    loadPrice("carlsberg");
    loadPrice("heineken");
    loadPrice("pear-cider");
    loadPrice("apple-cider");
    loadPrice("cesar");
    loadPrice("meatball");
    loadPrice("egg");
    loadPrice("white");
    loadPrice("rose");
    loadPrice("red");
    
    loadPrice("tacos");
    loadPrice("fries");
    loadPrice("nachos");
    loadPrice("mozzarella-sticks");
    loadPrice("coca-cola");
    loadPrice("fanta");
    loadPrice("sprite");
    loadPrice("sparkling-water");
    loadPrice("semla");
    loadPrice("mudcake");
    loadPrice("lemoncake");
}
*/


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
  //  name.appendChild(document.createTextNode(item.price));
    itemSection.appendChild(name);
}




function loadPrice(item) {
    var priceSection = document.getElementById("cost");
    var price = document.createElement("ul");
    price.appendChild(document.createTextNode(item.price));
    priceSection.appendChild(price);
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
//la till id
function sendToReceipt(hamm, shortie, version, itemm){
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
	var priceSection = document.getElementById("cost");
	var price = document.createElement("ul");
	price.appendChild(document.createTextNode(itemm.price));
	priceSection.appendChild(price);

	
	
        receipt.push(numberOne);
        receipt.push(hamm); 
        item.onclick = function(){ 
            var add = document.getElementById("plus");
            var subtract = document.getElementById("minus");
            var info = document.getElementById("info");
            if(numbercomb2 != ""){
		price.removeChild(price.childNodes[0]);
		price.appendChild(document.createTextNode((itemm.price)*numbercomb2));
		priceSection.appendChild(price);
		priceToChange = itemm.price*numbercomb2;

		
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

		    price.removeChild(price.childNodes[0]);
		    price.appendChild(document.createTextNode((itemm.price)*numberOne));
		    priceSection.appendChild(price);
		    
			
                }
            }
            subtract.onclick = function(){
                if(numberOne >= 1){
		    
		    
                    item.removeChild(item.childNodes[0]);
                    numberOne = numberOne - 1;
		    price.removeChild(price.childNodes[0]);
		    price.appendChild(document.createTextNode((itemm.price)*numberOne));
		    priceSection.appendChild(price);
                    var amount = document.createTextNode(numberOne + "x");
                    item.appendChild(amount);
                    item.appendChild(toReceipt);
                    replaceIfInList(receipt, hamm, numberOne);
                }
                if(numberOne == 0){
		    price.parentNode.removeChild(price);
                    item.parentNode.removeChild(item);
                    deleteIfNull(receipt, hamm);
                }
            }
            info.onclick = function() {
                var infoSection = document.getElementById("infoText");
                var info2 = document.createElement("ul");
                info2.appendChild(document.createTextNode("This item contains "+ (itemm).ingredients + "."));
                infoSection.appendChild(info2);
            }
        }
    }
}


  
function sendToKitchenHamburger(){
    sendToReceipt("Cheeseburger", 'Cheeseburger', 'hamburger',hamburger[0]);
    sendToReceipt("Cheese and bacon", 'Cheese and bacon','hamburger',hamburger[1]);
    sendToReceipt("Chevre and honey", 'Chevre and honey','hamburger',hamburger[2]);
    sendToReceipt("Veggie",'Veggie','hamburger',hamburger[3]);
} 

function sendToKitchenBeerCider(){
    sendToReceipt("Carlsberg", 'Carlsberg','beercider',beercider[0]);
    sendToReceipt("Heineken", 'Heineken', 'beercider',beercider[1]);
    sendToReceipt("Pear cider", 'Pear cider', 'beercider',beercider[2]);
    //sendToReceipt("Pear cider", 'Pear cider', 'beercider');
    sendToReceipt("Apple cider",'Apple cider', 'beercider',beercider[3]);
}

function sendToKitchenSalad(){
    sendToReceipt("Ceasar salad",'Ceasar salad','salad',salad[0]);
    sendToReceipt("Meatball salad",'Meatball salad','salad',salad[1]);
    sendToReceipt("Egg salad",'Egg salad','salad',salad[2]);
}

function sendToKitchenWine(){
    sendToReceipt("White wine",'White wine','wine',wine[0]);
    sendToReceipt("Rosé wine",'Rosé wine','wine',wine[1]);
    sendToReceipt("Red wine",'Red wine','wine',wine[2]);
}

function sendToKitchenSideDish(){
    sendToReceipt("Tacos",'Tacos','sideDish',sideDish[0]);
    sendToReceipt("French fries",'French fries','sideDish',sideDish[1]);
    sendToReceipt("Nachos",'Nachos','sideDish',sideDish[2]);
    sendToReceipt("Mozzarella-sticks",'Mozzarella-sticks','sideDish',sideDish[3]);
}

function sendToKitchenSoftDrinks(){
    sendToReceipt("Coca cola",'Coca cola','softDrinks',softDrinks[0]);
    sendToReceipt("Fanta",'Fanta','softDrinks',softDrinks[1]);
    sendToReceipt("Sprite",'Sprite','softDrinks',softDrinks[2]);
    sendToReceipt("Sparkling water",'Sparkling water','softDrinks',softDrinks[3]);
}

function sendToKitchenDesserts(){
    sendToReceipt("Semla",'Semla','desserts',desserts[0]);
    sendToReceipt("Mudcake",'Mudcake','desserts',desserts[1]);
    sendToReceipt("Lemoncake",'Lemoncake','desserts',desserts[2]);
}

function sendtok(){
    alert(receipt);
    receipt = [];
    document.getElementById("texten").innerHTML = "";
}


