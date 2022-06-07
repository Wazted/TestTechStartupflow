// Impement fizzbuzz logic
function fizzbuzz(number) {
  if (number % 15 === 0) {
    return "fizzbuzz";
  } else if ( number % 5 === 0) {
    return "buzz";
  } else if ( number % 3 === 0) {
    return "fizz";
  }
  return number;
}

// Implement the wrapper
function main(iterations) {
   for(let i=1; i<=iterations;i++) {
     console.log(fizzbuzz(i));
   }
}

const itNumber = parseInt(process.argv.pop());

if (process.argv.length === 2 && itNumber > 0) {
  main(itNumber);
} else {
  console.error("Please enter valid number (positive) 'npm run fizzbuzz n'")
  process.exit(-1);
}