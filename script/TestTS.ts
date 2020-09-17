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

enum Color {Red = 1, Green = "Green", Blue = "Blue"}
let c: Color = Color.Green;

Color.Green.valueOf()
console.log("Checking enum equality " + ("Green" == Color.Green.valueOf()))
//console.log("Checking enum equality " + (Color("Green") == Color.Green)

/*let m=moment().add(3, 'days')
console.log(m)*/
const mystring = 'abc/def_ghi_klm.log'
var mystring2 = 'x';

const pos = mystring.indexOf('_')
if (mystring != null || mystring.length > 5) {
  console.log("s" + mystring.substring(pos + 1))
}
if (!mystring2) {
  console.log("Invalid")
}


const wait = time => new Promise((resolve) => setTimeout(resolve, time));
wait(2000).then(() => console.log('Hello! (Waited)')); // 'Hello!'

let  fun = async parm => {
  if (parm > 0) {
    return Promise.resolve("success");

  }else {
    return Promise.reject("failure");
  }
};

fun(3)
  .then(res => console.log("output " + res))
  .catch(error => console.log("ERROR " + error))
  .finally(() =>  console.log("In the end"));

(async () => {
try {
  let res = await fun(3);
  console.log("waited " + res);
} catch(err) {
  console.log("Rejected: " + err);
  } finally {
  console.debug("Finally2")
}

})();


 enum QAAction {
  QA_FETCH_ALL = "QA_FETCH_ALL",
  QA_START = "QA_START",
  FETCH_BATCH_RECORDS = "FETCH_BATCH_RECORDS",
  QA_SAVE = "QA Save",
  QA_SUBMIT = "QA_SUBMIT"
}
console.log(typeof QAAction.QA_SAVE);
console.log(QAAction.QA_SAVE);
console.log(QAAction.QA_SAVE.valueOf());
 var str = 'd,d ';
 console.log(">>" + str.slice(0, -2))

let mystr = 'gmatous@rfdinc.com'
console.log(mystr.substring(0,mystr.indexOf('@')))
