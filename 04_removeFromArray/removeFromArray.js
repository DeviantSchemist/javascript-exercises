const removeFromArray = function(myArray, ...thingsToRemove) {

  for (let i = 0; i < thingsToRemove.length; i++) {
    if (myArray.includes(thingsToRemove[i])) {
      myArray.splice(myArray.indexOf(thingsToRemove[i]), 1);
    }
  }
  
  return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
