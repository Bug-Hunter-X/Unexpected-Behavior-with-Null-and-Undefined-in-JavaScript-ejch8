function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Return 0 for null values
  }

  console.log(a + b);
}

foo(1, 2); // Output: 3
foo(null, 2); // Output: 0
foo(1, null); // Output: 0
foo(null, null); // Output: 0