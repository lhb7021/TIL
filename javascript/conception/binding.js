// call & apply
const obj = {name: 'New York'};
const say = function(city, something){
  console.log(`I love city, ${this.name}. but, I live in ${city}`);
  console.log(something);
};
say('Seoul', 'Hello, Word!');
say.call(obj, 'Seoul', 'Hello, Word!');
say.apply(obj, ['Seoul', 'Hello, Word!']);

let asd = ''.split.call('1,2,3', ',');
let qwe = ''.split.apply('4,5,6', [',']);
console.log(asd);
console.log(qwe);

// bind
const boundSay = say.bind(obj);
boundSay('Seoul', 'Hello, Word!');