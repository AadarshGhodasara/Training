import { Add } from '@material-ui/icons';
import * as React from 'react';

    let message: string = 'hello typescript'
    console.log('\n',message);
    
    let array:number[] = []
    array.push(25);
    array.push(33);
    console.log('\narray->',array);
    
    interface PersonDetails {
        name : string,
        age : number,
        city : string,
        state : string
    }
    let customer:PersonDetails = {
        name :'Aadarsh',
        age:20,
        city:'morbi',
        state:'Gujarat'
    }
    console.log('\ncustomer details ->',customer);

    interface CarDetails extends PersonDetails {
        carName:string,
        price:number,
    }

    let carOwnerDetails : CarDetails = {
        name:'aadarsh',
        age:20,
        carName:'XUV500',
        price:1500000,
        city:'morbi',
        state:'Gujarat'
    }
    console.log('\n Car Owner Details Using Interface -> \n',carOwnerDetails);

    class CarOwnerDetails{
        
        // define varibale of class 
        name : string;
        age:number;
        carName:string;
        price:number;
        city:string;
        state:string;

        // define constructor of class
        constructor(name:string,age:number,carName:string,price:number,city:string,state:string){
            this.name = name;
            this.age = age;
            this.carName = carName;
            this.price = price;
            this.city = city;
            this.state = state;
        }

        // display data
        show(){
            console.log(
                '\n Owner Name -> ',this.name,
                '\n Owner age -> ,',this.age,
                '\n Car Name -> ,',this.carName,
                '\n Car Price -> ,',this.price,
                '\n City -> ,',this.city,
                '\n state -> ,',this.state,
            )
        }
    }

    let newCustomer = new CarOwnerDetails('Aadarsh',20,'XUV500',1500000,'Morbi','Gujarat');
    console.log('\n\nCar Owner Details Using class Component -> \n');
    newCustomer.show();


// type Alias //

let stringORnumber : string | number = 'Aadarsh';
console.log('\nType Alias --> \n');
console.log('value of stringORnumber variable ->',stringORnumber);
stringORnumber = 10;
console.log('value of stringORnumber variable ->',stringORnumber);


interface phoneNumber {
    number ?:number | undefined
}

let varA : phoneNumber = {};
// codition narrow type
// In if condition varA can be number Or Undefined...
// put your cursor upper the variable in if condition so type can be Number | undefined 
if(varA.number){
    // But in the blog varA only Number... 
    // put your cursor upper the variable so type only Number
    varA.number
}

interface phoneDict  {
    [numberName : string] :
        | undefined 
        | {
            areaCode: number,
            phoneNumber : number,
        }; 
}

const person1 : phoneDict = {
    home:{areaCode:91,phoneNumber:1234567890},
    Office:{areaCode:1,phoneNumber:4567891230},
    iphone:{areaCode:23,phoneNumber:7891234560},
}

console.log('\nInterface store data dictionary --> \n',person1);
console.log('\n\nhome phone Number from dictionary --> \n',person1.home);
console.log('\n\niphone phone Number from dictionary --> \n',person1.iphone);


// PARAMETER PROPERTIES IN class

class contact {
    constructor( public name : string , public email : string = 'No Email' ){
    }
    show(){
        console.log('\n\nName : ',this.name,", Email : ",this.email);
    }
}
const person2 = new contact('aadarsh','aadarsh@gmail.com');
person2.show();
const person3 = new contact('dhrumil');
person3.show();

// interface implement in class

interface contactDetails {
    name : string,
    email : string,
    number : number  
}

class PersonContact implements contactDetails {

    constructor( public name : string , public email : string = 'No Email', public number : number ){
    }

    show(){
        console.log(
            "\nName :",this.name,
            ', Email :',this.email,
            ", Phone no. :",this.number
        );
    }
}

const person4 = new PersonContact('aadarsh','aadarsh@gmail.com',1234567890);
console.log('\n\n--- interface implement in class ---\n');
person4.show();
const person5 = new PersonContact('dhrumil',undefined,7893214560);
person5.show();

// export the class
export class Point {
    constructor( private x : number , private y : number ){
    }

    drawPoint(){
        console.log('\n\nX point :',this.x," Y point :",this.y);
    }
}

let obj = new Point(2,3);
obj.drawPoint();



function add(a:number , b:number):number {
    return a+b;
}

console.log('\n\nadd 2 and 3 -> ',add(2,3));

// type param determines the type of x

interface WrappedValue<X>{
    value : X;
}

let val1 : WrappedValue<string> = { value : 'Aadarsh' }; 
console.log('\n\ngeneric parameter --> ',val1.value);
let val2 : WrappedValue<string[]> = { value : ['Aadarsh','dhrumil','Jay'] }; 
console.log('\ngeneric parameter --> ',val2.value);
let val3 : WrappedValue<number[]> = { value : [33,29,25]}; 
console.log('\ngeneric parameter --> ',val3.value);


// for array.prototype.filter

interface FilterFunction<T = any>{
    ( val : T ) : boolean;
}

let val4 : FilterFunction<string> = val => typeof val === 'string';


console.log('\n\n Array Prototype Filter --> ',val4('Aadarsh'));  // give return true because there enter value is string;
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

let myAny: any = 32;
let myUnknown: unknown = "hello , unknown";

// myAny.foo.bar.baz; // there is no type checking.
// myUnknown.foo; // we can not used unknown directly.

if(typeof myUnknown === "string"){
    console.log('\n\n built in type guards -->',myUnknown.split(','));  
    /*  here we can access unknown because we done narrow type,
        upper if confidition there myUnknown type is unknown 
        and in a block myUnknown type is string so that we can access. */
}

// rest parameter 

function sum(...num:number[]) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
            total = total + num[i];
    }
    return total;
}

console.log('\n\nrest parameter -->\n');
console.log('sum of 2,3,4 and 6 -->',sum(2,3,4,6));
console.log('\nsum of 1,2,3,4,5,6,7,8,9 and 10 -->',sum(1,2,3,4,5,6,7,8,9,10));

// union type and function parameter

function disp(name:string | string[]) {
    if(typeof name === 'string'){
        console.log('\n\n name --> ',name);
    }else{
        console.log('\n\n name --> ');
        for (let i = 0; i < name.length; i++) {
             console.log(" ",name[i])   
        }
    }
}

disp('Aadarsh');
disp(['Aadarsh','Dhrumil','Jay','Vishvesh']);

// union type and array

let arr: number[]|string[];

arr = [10,20,30,40,50]
console.log('\n\narray in nuber type --> ',arr);
arr = ['Aadarsh','Dhrumil','Jay','Vishvesh'];
console.log('\nSame upper array in string type --> ',arr);

// destructuring tuple

let email = ['Aadarsh@gmail.com','Dhrumil@gmail.com'];
let [aadarshEmail , dhrumilEmail] = email;
console.log('\n\n Aadarsh Email Address -> ',aadarshEmail);
console.log('\n Dhrumil Email Address -> ',dhrumilEmail);

// Bottom types

// let a : never = 5; // bottom types can not hold value.
 

let x = 'abc' as string | number ;
if( typeof x === 'string' ){   // hover on x var so you can see type is string | number.
    console.log('\n\n X --> ',x); 
}else if (typeof x === 'number'){ // hover on x var so you can see type is only number.
    console.log('\n\n X --> ',x);
}else{
    console.log('\n\n X --> ',x); // hover on x var so you can see type is never because javascript says you declare 2 types for 
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
    hello.prototype.world = function() {
        console.log('\n\n --- Hello world. ---');
    };
    return hello; 
}());

var obj4 = new display();
obj4.world()