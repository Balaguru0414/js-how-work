// 'use strict';

/*const calcAge = function(birthyear) {
	const age = 2022 - birthyear;
	// console.log(firstName);
	// console.log(age);
	

	function printAge() {
		let output = `${firstName}, your are ${age} years old and born in ${birthyear}. `;
		console.log(output);

		if (birthyear >= 2000 && birthyear <= 2010) {
			var kid = true;

			// create a new variable with same name as outer scope variable
			const firstName = 'guru'  // child

			// Resassigning outer scope variable
			output = 'Output Changed !!!';

			const str = `Oh ,you are a 2'k kid, ${firstName}.`;
			console.log(str);
			// console.log(kid);

			function add(a,b) {
				return a+b;
			}						

		} // if block

		// console.log(add(5,3)); - disable Strict mode it's working -		
		console.log(kid); // - var -- this variable work only outside of the -(if block)
		console.log(output);  // output varialbe only reasign so therefore it's work
	} // print age
	

	printAge();
	return age;

} // calcage

const firstName = 'Bala';  // parent
calcAge(2000);

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// console.log(me);		 console.log - undefinded
// console.log(jop);     not Working - error    - TDZ
// console.log(year);    not working - error    - TDZ
//      ||
var me = 'Balaguru';
let jop = 'Web developer';
const year = 2000;

// console.log(addDecl(3,5));
// console.log(addExpr(3,5));
// console.log(addArrow(3,5));

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// functions

function addDecl(a,b) {    			 // work 
	return a+b;
}

const addExpr = function (a,b) {  	 // not work - error(Cannot access 'addExpr' before initialization)    -TDZ
	return a+b;
}

var addArrow = (a,b) => a+b;		 // not work - error(addArrow is not a function)    -TDZ

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// Examples

if (!numProducts) deleteShoppingCart();  //  work agum -- const or let use panna error ( Unexpected token 'function )
																	//  var use panna ( Unexpected identifier 'token' )                                        
var numProducts = 10;

 function deleteShoppingCart() {
	console.log('All Products deleted !!')
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var x = 1;
var b = 2;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(b === window.b);
console.log(y === window.y);
console.log(z === window.z);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// ----- this key words -----

console.log(this);						// work

const calcAge = function (birthyear) {
	console.log(2022 - birthyear);
	console.log(this);					// not work
}

calcAge(2000);

const calcAgeArrow = birthyear => {    // function in global scope 
	console.log(2022 - birthyear);
	console.log(this);					// work in arrow functions
}

calcAgeArrow(1997);

// --------------------------------------------------------------------------------

const bala = {
	year : 2000,
	calcAge:function () {
		console.log(this);				// it's work (bala is the owner) in console
		console.log(2022 - this.year);  // this.year = bala.year ( 2000 )  
	},
}
bala.calcAge();

// --------------------------------------------------------------------------------

const surya = {
	year:1997,
}

surya.calcAge = bala.calcAge;  // set key and value ( bala to surya )

surya.calcAge();

const f = bala.calcAge;  // this is take a calcAge functions
f();                     // this is not a regular function ( error )


var firstName = 'Surya'

const bala = {
	firstName : 'Bala',
	year : 2000,
	calcAge:function () {
		console.log(this);				// it's work (bala is the owner) in console
		console.log(2022 - this.year);  // this.year = bala.year ( 2000 )  
		
		// 1. solution set variable to avoid error

		// const self = this; 
		// const you2kkid = function () {
		// 	console.log(self);  // this key word take a - this object
		// 	console.log(self.year >= 2000 && self.year <= 2010);
		
		// };
		
		// 2. solution crate a arrow function

		const you2kkid =  () => {			
			console.log(this);  // this key word take a glbal varable
			console.log(this.year >= 2000 && this.year <= 2010);
		};
		you2kkid();
	},
	greet: () => {
	console.log(this);
	console.log(`Hey ${this.firstName}`); // arrow function cannot defined firstName - its only take a global Variable
	}
};
// bala.greet();
bala.calcAge();

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//  --- Argument - key word ---

const addExpr = function (a,b) {  	
	console.log(arguments);
	return a+b;
}
console.log(addExpr(2,3));

var addArrow = (a,b) => {
	// console.log(arguments);
	return a+b;
}
console.log(addArrow(2,4));

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// primitive types -----------

let age = 22;
let oldAge = age;
age = 23;

console.log(`Age is ${age}`);
console.log(`oldAge is ${oldAge}`);

// Reference type -------------

const me = {						// STORE IN HEAP
	name:'bala',
	age:22,
}

const friend = me;
friend.age = 25;

console.log(' me: ',me); 			// value display
console.log(' friend: ',friend);	// typeof object only display 


// primitive type -----------

let lastName = 'Guru';
let oldLastName = lastName;
lastName = 'Raja';

console.log(lastName,oldLastName);

// reference type -------------

const jessica = {
	firstName : 'jessica',
	lastName : 'Williams',
	age : 27,
}

const marriedJessica =jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage:',jessica);
console.log('After marriage:',jessica);

// copying object 

const jessica = {
	firstName : 'jessica',
	lastName : 'Williams',
	age : 27,
	family: ['Alice','Bob'],
}

const jessicaCopy = Object.assign( {} , jessica );  // copy jessica in different address
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Abi');						// also chaged the jessica object 
jessicaCopy.family.push('Mari');					// also chaged the jessica object 

console.log('Before Marriage:',jessica);            
console.log('After marriage:',jessicaCopy);	   		

*/


















