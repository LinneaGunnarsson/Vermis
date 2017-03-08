/* global sharedVueStuff, Vue, socket */
'use strict';


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getOrderNumber() {
  // It's probably not a good idea to generate a random order number, client-side. 
  // A better idea would be to let the server decide.
  return "#" + getRandomInt(1, 1000000);
}

function toPrint(){
    var hejhej = localStorage.getItem('kul');
    return hejhej;
}


function loadVueForReal() {
    new Vue({
	el: '#send',
	mixins: [sharedVueStuff], // include stuff that goes to both diner and kitchen
	methods: {
	    placeOrder: function() {
		// create an array of checked items to order
		var orderItems = toPrint();//, function(i) {
		//   return i.checked;
		//	}).map(function(i) {
		//	    return toPrint();
		//	});
		socket.emit('order', {orderId: getOrderNumber(), orderItems: orderItems});
	    }
	}
    });
}
/*
[].filter.call(document.getElementsByName('chkbox')
*/
