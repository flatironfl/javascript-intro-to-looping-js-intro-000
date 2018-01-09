function forLoop(arrayInput) {

  for (var i=0; i<25; i++) {
    if (i === 1) {
      arrayInput.push("I am 1 strange loop.");
    } else {
      arrayInput.push("I am ${i} strange loops.");
    }
  }
  return arrayInput;
}

function whileLoop(num) {
  while (num) {
    console.log(num--);
  }
  return "done";
}

function doWhileLoop(arrayInput) {
  do {
    if (arrayInput.length) { // array has items
      array.Input.pop(); // specs didn't say remove from front or back; did back
    }
  } while (Math.random() >= 0.5);
}