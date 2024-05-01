const id=144
let email="sr56@gmail.com"
var password="456789"
city="Delhi"
let accountstate;
//id=5 //not allowed
console.log(id);
console.log(email);
console.log(password);
console.log(city);
email="vr56@gmail.com"
password="4589"
city="bengaluru"
/*prefer not to use var 
because of issue in block scope and functional scope.
*/
console.table([id,email,password,city,accountstate]);
/*var can be redefined and redeclared;
let can be redefined but not redeclare;
const neither be redeclared nor redefined
*/