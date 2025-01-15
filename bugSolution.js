function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle only null values
  } else if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN; //Handle non-number inputs
  }
  return a + b; // Usual addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(0,5)); // Output: 5
console.log(foo(5,0)); // Output: 5
console.log(foo("a",5)); // Output: NaN