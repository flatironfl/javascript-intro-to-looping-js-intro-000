function forLoop(arrayInput) {
  // var newArray = arrayInput;
  
  console.log("before: length is " + arrayInput.length);
  for (var i=0; i<25; i++) {
    if (i === 1) {
      arrayInput.push([arrayInput.length + i] = "I am 1 strange loop.";
    } else {
      arrayInput[arrayInput.length + i] = "I am ${i} strange loops."
    }
    console.log("after: length is " + arrayInput.length + " and I is " + i);

  }
  return arrayInput;
}