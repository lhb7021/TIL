var someValue = 5;
someValue = 'hello';
var price = 4000;
price = 'free';
var itemPrice;
var setItemPrice = function (price) {
    if (typeof price === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(5000);
