'use strict';

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

*/




