//import * as  moment from 'moment'; //= require("moment");
//import { Moment } from 'moment'
//import moment = require('moment');
//import moment from 'moment';
//import * as moment from 'moment';
console.log("message")
//import * as moment_ from 'moment';
//const moment = moment_;

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
list.unshift(99999)
console.log(JSON.stringify(list))

for (let i in list) { // any object
  console.log(i); // "0", "1", "2",
}

for (let i of list) { // iterables
  console.log(i); // "4", "5", "6"
}

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

console.log("green " + c)

// let m=moment().add(3, 'days')
// console.log(m)


enum QAStatus2 {
  QA_NOT_STARTED = "QA Not Started",
  QA_STARTED = "QA Started",
  QA_COMPLETE = "QA Complete"
}

const keys = Object.keys(QAStatus2);

let ids=[];

keys.map(key => {
  console.log(`color key = ${key}, value = ${QAStatus2[key]}`);
  ids.push( { label: key, value: QAStatus2[key]},)
});
console.log(JSON.stringify(ids))
console.log(QAStatus2['QA_COMPLETE'])

let typedColorString: keyof typeof QAStatus2 = "QA_COMPLETE"; //QA complete
console.log(typeof QAStatus2.QA_COMPLETE)

 interface Test {
   user_id: string // PK
   user_name: string;
 }
type x = keyof Test;

const nameofFactory = <T>() => (name: keyof T) => name;
const nameof = nameofFactory<Test>();

// const nameof = <T>(name: keyof T) => name;
 console.log(nameof("user_id"));
