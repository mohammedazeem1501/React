import {circle,rectangle,cylinder} from './area.js' // importing the modules for calculating area of different shapes...@@~!
import{outputArray} from './FilteredArray' // imported another js file to perform 9th question
import {stackUsingLL} from './stack.js'
import  {Node,LinkedList} from './linkedList.js'



//  QUESTION 01:  Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, create an array of the numbers greater than `70`.

const numArray = [3, 62, 234, 7, 23, 74, 23, 76, 92]; // decalaration of array.
const result = numArray.filter(numArray => numArray > 70);
console.log("Q1 :" + result);

  /*QUESTION 02:<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>

a. Select all the list items on the page and convert to array.
b. Filter for only the elements that contain the word 'flexbox'
c. Map down to a list of time strings
d. Map to an array of seconds
e. Reduce to get total using .filter and .map
  */

console.log("Q2 : Done on the Ques2.html page that You can find in the './build/Ques2.html' in the build folder");

/* QUESTION 03: Create a markup template using string literal

const song = {
 name: 'Dying to live',
 artist: 'Tupac',
 featuring: 'Biggie Smalls'
};
Result:
"<div class="song">
   <p>
     Dying to live — Tupac
     (Featuring Biggie Smalls)
   </p>
 </div>
“
*/
const song = {
 name: 'Dying to live',
 artist: 'Tupac',
 featuring: 'Biggie Smalls'
};
const literal = `<div class="song">
        <p>
            ${song.name} - ${song.artist}
            (Featuring ${song.featuring})
        </p>
    </div>`;

console.log("Q3 : "+literal); // printing the result of literal template

/* QUESTION 04:  Extract all keys inside address object from user object using destructuring ?

const user = {
firstName: ‘Sahil’,
lastName: ‘Dua’,
Address: {
Line1: ‘address line 1’,
Line2: ‘address line 2’,
State: ‘Delhi’,
Pin: 110085,
Country: ‘India’,
City: ‘New Delhi’,
},
phoneNo: 9999999999
} */
const user = {
firstName: 'Sahil',
lastName: 'Dua',
Address: {
Line1: 'address line 1',
Line2: 'address line 2',
State: 'Delhi',
Pin: 110085,
Country: 'India',
City: 'New Delhi',
},
phoneNo: 9999999999
};
let{Line1,Line2,State,Pin,Country,City}=user.Address;
console.log("Q4 : " + Line1,Line2,State,Pin,Country,City);

// QUESTION 05:  Find the possible combinations of a string and store them in a MAP?
function getAll(string)
{
    var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var char1 = string[i];
    var char2 = string.substring(0, i) + string.substring(i + 1);
    var inner = getAll(char2);
    for (var j = 0; j < inner.length; j++) {
      results.push(char1 + inner[j]);
    }
  }
  return results;
}

console.log('Q 5 : ');
console.log(getAll("abc"));

// QUESTION 06:Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.
 class Car
 {
   constructor(name)
   {
     this.name = name;
   }
   static color()
   {
     console.log(`Q6 : Mercedes is red in color.`);
   }
   seats()
   {
     console.log(`${this.name} is a 2 seater car.`);
   }
}
class Fiat extends Car // inherited the Car class
{
  seats()
  {
    console.log(`${this.name} is a 4 seater car.`); // method in overrided
  }
}
class Embassador extends Fiat // inherited the Fiat class
{
    seats()
    {
      super.seats(); // it invokes the method from the parent class
      console.log(`${this.name} used by Govt. officials.`);

    }

}
let fiat = new Embassador('Embassador');
console.log(Car.color()); // static method ivoked by class name
console.log(fiat.seats()); // method inherited from parent class


// QUESTION 07: Write a program to implement a class having static functions

class Animal {
  static category() {
    return 'Q7 : Category of animal is returned.';
  }
}

console.log(Animal.category());

// QUESTION 08:Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.

console.log("Q8 : Area of circle with radii(4) is : " + circle(4));
console.log(" Area of rectangle with height(4) and breadth(5) is : " + rectangle(4,5));
console.log(" Area of cylinder with radiius(6) and height(10) is : " + cylinder(6,10));


// QUESTION 09: Import a module for filtering unique elements in an array.
// implemented the array filtering using set as asked in Q4(2) in the FilteredArray.js file and imported it in this index.js as askedd in Q9

console.log("Q9 : " + outputArray); // imported as outputArray in the top of this file

//// QUESTION 10: Write a program to flatten a nested array to single level using arrow functions.
let nonFlatenedArray= [[1,[2]],[3,4,[7]],[8,[9,10,11,[3,5,6]]]];
console.log("Q 10 : " + nonFlatenedArray.flat(Infinity)); // used flat() that prints all the sub arrays into a array

// QUESTION 11: Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)
console.log("Q 11 :")

let ll= new LinkedList();
ll.addFirst(67);
ll.addFirst(90);
ll.addLast(89);
ll.print(); // printing the Linked List
console.log("Length of the Linked List " + ll.length()); //getting the length of ll
console.log("First element of the Linked List " + ll.getFirst()); // getting first elemnt of ll
console.log("Last element of the Linked List " + ll.getLast()); // getting last elemnt of the ll



//Question 12 : implement Map and Set.
console.log("Q 12 : Implement Map and Set using Es6");
console.log("Map");

 let string= "azeem faisal ";

 let letters= new Map();

 for(let i=0;i<string.length;i++)
 {
     let letter = string[i];

     if(!letters.has(letter))
     {
         letters.set(letter,1);
     }
     else{
         letters.set(letter, letters.get(letter)+1);
     }
 }

 console.log(letters);

 console.log("Set");

 let array= [70,86,90,56,70,86];
 let newSet= new Set(array);
 newSet.add(89);
 newSet.delete(86);
 console.log(newSet);

 // QUESTION 13:  Implementation of stack (using linked list)
 console.log("Q 13 : ");

let stack = new stackUsingLL();

stack.push(56);
stack.push(78);
stack.pop();
stack.push(80);

console.log("Elememts in stack are ");
console.log( stack.toArray());
console.log("Is the Stack Empty : " + stack.isEmpty());
console.log("size of stack is : " + stack.size());
