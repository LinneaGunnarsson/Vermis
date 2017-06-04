var ALL_ITEMS = [];

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
    ALL_ITEMS[item.name] = {price: item.price};
    var itemSection = document.getElementById(ID);
    itemSection.appendChild(document.createTextNode(item.name)); 
}
/*
function numbers(id) {
    numbercomb = numbercomb + id;
}

function addNumbers() {
    var nummerutskrivning = document.getElementById("nummerutskrivning");
    numbercomb2 = numbercomb;
    writeTotalNumber(nummerutskrivning);
    numbercomb = "";
}*/

function numbers(id) {
    numbercomb = numbercomb + id;
    var nummerutskrivning = document.getElementById("nummerutskrivning");
    
    writeTotalNumber(id,nummerutskrivning);
    numbercomb2 = numbercomb;
    numbercomb = "";
}



function addNumbers() {
    var nummerutskrivning = document.getElementById("nummerutskrivning");
    numbercomb2 = numercomb2 + numbercomb;
    writeTotalNumber(numbercomb2, nummerutskrivning);
    numbercomb = "";
}



var i = 0;
function writeTotalNumber(id,place){
    var place = document.getElementById("nummerutskrivning");
    if (id != "C"){
	//	var lol = numbercomb + numbercomb2;
	place.appendChild(document.createTextNode(id));
	numbercomb2 = numbercomb2 + id;
	i = i + 1;
    }
    if (id == "C"){
	place.innerHTML = "";
	i = 0;
	numbercomb2 = "";
	
    }
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



var priset=0;
var thaPrice = 0;
var receipt = [];

function addToOrder(categoryId, kitchen = 0){
    hamm = document.getElementById(categoryId).value;
    var sumSection = document.getElementById("hereInputSum");
    var tableRow = document.createElement("tr");
    //var item = document.createElement("BUTTON");
    //var changeButton = document.createElement("BUTTON");
    //item.appendChild(changeButton);

    var numberOne = 0;
    numberOne = numberOne + 1;
    var amount = document.createElement("td");
    amount.innerHTML = (numberOne + " x ");
    var toReceipt = document.createElement("BUTTON");
    toReceipt.innerHTML = hamm;

    tableRow.appendChild(amount);
    tableRow.appendChild(toReceipt);
    //tableRow.appendChild(item);

    var price = document.createElement("td");
    price.innerHTML = (ALL_ITEMS[hamm].price);
    tableRow.appendChild(price);

    document.getElementById("receipt").appendChild(tableRow);

    thaPrice = thaPrice + parseInt(ALL_ITEMS[hamm].price);
    sumSection.innerHTML = thaPrice;
    

    if(kitchen != 0) {
        receipt.push(numberOne);
        receipt.push(hamm);
    }
    
    toReceipt.onclick = function(){ 
        var add = document.getElementById("plus");
        var subtract = document.getElementById("minus");
        var info = document.getElementById("info");
	info.onclick = function() {
            var infoSection = document.getElementById("infoText");
            infoSection.innerHTML="";
            var info2 = document.createElement("ul");
            info2.appendChild(document.createTextNode("This item contains "+ (ALL_ITEMS[hamm].ingredients + ".")));
            infoSection.appendChild(info2);
        }
        if(numbercomb2 != ""){
	    i=0;
	    sumSection.innerHTML = "";
            // 
	    var nummret = numberOne;
	    if(numberOne < numbercomb2){
		numberOne = parseFloat(numbercomb2);
		
		amount.innerHTML = "";
		amount.innerHTML = (numberOne + " x ");
		
		priset = priset + (ALL_ITEMS[hamm].price*numberOne);
		
		
		price.innerHTML = "";
		
		price.innerHTML = (ALL_ITEMS[hamm].price*numbercomb2);
		priset = priset + ALL_ITEMS[hamm].price;
		
		thaPrice = thaPrice + (ALL_ITEMS[hamm].price*(numbercomb2-1))-(ALL_ITEMS[hamm].price*(nummret-1));
		sumSection.innerHTML = thaPrice;
	    }
	    else{
		numberOne = parseFloat(numbercomb2);
		
		amount.innerHTML = "";
		amount.innerHTML = (numberOne + " x ");
		
		priset = priset + (ALL_ITEMS[hamm].price*numberOne);
		nummret
		
		price.innerHTML = "";
		
		price.innerHTML = (ALL_ITEMS[hamm].price*numbercomb2);
		priset = priset + ALL_ITEMS[hamm].price;
		
		thaPrice = thaPrice + (ALL_ITEMS[hamm].price*(numbercomb2-1))-(ALL_ITEMS[hamm].price*(nummret-1));
		sumSection.innerHTML = thaPrice;
	    }
	    
            numbercomb2="";
	    var nummerutskrivning = document.getElementById("nummerutskrivning");
	    nummerutskrivning.innerHTML = "";
	   
        }
        add.onclick = function(){
            if(numberOne >= 1){
		sumSection.innerHTML = "";
                numberOne = numberOne + 1;
		
		amount.innerHTML = "";
		amount.innerHTML = (numberOne + " x ");

		
		priset = priset + (ALL_ITEMS[hamm].price*numberOne);
		
		thaPrice = thaPrice + parseInt(ALL_ITEMS[hamm].price);
		sumSection.innerHTML = thaPrice;
	
		price.innerHTML = "";
		
		price.innerHTML = (ALL_ITEMS[hamm].price*numberOne);
		priset = priset + ALL_ITEMS[hamm].price;
		
            }
        }
        subtract.onclick = function(){
            if(numberOne >= 1){
                
                numberOne = numberOne - 1;
		
		amount.innerHTML = "";
		amount.innerHTML = (numberOne + " x ");
		
		priset = priset - (ALL_ITEMS[hamm].price*numberOne);
		
		thaPrice = thaPrice - ALL_ITEMS[hamm].price;
		sumSection.innerHTML = "";
		sumSection.innerHTML = thaPrice;
  
		price.innerHTML = "";
	
		price.innerHTML = (ALL_ITEMS[hamm].price*numberOne);
		priset = priset - ALL_ITEMS[hamm].price;
		
            }
            if(numberOne == 0){
		price.removeChild(price);
                item.removeChild(item);
               // deleteIfNull(receipt, hamm);
            }
        } 
    }
    document.getElementById(categoryId).value = 0;
} 



        // item.onclick = function(){ 
        //     var add = document.getElementById("plus");
        //     var subtract = document.getElementById("minus");
        //     var info = document.getElementById("info");
        //     info.onclick = function() {
        //         var infoSection = document.getElementById("infoText");
        //         infoSection.innerHTML="";
        //         var info2 = document.createElement("ul");
        //         info2.appendChild(document.createTextNode("This item contains "+ (itemm).ingredients + "."));
        //         infoSection.appendChild(info2);
        //     }
        //     if(numbercomb2 != ""){
        //         i = 0;
        //         var place = document.getElementById("nummerutskrivning");
        //         place.innerHTML = "";
        //         price.childNodes[0].innerHTML = ((itemm.price)*numbercomb2);

        //         priceToChange = itemm.price*numbercomb2;

        //         thaPrice = thaPrice + parseInt(itemm.price*(numbercomb2-1));


        //         item.removeChild(item.childNodes[0]);
        //         numberOne = parseFloat(numbercomb2);
        //         var amount = document.createTextNode(numberOne + "x");
        //         item.appendChild(amount);
        //         item.appendChild(toReceipt);
        //         replaceIfInList(receipt, hamm, numbercomb2);
        //         numbercomb2="";

        //         priset = priset + itemm.price*(numbercomb2);
        //     }
        //     add.onclick = function(){
        //         if(numberOne >= 1){

        //             item.removeChild(item.childNodes[0]);
        //             numberOne = numberOne + 1;
        //             var amount = document.createTextNode(numberOne + "x");
        //             item.appendChild(amount);
        //             item.appendChild(toReceipt);
        //             replaceIfInList(receipt, hamm, numberOne);
        //             price.childNodes[0].innerHTML = ((itemm.price)*numberOne);
        //             priset = priset + itemm.price;
        //             thaPrice = (thaPrice) + parseInt(itemm.price);

        //         }
        //     }
        //     subtract.onclick = function(){
        //         if(numberOne >= 1){
        //             item.removeChild(item.childNodes[0]);
        //             numberOne = numberOne - 1;

        //             price.childNodes[0].innerHTML = ((itemm.price)*numberOne);

        //             var amount = document.createTextNode(numberOne + "x");
        //             item.appendChild(amount);
        //             item.appendChild(toReceipt);
        //             replaceIfInList(receipt, hamm, numberOne);

        //             priset = priset - itemm.price;

        //             thaPrice = thaPrice - parseInt(itemm.price);

        //         }
        //         if(numberOne == 0){
        //             price.parentNode.removeChild(price);
        //             item.parentNode.removeChild(item);
        //             deleteIfNull(receipt, hamm);
        //         }
        //     }
        // }

function sendtok(){
    var infoSection = document.getElementById("infoText");
    tableNum = "";
    infoSection.innerHTML="";
    if(receipt != ""){
       alert(receipt);
       if (numbercomb2==""){
           numbercomb2="x";
       }
       socket.emit('order', {orderId: "Table:"+tableNumm, orderItems: receipt});
       localStorage.setItem('kul',JSON.stringify(receipt));
        receipt = [];
        document.getElementById("tableButt").value = 'Table';
   }
   else{
       receipt = [];
       document.getElementById('t01').innerHTML = rece;
       document.getElementById("tableButt").value = 'Table';
   }
   thaPrice = 0;
   document.getElementById("hereInputSum").innerHTML="";
   var receiptItems = document.getElementById("receipt");
   while (receiptItems.firstChild) {
    receiptItems.removeChild(receiptItems.firstChild);
    }
}

/*
function sendtok(cost,texten,hereInputSum){
    cost.innerHTML = "";
    hereInputSum.innerHTML = "";
    if(receipt != ""){
	alert(receipt);
	if (numbercomb2==""){
	    numbercomb2="x";
	}
	socket.emit('order', {orderId: "Table:"+numbercomb2, orderItems: receipt});
	localStorage.setItem('kul',JSON.stringify(receipt));
	receipt = [];

	document.getElementById("infoText").innerHTML = "";
       
	texten.innerHTML = "";
//	document.getElementById('texten').innerHTML = "";
    }
    else{receipt = [];
	 document.getElementById("infoText").innerHTML = "";
	 texten.innerHTML = "";
	}
 //   document.getElementById('t01').innerHTML = "";
  // document.getElementById('cost').innerHTML = "";
   // document.getElementById('hereInputSum').innerHTML = "";
}


/*var priceSection = document.getElementById("cost");
    var receiptSection = document.getElementById("texten");
    var send = document.getElementById("send");
    var sumSection = document.getElementById("hereInputSum");*/
/*
function lool(som){

    var children = som.childNodes;
    for(var i = 0; i < children.length+1; i++){
	som.removeChild(children[i]);
    }
}*/
/*function sendtok(cost,texten,hereInputSum){
    //var priceSection = document.getElementById("cost");
    //var receiptSection = document.getElementById("texten");
    //var sumSection = document.getElementById("hereInputSum")
    lool(cost);
    lool(texten);
    lool(hereInputSum);
    if(receipt != ""){
	alert(receipt);
	if (numbercomb2==""){
	    numbercomb2="x";
	}
	socket.emit('order', {orderId: "Table:"+tableNumm, orderItems: receipt});
	localStorage.setItem('kul',JSON.stringify(receipt));
	receipt = [];
//	lool(priceSection);
//	lool(sumSection);
//	lool(receiptSection);
	//	document.getElementById("infoText").innerHTML = "";
	//lool(priceSection);
	//lool(sumSection);	
//	lool(receiptSection);
	//	document.getElementById('texten').innerHTML = "";
    }
    else{receipt = [];
//	 lool(priceSection);
//	 lool(sumSection);
//	 lool(receiptSection);
	 //lool(priceSection);
	// lool(sumSection);
	 //document.getElementById("infoText").innerHTML = "";
//	 lool(receiptSection);
	}
    //   document.getElementById('t01').innerHTML = "";
    // document.getElementById('cost').innerHTML = "";
    // document.getElementById('hereInputSum').innerHTML = "";
}*/

function payment(){
 //   var sumSection = prisetTotal();
   // sumSection.deleteNode[0];
}
//var tableNum = 1;

var tableNumm = 0;
function selectTable(){
    tableNumm = document.getElementById('tableButt').value;
    var rece = document.getElementById('t01').innerHTML;
    var tabbe = "for table:" + "\u00A0" + tableNumm;
    document.getElementById('t01').innerHTML = "Receipt";
    document.getElementById('t01').innerHTML = "Receipt" + "\u00A0" + tabbe;

    /*

    //var tableNum = numbercomb2;
    while(tableNum == ""){
       selectTable();
   }
   tableNum = parseFloat(numbercomb2);
   if(!(document.getElementById('t01').innerHTML.includes("for table:"))){
	//t01.innerText.includes("for table:"))){
       var rece = document.getElementById('t01').innerHTML;
	//	var rece = t01.innerText;
    tableNumm = document.getElementById('tableButt').value;
    document.getElementById('t01').innerHTML = rece + '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + "for table:" + "\u00A0" + tableNumm;
	//t01.innerText = rece + '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' + "for table:" + "\u00A0" + tableNum;
}
*/

}


