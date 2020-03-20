console.log("message")


// === Classes ===

class Shape {
  constructor(height, width){}
  height: number;
  width: number;
}

class Rectangle extends Shape{
  constructor(height, width) {
    super(height, width);
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const rect = new Rectangle(3,4);

console.log(rect.area);

let map = new Map();
map.set(new Date(), function today() {
});
map.set(() => 'key', {pony: 'foo'});
map.set(Symbol('items'), [1, 2]);

for (let [key, value] of map) {
  console.log(key, '-->', value);
}

console.log(...map, ' size: ', map.size);

map.forEach((value, key) => console.log(key, '->', value));


let foo = {bar: 'pony', baz: 3};
let {bar, baz} = foo;
console.log(bar);
// <- 'pony'

// data.products.forEach( (element) => {
//   element.product_desc = element.product_desc.substring(0,10);
// });


let list = [4, 5, 6];

for (let i in list) { // any object
  console.log(i); // "0", "1", "2",
}

for (let i of list) { // iterables
  console.log(i); // "4", "5", "6"
}

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

console.log("green " + c)

