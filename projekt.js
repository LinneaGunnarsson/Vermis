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
    if(document.getElementById('hamburger').value=='Cheese'){
        alert("hej");
    }
    if(document.getElementById('hamburger').value=='Cheese and bacon'){
        alert("you ordered a cheese and bacon burger");
    }
    if(document.getElementById('hamburger').value=='Chevre honoung'){
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
    var ul = document.getElementById(id);
    var kcal = document.createElement("td");
    kcal.appendChild(document.createTextNode(object.kcal));
    ul.appendChild(kcal);
}

//var numbros1 = 0;
//var numbros2 = 0;
//var numbros3 = 0;
//var numbros4 = 0;
var receipt = [];
function sendToKitchenHamburger(){
    if(document.getElementById('hamburger').value=='Cheese'){
	var loli = document.getElementById("texten");
	var h = document.createElement("BUTTON");              // Create a <h1> element
//	document.body.appendChild(h);
	var numbros1=0;

	numbros1=numbros1+1;
	var l = document.createTextNode(numbros1+"x");
	var t = document.createTextNode("Cheeseburger");
	h.appendChild(l);
	h.appendChild(t);
	loli.appendChild(h);

	receipt.push("Cheeseburger");

	h.onclick = function(){
	    if(numbros1>=1){
		h.removeChild(h.childNodes[0]);
		numbros1=numbros1+1;
		var l = document.createTextNode(numbros1+"x");
		h.appendChild(l);
		h.appendChild(t);
	    }	    
	}
    }
    if(document.getElementById('hamburger').value=='Cheese and bacon'){
	var loli = document.getElementById("texten");
	var h = document.createElement("BUTTON");
//	document.body.appendChild(h);
        // Create a <h1> element
	var numbros2 = 0;
	numbros2=numbros2+1;
	var n = document.createTextNode(numbros2+"x");
	var t = document.createTextNode("Cheese and bacon burger");
	h.appendChild(n);
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Cheese and bacon burger");
	h.onclick = function(){
	    if(numbros2>=1){
		h.removeChild(h.childNodes[0]);
		numbros2=numbros2+1;
		var n = document.createTextNode(numbros2+"x");
		h.appendChild(n);
		h.appendChild(t);
	    }
	    
	}
    }
    if(document.getElementById('hamburger').value=='Chevre honoung'){
	var loli = document.getElementById("texten");
	var h = document.createElement("BUTTON");
//	document.body.appendChild(h);
	// Create a <h1> element
	var numbros3 = 0;
	numbros3=numbros3+1;
	var n = document.createTextNode(numbros3+"x");
	var t = document.createTextNode("Chevre honey burger");
	h.appendChild(n);
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Chevre honey burger");
	h.onclick = function(){
	    if(numbros3>=1){
		h.removeChild(h.childNodes[0]);
		numbros3=numbros3+1;
		var n = document.createTextNode(numbros3+"x");
		h.appendChild(n);
		h.appendChild(t);
	    }
	    
	}
    }
    if(document.getElementById('hamburger').value=='Veggie'){
	var loli = document.getElementById("texten");
	var h = document.createElement("BUTTON");              // Create a <h1> element
	//	document.body.appendChild(h);
	var numbros4 = 0;
	numbros4=numbros4+1;
	var n = document.createTextNode(numbros4+"x");
	var t = document.createTextNode("Veggieburger");
	h.appendChild(n);
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Veggieburger");
	
    	h.onclick = function(){
	    if(numbros4>=1){
		h.removeChild(h.childNodes[0]);
		numbros4=numbros4+1;
		var n = document.createTextNode(numbros4+"x");
		h.appendChild(n);
		h.appendChild(t);
	    }
	    
	}
    }
}

function sendToKitchenBeerCider(){
    if(document.getElementById('beercider').value=='Carlsberg'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Carlsberg");
	h.appendChild(t);
	loli.appendChild(h); 
    }
    if(document.getElementById('beercider').value=='Heineken'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Heineken");
	h.appendChild(t);
	loli.appendChild(h); 
    }
    if(document.getElementById('beercider').value=='Pear cider'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Pear cider");
	h.appendChild(t);
	loli.appendChild(h); 
    }
    if(document.getElementById('beercider').value=='Apple cider'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Apple cider");
	h.appendChild(t);
	loli.appendChild(h);
    }
}


function sendToKitchenSalad(){
    if(document.getElementById('salad').value=='Ceasar salad'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Ceasar salad");
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Cesar salad");
    }
    if(document.getElementById('salad').value=='Meatball salad'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Meatball salad");
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Meatball salad");
    }
    if(document.getElementById('salad').value=='Egg salad'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Egg salad");
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Egg salad");
    }
}

function sendToKitchenWine(){
    if(document.getElementById('wine').value=='White'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("White wine");
	h.appendChild(t);
	loli.appendChild(h); 
    }
    if(document.getElementById('wine').value=='Rosé'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Rosé wine");
	h.appendChild(t);
	loli.appendChild(h); 
    }
    if(document.getElementById('wine').value=='Red'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Red wine");
	h.appendChild(t);
	loli.appendChild(h); 
    }
}


function sendToKitchenSideDish(){
    if(document.getElementById('sideDish').value=='Tacos'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Tacos");
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Tacos");
    }
    if(document.getElementById('sideDish').value=='French fries'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("French fries");
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("French fries");
    }
    if(document.getElementById('sideDish').value=='Nachos'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Nachos");
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Nachos");
    }
    if(document.getElementById('sideDish').value=='Mozzarella-sticks'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Mozzarella-sticks");
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Mozzarella-sticks");
    }
}


function sendToKitchenSoftDrinks(){
    if(document.getElementById('softDrinks').value=='Coca-cola'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Coca-cola");
	h.appendChild(t);
	loli.appendChild(h); 
    }
    if(document.getElementById('softDrinks').value=='Fanta'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Fanta");
	h.appendChild(t);
	loli.appendChild(h); 
    }
    if(document.getElementById('softDrinks').value=='Sprite'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Sprite");
	h.appendChild(t);
	loli.appendChild(h); 
    }
    if(document.getElementById('softDrinks').value=='Sparkling water'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Sparkling water");
	h.appendChild(t);
	loli.appendChild(h); 
    }
}


function sendToKitchenDesserts(){
    if(document.getElementById('desserts').value=='Semla'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Semla");
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Semla");
    }
    if(document.getElementById('desserts').value=='Mudcake'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Mudcake");
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Mudcake");
    }
    if(document.getElementById('desserts').value=='Lemoncake'){
	var loli = document.getElementById("texten");
	var h = document.createElement("H1")              // Create a <h1> element
	var t = document.createTextNode("Lemoncake");
	h.appendChild(t);
	loli.appendChild(h); 
	receipt.push("Lemoncake");
    }
    
    
}

function sendtok(){
    alert(receipt);
    receipt = [];
    document.getElementById("texten").innerHTML = "";
}

