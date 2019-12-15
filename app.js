const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // change code below this line
  
  const { today, tomorrow } = HIGH_TEMPERATURES;
  
  // change code above this line
  
  console.log(yesterday) // should be not defined
  console.log(today); // should be 77
  console.log(tomorrow); // should be 80
  

//assign variables from objects
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // change code below this line
    
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES; 
  
  // change code above this line
  
  console.log(yesterday) // should be not defined
  console.log(highToday); // should be 77
  console.log(highTomorrow); // should be 80


//assign variables from Nested Objects
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // change code below this line
    
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
  
  // change code above this line
  
  console.log(lowToday); // should be 64
  console.log(highToday); // should be 77


//assign variables from arrays
  let a = 8, b = 6;
// change code below this line

[a, b] = [b, a];
// change code above this line
console.log(a); // should be 6
console.log(b); // should be 8



//Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = list; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

