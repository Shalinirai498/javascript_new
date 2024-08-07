// primitive
//7 types: strings,number,boolean,null,undefined,symbol,Bigint


//Reference types --non primitive
//arrays,objects,function

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
// const id= Symbol('154')
// const anotherid= Symbol('154')
// //console.log(id===anotherid);
// const heros=["shakti","raghav","doga"]//array
// let myobj={
//     name:"shalu",
//     age: 55,
// }//object
// const myFunction=function(){
//     console.log("hello world");

// }//function
// myFunction()

//Return type of variables in JavaScript
// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object

//++++++++++++++++++++++++++++++++++++++++++++++
// stack(Primitive),heap(Non Primitive)

let myvalue= "Shalini"
let anothervalue=myvalue
anothervalue="chaiorcode"
console.log(myvalue)
console.log(anothervalue)
// let userone={
//     name:"shalu",
//     age: 55,
// }
// let userTwo=userone
// userTwo.name="shalini_rai"
// console.log(userone.name)
// There are 2 types of datatype
// 1. Primitive datatype:-
//     1.String
//     2. Number
//     3. Boolean (true / false)
//     4. null (iska matlab hai empty or zero nahi hai)
//     5. undefined (aapne variable declare kardiya hai but usmein aap kya value dalenge aapne decide nahi kiya hai)
//     6. Symbol (kisi bhi value ko unique banane ke liye use kiya jata hai)
//     7. BigInt (jo badi values hoti hai oo hum BigInt mein use karte hai)

// 2. Preference datatype (Non Primitive datatype)
//     1. Array ( [ ] )
//     2. Object ( { } )
//     3. Function ( function( ){ } )








