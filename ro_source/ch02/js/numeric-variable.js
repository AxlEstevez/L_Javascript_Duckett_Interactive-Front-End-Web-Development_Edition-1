//

var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById("cost");
el.textContent = "$" + total;

// textContent does not work in IE8
// innerHTML possible alternative