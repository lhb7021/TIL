const makeClosure = () => {
  let name = 'Coffee';
  return function (){
    console.log(name);
  }
};
let closure = makeClosure();
closure();