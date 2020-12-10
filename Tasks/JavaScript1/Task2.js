/*Question url : https://jsfiddle.net/ay38hbs9/*/
/*https://jsfiddle.net/haitham_mughrabi/x14mefs6/4/*/
function sum(array1, array2) {
  /*Defining my variables*/
  const result = [];
  for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
    result.push(checkNan(array1[i]) + checkNan(array2[i]));
  }
  return result;
}
function checkNan(number) {
  if (isNaN(number)) return (Number(Boolean(NaN)));
  else return number;
}
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13, 14, 16];

console.log(sum(array1, array2));
