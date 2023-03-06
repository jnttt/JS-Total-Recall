/** A. Q + A
 * 1.How do we assign a value to a variable?
 * let variable = 10
 * 2.How do we change the value of a variable?
 * same as 1 using the assign operator.
 * 3.How do we assign an existing variable to a new variable?
 * The =. ex. let varB = varA
 * 4. Remind me, what are declare, assign, and define?
 * Declare is to create a data object and name it. Assign is giving it a value. Define is to declare and assign.
 * 5. What is pseudocoding and why should you do it?
 * simplified description of steps in a program intended for people to read. You should use to figure out the logic behind a program.
 * 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
 * 80 - 20
 */

//B. Strings
let firstVariable;
firstVariable = "Hello World";
firstVariable = 7;
let secondVariable = firstVariable; 
secondVariable = "hi";
//6.value of firstVariable is some number set from step 3.(in this case 7)
const yourName = "Jennifer"
let greeting = "Hello, my name is " + yourName;
console.log(greeting);

//C. Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false || false || false || false || false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  //D. The Farm
  animal = "cow";
if (animal === "cow") {
    console.log("mooooo");
}else{
    console.log("Hey! You're not a cow.");
}
//E.Driver's Ed
let age = 16
if(age>=16){
    console.log("Here are the keys!");
}else{
    console.log("Sorry, you're too young.");
}