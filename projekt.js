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
    /*
    loadItems(wine[0], "white");
    loadItems(wine[1], "rose");
    loadItems(wine[2], "red");
    */
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

var numbercomb = "";


//Behövs denna??
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
    checking(numbercomb);  ///vi ska byta ut alert mot något annat.
    numbercomb = "";
}
/*
function checking(numbercomb){
    if (numbercomb > 0){
	
    }

}*/


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

function selectDrink(id) {

}

function food(name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
}

function drinks(name, price) {
    this.name = name;
    this.price = price;
}

function wine(name, priceB, priceG) {
    this.name = name;
    this.priceB = priceB;
    this.priceG = priceG;
}

function printAll(object, id) {
    var itemSection = document.getElementById(id);
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(object.name));
    itemSection.appendChild(item);
}

//var numbros1 = 0;
//var numbros2 = 0;
//var numbros3 = 0;
//var numbros4 = 0;
var receipt = [];

function sendToKitchenHamburger(){
    if(document.getElementById('hamburger').value=='Cheeseburger'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("BUTTON");              // Create a <h1> element
//	document.body.appendChild(h);
	var numberOne = 0;

	numberOne = numberOne + 1;
	var amout = document.createTextNode(numberOne + "x");
	var toReceipt = document.createTextNode("Cheeseburger");
	item.appendChild(amount);
	item.appendChild(toReceipt);
	receiptSection.appendChild(item);

	receipt.push("Cheeseburger");

	item.onclick = function(){
	    if(numberOne >= 1){
		item.removeChild(h.childNodes[0]);
		numberOne = numberOne + 1;
		var amount = document.createTextNode(numberOne + "x");
		item.appendChild(amount);
		item.appendChild(toReceipt);
	    }	    
	}
    }
    if(document.getElementById('hamburger').value=='Cheese and bacon'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("BUTTON");
//	document.body.appendChild(h);
        // Create a <h1> element
	var numberTwo = 0;
	numberTwo = numberTwo +1;
	var amount = document.createTextNode(numberTwo + "x");
	var toReceipt = document.createTextNode("Cheese and bacon burger");
	item.appendChild(amount);
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Cheese and bacon burger");
	item.onclick = function(){
	    if(numberTwo >= 1){
		item.removeChild(item.childNodes[0]);
		numberTwo = numberTwo +1;
		var amount = document.createTextNode(numberTwo + "x");
		item.appendChild(amount);
		item.appendChild(toReceipt);
	    }
	    
	}
    }
    if(document.getElementById('hamburger').value=='Chevre and honey'){
	var toReceipt = document.getElementById("texten");
	var item = document.createElement("BUTTON");
//	document.body.appendChild(h);
	// Create a <h1> element
	var numberThree = 0;
	numberThree = numberThree +1;
	var amount = document.createTextNode(numberThree + "x");
	var toReceipt = document.createTextNode("Chevre honey burger");
	item.appendChild(amount);
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Chevre honey burger");
	item.onclick = function(){
	    if(numberThree >= 1){
		item.removeChild(h.childNodes[0]);
		numberThree = numberThree +1;
		var amount = document.createTextNode(numberThree + "x");
		item.appendChild(amount);
		item.appendChild(toReceipt);
	    }
	    
	}
    }
    if(document.getElementById('hamburger').value=='Veggie'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("BUTTON");              // Create a <h1> element
	//	document.body.appendChild(h);
	var numberFour = 0;
	numberFour =numberFour + 1;
	var amount = document.createTextNode(numberFour + "x");
	var toReceipt = document.createTextNode("Veggieburger");
	item.appendChild(amount);
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Veggieburger");
	
    	item.onclick = function(){
	    if(numberFour >= 1){
		item.removeChild(item.childNodes[0]);
		numberFour = numberFour + 1;
		var amount = document.createTextNode(numberFour + "x");
		item.appendChild(amount);
		item.appendChild(toReceipt);
	    }
	    
	}
    }
}

function sendToKitchenBeerCider(){
    if(document.getElementById('beercider').value=='Carlsberg'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Carlsberg");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
    }
    if(document.getElementById('beercider').value=='Heineken'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Heineken");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
    }
    if(document.getElementById('beercider').value=='Pear cider'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Pear cider");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
    }
    if(document.getElementById('beercider').value=='Apple cider'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Apple cider");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item);
    }
}


function sendToKitchenSalad(){
    if(document.getElementById('salad').value=='Ceasar salad'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Ceasar salad");
	h.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Cesar salad");
    }
    if(document.getElementById('salad').value=='Meatball salad'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Meatball salad");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Meatball salad");
    }
    if(document.getElementById('salad').value=='Egg salad'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Egg salad");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Egg salad");
    }
}

function sendToKitchenWine(){
    if(document.getElementById('wine').value=='White wine'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("White wine");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
    }
    if(document.getElementById('wine').value=='Rosé wine'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Rosé wine");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
    }
    if(document.getElementById('wine').value=='Red wine'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Red wine");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
    }
}


function sendToKitchenSideDish(){
    if(document.getElementById('sideDish').value=='Tacos'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Tacos");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Tacos");
    }
    if(document.getElementById('sideDish').value=='French fries'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("French fries");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("French fries");
    }
    if(document.getElementById('sideDish').value=='Nachos'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Nachos");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Nachos");
    }
    if(document.getElementById('sideDish').value=='Mozzarella-sticks'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Mozzarella-sticks");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Mozzarella-sticks");
    }
}


function sendToKitchenSoftDrinks(){
    if(document.getElementById('softDrinks').value=='Coca cola'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Coca-cola");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
    }
    if(document.getElementById('softDrinks').value=='Fanta'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Fanta");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
    }
    if(document.getElementById('softDrinks').value=='Sprite'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Sprite");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
    }
    if(document.getElementById('softDrinks').value=='Sparkling water'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Sparkling water");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
    }
}


function sendToKitchenDesserts(){
    if(document.getElementById('desserts').value=='Semla'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Semla");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Semla");
    }
    if(document.getElementById('desserts').value=='Mudcake'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Mudcake");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Mudcake");
    }
    if(document.getElementById('desserts').value=='Lemoncake'){
	var receiptSection = document.getElementById("texten");
	var item = document.createElement("H1")              // Create a <h1> element
	var toReceipt = document.createTextNode("Lemoncake");
	item.appendChild(toReceipt);
	receiptSection.appendChild(item); 
	receipt.push("Lemoncake");
    }
    
    
}

function sendtok(){
    alert(receipt);
    receipt = [];
    document.getElementById("texten").innerHTML = "";
}

