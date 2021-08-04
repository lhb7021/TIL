let someValue: any = 5;
someValue = 'hello';

type NumOrStr = number | string;

let price: NumOrStr = 4000;
price = 'free';

let itemPrice: number;

const setItemPrice = (price: NumOrStr)
: void => {
  if(typeof price === 'string'){
    itemPrice = 0;
  }else{
    itemPrice = price;
  }
}

setItemPrice(5000);