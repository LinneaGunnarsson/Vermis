function docLoaded(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

function loadVue() {
    var vm = new Vue({
	el: '#myID',
	data: {
	    arbitraryVariableName: 'Välj'
	}
    })
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
 
    
    loadVueForReal();
}



var numbercomb = "";
var numbercomb2 = "";
var theSum;

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


/*	if(sumSection.childNode[0] == null){
	sumSection.appendChild(document.createTextNode(thaPrice));
	    }
	else{*/

//	sumSection.appendChild(document.createTextNode(thaPrice));


var priset=0;
var thaPrice = 0;
var receipt = [];
//la till id
function sendToReceipt(j, hamm, shortie, version, itemm){
    if(document.getElementById(version).value==shortie){
	
	/*	var receiptSection = document.getElementById("texten");
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
		var priceSection = document.createElement("cost");
		var price = document.createElement("ul");
		price.appendChild(document.createTextNode(itemm.price));
		priceSection.appendChild(price);
		priceSection.appendChild(receiptSection);
		
	priset = priset + parseInt(itemm.price);*/
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
	var priceTableRow = document.createElement("tr");
	receiptSection.appendChild(priceSection);
	var price = document.createElement("ul");
	price.appendChild(document.createTextNode(itemm.price));
	priceTableRow.appendChild(price);
	priceSection.appendChild(priceTableRow);
	var sumSection = document.getElementById("hereInputSum");
	
	thaPrice = thaPrice + parseInt(itemm.price);
//	sumSection.appendChild(document.createTextNode(thaPrice));
	sumSection.replaceChild(document.createTextNode(thaPrice),sumSection.childNodes[0]);
	
	if(j==1) {
            receipt.push(numberOne);
            receipt.push(hamm);} 
        item.onclick = function(){ 
            var add = document.getElementById("plus");
            var subtract = document.getElementById("minus");
            var info = document.getElementById("info");
            if(numbercomb2 != ""){

		price.replaceChild(document.createTextNode((itemm.price)*numbercomb2),price.childNodes[0]);

		priceToChange = itemm.price*numbercomb2;
		
		thaPrice = thaPrice + parseInt(itemm.price*(numbercomb2-1));
		//	sumSection.appendChild(document.createTextNode(thaPrice));
		sumSection.replaceChild(document.createTextNode(thaPrice),sumSection.childNodes[0]);

                item.removeChild(item.childNodes[0]);
                numberOne = parseFloat(numbercomb2);
                var amount = document.createTextNode(numberOne + "x");
                item.appendChild(amount);
                item.appendChild(toReceipt);
                replaceIfInList(receipt, hamm, numbercomb2);
                numbercomb2="";

		priset = priset + itemm.price*(numbercomb2);
		sumSection.replaceChild(priset,sumSection.childNodes[0]);
            }
            add.onclick = function(){
                if(numberOne >= 1){

                    item.removeChild(item.childNodes[0]);
                    numberOne = numberOne + 1;
                    var amount = document.createTextNode(numberOne + "x");
                    item.appendChild(amount);
                    item.appendChild(toReceipt);
                    replaceIfInList(receipt, hamm, numberOne);
		    price.replaceChild(document.createTextNode((itemm.price)*numberOne),price.childNodes[0]);
		    
		    thaPrice = thaPrice + parseInt(itemm.price);
		 
		    sumSection.replaceChild(document.createTextNode(thaPrice),sumSection.childNodes[0]);
		    
		    priset = priset + itemm.price;
		    sumSection.replaceChild(document.createTextNode(priset),sumSection.childNodes[0]);			
                }
            }
            subtract.onclick = function(){
                if(numberOne >= 1){
		    
		    
                    item.removeChild(item.childNodes[0]);
                    numberOne = numberOne - 1;
		   // price.removeChild(price.childNodes[0]);
		    price.replaceChild(document.createTextNode((itemm.price)*numberOne),price.childNodes[0]);
		   
                    var amount = document.createTextNode(numberOne + "x");
                    item.appendChild(amount);
                    item.appendChild(toReceipt);
                    replaceIfInList(receipt, hamm, numberOne);

		    priset = priset - itemm.price;
		  /*  priceSection.appendChild(price);
                    var amount = document.createTextNode(numberOne + "x");
                    item.appendChild(amount);
                    item.appendChild(toReceipt);
                    replaceIfInList(receipt, hamm, numberOne);

		    priset = priset - itemm.price;*/
		    thaPrice = thaPrice - parseInt(itemm.price);
		 
		    sumSection.replaceChild(document.createTextNode(thaPrice),sumSection.childNodes[0]);
                }
                if(numberOne == 0){
		    price.parentNode.removeChild(price);
                    item.parentNode.removeChild(item);
                    deleteIfNull(receipt, hamm);
                }
            }
            info.onclick = function() {
                var infoSection = document.getElementById("infoText");
                infoSection.innerHTML="";
                var info2 = document.createElement("ul");
                info2.appendChild(document.createTextNode("This item contains "+ (itemm).ingredients + "."));
                infoSection.appendChild(info2);
            }
        }
    } 
}


  
function sendToKitchenHamburger(){
    sendToReceipt(1,"Cheeseburger", 'Cheeseburger', 'hamburger',hamburger[0]);
    sendToReceipt(1,"Cheese and bacon", 'Cheese and bacon','hamburger',hamburger[1]);
    sendToReceipt(1,"Chevre and honey", 'Chevre and honey','hamburger',hamburger[2]);
    sendToReceipt(1,"Veggie",'Veggie','hamburger',hamburger[3]);
    document.getElementById('hamburger').value = 'Hamburger';
    
  
} 

function sendToKitchenBeerCider(){
    sendToReceipt(0,"Carlsberg", 'Carlsberg','beercider',beercider[0]);
    sendToReceipt(0,"Heineken", 'Heineken', 'beercider',beercider[1]);
    sendToReceipt(0,"Pear cider", 'Pear cider', 'beercider',beercider[2]);
    sendToReceipt(0,"Apple cider",'Apple cider', 'beercider',beercider[3]);
    document.getElementById('beercider').value = 'Beer/cider';
 
 
}

function sendToKitchenSalad(){
    sendToReceipt(1,"Ceasar salad",'Ceasar salad','salad',salad[0]);
    sendToReceipt(1,"Meatball salad",'Meatball salad','salad',salad[1]);
    sendToReceipt(1,"Egg salad",'Egg salad','salad',salad[2]);
    document.getElementById('salad').value = 'Salad';
  
}

function sendToKitchenWine(){
    sendToReceipt(0,"White wine",'White wine','wine',wine[0]);
    sendToReceipt(0,"Rosé wine",'Rosé wine','wine',wine[1]);
    sendToReceipt(0,"Red wine",'Red wine','wine',wine[2]);
    document.getElementById('wine').value ='Wine';
  
}

function sendToKitchenSideDish(){
    sendToReceipt(1,"Tacos",'Tacos','sideDish',sideDish[0]);
    sendToReceipt(1,"French fries",'French fries','sideDish',sideDish[1]);
    sendToReceipt(1,"Nachos",'Nachos','sideDish',sideDish[2]);
    sendToReceipt(1,"Mozzarella-sticks",'Mozzarella-sticks','sideDish',sideDish[3]);
    document.getElementById('sideDish').value = 'Side dishes';
  
}

function sendToKitchenSoftDrinks(){
    sendToReceipt(0,"Coca cola",'Coca cola','softDrinks',softDrinks[0]);
    sendToReceipt(0,"Fanta",'Fanta','softDrinks',softDrinks[1]);
    sendToReceipt(0,"Sprite",'Sprite','softDrinks',softDrinks[2]);
    sendToReceipt(0,"Sparkling water",'Sparkling water','softDrinks',softDrinks[3]);
    document.getElementById('softDrinks').value = 'Soft drinks';
  
}

function sendToKitchenDesserts(){
    sendToReceipt(1,"Semla",'Semla','desserts',desserts[0]);
    sendToReceipt(1,"Mudcake",'Mudcake','desserts',desserts[1]);
    sendToReceipt(1,"Lemoncake",'Lemoncake','desserts',desserts[2]);
    document.getElementById('desserts').value = 'Desserts';

}

function prisetTotal(){
    var sumSection = document.getElementById("hereInputSum");
    var s = document.createTextNode(priset);
    sumSection.appendChild(s);
// return sumSection;
}

function payment(){
 //   var sumSection = prisetTotal();
   // sumSection.deleteNode[0];
}//

function sendtok(){
    document.getElementById("cost").innerHTML="";
    if(receipt != ""){
	alert(receipt);
	if (numbercomb2==""){
	    numbercomb2="x";
	}
	socket.emit('order', {orderId: "Table:"+numbercomb2, orderItems: receipt});
	localStorage.setItem('kul',JSON.stringify(receipt));
	receipt = [];
	document.getElementById("texten").innerHTML = "";
    }
    else{receipt = [];
	document.getElementById("texten").innerHTML = "";}
}



function selectTable(){
 
    var tableNum = numbercomb2;
    while(tableNum === ""){
	selectTable();
    }
    tableNum = parseFloat(numbercomb2);
    if(!(t01.innerText.includes("for table:"))){
	var rece = t01.innerText;
	t01.innerText = rece + '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + "for table:" + "\u00A0" + tableNum;
    }
    
}

// <script> prisetTotal()</script>
/*

	</tr>
	<td id="texten"></td>
	<tr id="fo">
	  <td id="cost"></td>
	</tr>
*/


