var chocolateBars=["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array1,item){
  return array1.unshift(item);
  
}
function destructivelyAddElementToBeginningOfArray(array1,item){
  return [item,...array1];
}
function addElementToEndOfArray(array1,item){
  array1=array1.push(item);
}
function destructiveAddElementToBeginningOfArray(array1,item){
  return [...array1,item];
}
function accessElementInArray(array1,indx){
  return array1[indx];
}
function destructivelyRemoveElementFromBeginningOfArray(array1){
  array1.shift();
  return array1;
}

function removeElementFromBeginningOfArray(array1){
  var array2=array1.splice(0);
  return array2;
}  
function destructivelyRemoveElementFromEndOfArray(array1){
  array1.pop();
  return array1;
}
function removeElementFromEndOfArray(array1){
  var array2=array1.splice(length-1);
  return array2;
}