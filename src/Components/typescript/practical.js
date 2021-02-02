"use strict";
exports.__esModule = true;
exports.Point = void 0;
var message = 'hello typescript';
console.log('\n', message);
var array = [];
array.push(25);
array.push(33);
console.log('\narray->', array);
var customer = {
    name: 'Aadarsh',
    age: 20,
    city: 'morbi',
    state: 'Gujarat'
};
console.log('\ncustomer details ->', customer);
var carOwnerDetails = {
    name: 'aadarsh',
    age: 20,
    carName: 'XUV500',
    price: 1500000,
    city: 'morbi',
    state: 'Gujarat'
};
console.log('\n Car Owner Details Using Interface -> \n', carOwnerDetails);
var CarOwnerDetails = /** @class */ (function () {
    // define constructor of class
    function CarOwnerDetails(name, age, carName, price, city, state) {
        this.name = name;
        this.age = age;
        this.carName = carName;
        this.price = price;
        this.city = city;
        this.state = state;
    }
    // display data
    CarOwnerDetails.prototype.show = function () {
        console.log('\n Owner Name -> ', this.name, '\n Owner age -> ,', this.age, '\n Car Name -> ,', this.carName, '\n Car Price -> ,', this.price, '\n City -> ,', this.city, '\n state -> ,', this.state);
    };
    return CarOwnerDetails;
}());
var newCustomer = new CarOwnerDetails('Aadarsh', 20, 'XUV500', 1500000, 'Morbi', 'Gujarat');
console.log('\n\nCar Owner Details Using class Component -> \n');
newCustomer.show();
// type Alias //
var stringORnumber = 'Aadarsh';
console.log('\nType Alias --> \n');
console.log('value of stringORnumber variable ->', stringORnumber);
stringORnumber = 10;
console.log('value of stringORnumber variable ->', stringORnumber);
var varA = {};
// codition narrow type
// In if condition varA can be number Or Undefined...
// put your cursor upper the variable in if condition so type can be Number | undefined 
if (varA.number) {
    // But in the blog varA only Number... 
    // put your cursor upper the variable so type only Number
    varA.number;
}
var person1 = {
    home: { areaCode: 91, phoneNumber: 1234567890 },
    Office: { areaCode: 1, phoneNumber: 4567891230 },
    iphone: { areaCode: 23, phoneNumber: 7891234560 }
};
console.log('\nInterface store data dictionary --> \n', person1);
console.log('\n\nhome phone Number from dictionary --> \n', person1.home);
console.log('\n\niphone phone Number from dictionary --> \n', person1.iphone);
// PARAMETER PROPERTIES IN class
var contact = /** @class */ (function () {
    function contact(name, email) {
        if (email === void 0) { email = 'No Email'; }
        this.name = name;
        this.email = email;
    }
    contact.prototype.show = function () {
        console.log('\n\nName : ', this.name, ", Email : ", this.email);
    };
    return contact;
}());
var person2 = new contact('aadarsh', 'aadarsh@gmail.com');
person2.show();
var person3 = new contact('dhrumil');
person3.show();
var PersonContact = /** @class */ (function () {
    function PersonContact(name, email, number) {
        if (email === void 0) { email = 'No Email'; }
        this.name = name;
        this.email = email;
        this.number = number;
    }
    PersonContact.prototype.show = function () {
        console.log("\nName :", this.name, ', Email :', this.email, ", Phone no. :", this.number);
    };
    return PersonContact;
}());
var person4 = new PersonContact('aadarsh', 'aadarsh@gmail.com', 1234567890);
console.log('\n\n--- interface implement in class ---\n');
person4.show();
var person5 = new PersonContact('dhrumil', undefined, 7893214560);
person5.show();
// export the class
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log('\n\nX point :', this.x, " Y point :", this.y);
    };
    return Point;
}());
exports.Point = Point;
var obj = new Point(2, 3);
obj.drawPoint();
function add(a, b) {
    return a + b;
}
console.log('\n\nadd 2 and 3 -> ', add(2, 3));
var val1 = { value: 'Aadarsh' };
console.log('\n\ngeneric parameter --> ', val1.value);
var val2 = { value: ['Aadarsh', 'dhrumil', 'Jay'] };
console.log('\ngeneric parameter --> ', val2.value);
var val3 = { value: [33, 29, 25] };
console.log('\ngeneric parameter --> ', val3.value);
var val4 = function (val) { return typeof val === 'string'; };
console.log('\n\n Array Prototype Filter --> ', val4('Aadarsh')); // give return true because there enter value is string;
// console.log('\n Array Prototype Filter --> ',val4(6));  // give return false because there enter value is number;
// use case of generics 
// interface Shape{
//     draw():any;
// }
// interface Circle extends Shape {
//     radius : number;
// }x
// function drawShapes(shapes:Shape[]) {
//     shapes.forEach(s => s.draw());
// }
// top types 
var myAny = 32;
var myUnknown = "hello , unknown";
// myAny.foo.bar.baz; // there is no type checking.
// myUnknown.foo; // we can not used unknown directly.
if (typeof myUnknown === "string") {
    console.log('\n\n built in type guards -->', myUnknown.split(','));
    /*  here we can access unknown because we done narrow type,
        upper if confidition there myUnknown type is unknown
        and in a block myUnknown type is string so that we can access. */
}
// rest parameter 
function sum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < num.length; i++) {
        total = total + num[i];
    }
    return total;
}
console.log('\n\nrest parameter -->\n');
console.log('sum of 2,3,4 and 6 -->', sum(2, 3, 4, 6));
console.log('\nsum of 1,2,3,4,5,6,7,8,9 and 10 -->', sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// union type and function parameter
function disp(name) {
    if (typeof name === 'string') {
        console.log('\n\n name --> ', name);
    }
    else {
        console.log('\n\n name --> ');
        for (var i = 0; i < name.length; i++) {
            console.log(" ", name[i]);
        }
    }
}
disp('Aadarsh');
disp(['Aadarsh', 'Dhrumil', 'Jay', 'Vishvesh']);
// union type and array
var arr;
arr = [10, 20, 30, 40, 50];
console.log('\n\narray in nuber type --> ', arr);
arr = ['Aadarsh', 'Dhrumil', 'Jay', 'Vishvesh'];
console.log('\nSame upper array in string type --> ', arr);
// destructuring tuple
var email = ['Aadarsh@gmail.com', 'Dhrumil@gmail.com'];
var aadarshEmail = email[0], dhrumilEmail = email[1];
console.log('\n\n Aadarsh Email Address -> ', aadarshEmail);
console.log('\n Dhrumil Email Address -> ', dhrumilEmail);
// Bottom types
// let a : never = 5; // bottom types can not hold value.
var x = 'abc';
if (typeof x === 'string') { // hover on x var so you can see type is string | number.
    console.log('\n\n X --> ', x);
}
else if (typeof x === 'number') { // hover on x var so you can see type is only number.
    console.log('\n\n X --> ', x);
}
else {
    console.log('\n\n X --> ', x); // hover on x var so you can see type is never because javascript says you declare 2 types for 
    // perticuler var not both types then that var type is never 😂😂.
}
// declaration merging
// function foo() {}
// interface bar {}
// namespace baz {
//     export const biz = 'hello';
// }
// const z = foo; // foo is in the value position (RHS).
// const y: bar = {}; // bar is in the type position (LHS).
// baz;
// export { foo , bar , baz };
//  interface are purely types
// interface Address {
//     street : string;
// }
// const y = Address;
// class are both types and value...
// class Address {
//     streetName : string;
// }
// const contactAdress = Address;
// const contactInstance = new Address();
// type script and object orientation
var display = (function () {
    function hello() {
    }
    hello.prototype.world = function () {
        console.log('\n\n --- Hello world. ---');
    };
    return hello;
}());
var obj4 = new display();
obj4.world();
