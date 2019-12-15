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