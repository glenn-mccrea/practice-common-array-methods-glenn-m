/* Instructions
You are working as a developer for a local café that needs a system to track
customer orders. The café serves drinks and pastries, and orders are stored in a
2D array, where each row represents a category (drinks or pastries), and each
column represents an order within that category.
Your task is to use the .length property to track the number of items in the
café’s order system dynamically.
Tasks
Task 1: Create the Order System
    Create a multi-dimensional array called orders with two rows:
    ● The first row stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
    ● The second row stores three pastry orders (e.g., “Croissant”, “Muffin”,
    “Bagel”).
Task 2: Log the number of drinks and number of pastries by using .length on each
    row.
Task 3: Access Orders Using Bracket Notation
    Use bracket notation to log a specific drink and a specific pastry using
    hardcoded numbers. For example, you might want to log the first drink and last
    pastry. Do this for three combinations.
Task 4: Access Orders Dynamically with Variables
Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
    dynamically adjusts to the number of items using .length.
Task 6: Add a New Order & Track Length
    Suppose a new order has been placed: a customer ordered a flat white. Add “flat
    white” to the drinks category dynamically. Log the updated number of drinks after
    the addition.
    Declare two variables and use them with bracket notation to log the selected order
    dynamically. */

//task 1
let orders = [
  ["Latte", "Tea", "Espresso"],
  ["Scone", "Muffin", "Bagel"],
];

//task 2
console.log("Task 2:");
console.log(orders[0].length, orders[1].length);

//task 3
console.log("Task 3:");
console.log(orders[0][0], orders[1][2]);
console.log(orders[0][1], orders[1][1]);
console.log(orders[0][2], orders[1][0]);

//task4
let foods = 1;
let drinks = 0;

console.log(`Task 4: ${orders[foods][1]}, ${orders[drinks][1]}`);

//task 5
let itemsFoods = 0;
let itemsDrinks = 0;

for (itemsDrinks; itemsDrinks <= orders[drinks].length - 1; itemsDrinks++) {
  console.log(`Task 5: ${orders[drinks][itemsDrinks]}`);
}

//task 6
orders[0].push("Flat White");

console.log(
  `Task 6: Drinks Menu: ${orders[drinks]} // Number of drinks: ${orders[0].length}`
);

let flatWhite = 3;
let scone = 0;

console.log(
  `Order: "${orders[drinks][flatWhite]}" with a "${orders[foods][scone]}"`
);
