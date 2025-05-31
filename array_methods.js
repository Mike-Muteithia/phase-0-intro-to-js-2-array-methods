//>Add elements to an Array
//>>.push() and .shift() <<<destructive JS methods
const superheroes = ["Catwoman", "Storm", "Jessica Jones"];
superheroes.push("Wonder Woman");
// => 4
superheroes;
// => ["Catwoman", "Storm", "Jessica Jones", "Wonder Woman"]

const cities = ["New York", "San Francisco"];
cities.unshift("Boston", "Chicago");
// => 4
cities;
// => ["Boston", "Chicago", "New York", "San Francisco"]

/* const eastAfrica = ["Kenya", "Uganda", "Tanzania"];

console.log(eastAfrica);

eastAfrica.push("Ethopia");
console.log(eastAfrica)

eastAfrica.unshift("Rwanda");
console.log(eastAfrica); */

//>>Spread Operator <<<<nondestructive JS method
/* const coolCities = ["New York", "San Francisco"];

const copyOfCoolCities = [...coolCities];

copyOfCoolCities;
//=> ["New York", "San Francisco"] */

/* const coolCities = ["New York", "San Francisco"];
const allCities = ["Los Angeles", ...coolCities];

coolCities;
// => ["New York", "San Francisco"]
allCities;
// => ["Los Angeles", "New York", "San Francisco"] */

/* const coolCats = ["Hobbes", "Felix", "Tom"];
const allCats = [...coolCats, "Garfield"];

coolCats;
// => ["Hobbes", "Felix", "Tom"]
allCats;
// => ["Hobbes", "Felix", "Tom", "Garfield"] */


//>Remove elements from an Array
//>>.pop() and .shift() <<<<destructive JS methods; opposites to .push() and .unshift()
/* const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

days.pop();
// => "Sun"
days;
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] */

/* const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

days.shift();
// => "Mon"
days;
// => [Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] */

//>>.slice() <<<<nondestructive JS method
//>>>With No Arguments
/* const primes = [2, 3, 5, 7];
const copyOfPrimes = primes.slice();

primes;
// => [2, 3, 5, 7]
copyOfPrimes;
// => [2, 3, 5, 7] */

/* const primes = [2, 3, 5, 7];
const copyOfPrimesUsingSlice = primes.slice();
const copyOfPrimesUsingSpreadOperator = [...primes];
primes.push(11);
// => 5

primes;
// => [2, 3, 5, 7, 11]
copyOfPrimesUsingSlice;
// => [2, 3, 5, 7]
copyOfPrimesUsingSpreadOperator;
// => [2, 3, 5, 7] */

//>>>With Arguments

/* const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

days.slice(2, 5);
// => ["Wed", "Thu", "Fri"]
days.slice(5);
// => ["Sat", "Sun"]
days.slice(1);
// => ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
days.slice(0, days.length - 1);
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
days.slice(-1);
// => ["Sun"]
days.slice(-3);
// => ["Fri", "Sat", "Sun"]
days.slice(0, -1);
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] */

//>>.splice() <<<destructive JS method
//>>>With a Single Argument
/* array.splice(start); */

/* const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

days.splice(2);
// => ["Wed", "Thu", "Fri", "Sat", "Sun"]
days;
// => ["Mon", "Tue"] */

/* const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

days.splice(-2);
// => ["Sat", "Sun"]
days;
// => ["Mon", "Tue", "Wed", "Thu", "Fri"] */

//>>>With Two Arguments
/* array.splice(start, deleteCount); */

/* const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

days.splice(2, 3);
// => ["Wed", "Thu", "Fri"]
days;
// => ["Mon", "Tue", "Sat", "Sun"] */


//>Replace elements in an Array
//>>.splice() with 3+ arguements
/* array.splice(start, deleteCount, item1, item2, ...) */

/* const cards = ["Ace of Spades", "Jack of Clubs","Nine of Clubs",
"Nine of Diamonds", "Three of Hearts",];

cards.splice(2, 1, "Ace of Clubs");
// => ["Nine of Clubs"]
cards;
// => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs",
//  "Nine of Diamonds", "Three of Hearts"] */

/* const menu = ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips",
  "French Fries", "Onion Rings",];

menu.splice(1, 2, "Veggie Burger", "House Salad", "Teriyaki Tofu");
// => ["Cheeseburger", "Fish and Chips"]
menu;
// => ["Jalapeno Poppers", "Veggie Burger", "House Salad",
//  "Teriyaki Tofu", "French Fries", "Onion Rings"] */

/* const books = ["Beloved", "Giovanni’s Room", "The Color Purple",
     "The Grass Dancer"];

books.splice(2, 0,  "Kindred", "Love Medicine");
// => []
books;
// => ['Beloved', 'Giovanni’s Room', 'Kindred', 'Love Medicine',
//  'The Color Purple', 'The Grass Dancer'] */

//>>Using Bracket Notation to Replace Elements <<<<destructive
/* const cards = ["Ace of Spades", "Jack of Clubs", "Nine of Clubs",
  "Nine of Diamonds", "Three of Hearts",
];

cards[2] = "Ace of Clubs";
// => "Ace of Clubs"
cards;
// => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs",
//  "Nine of Diamonds", "Three of Hearts"] */

//>>Slicing and Spreading <<<<nondestructive
/* const menu = ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips",
  "French Fries", "Onion Rings",];

const newMenu = [
  ...menu.slice(0, 1),
  "Veggie Burger",
  "House Salad",
  "Teriyaki Tofu",
  ...menu.slice(3),
];

menu;
// => ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips",
//  "French Fries", "Onion Rings"]
newMenu;
// => ["Jalapeno Poppers", "Veggie Burger", "House Salad",
//  "Teriyaki Tofu", "French Fries", "Onion Rings"] */
