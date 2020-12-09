/*Question url:  https://jsfiddle.net/m04bLgz6/ */
/*My answer url: https://jsfiddle.net/haitham_mughrabi/fhwj1gok/1/ */
function comp(a,b){
    const result =new Set();
    a.forEach(number => {
        nNumber=Math.pow(number,2)
        b.forEach((number)=>{
            (number==nNumber)?result.add(number):0;
        })
    });
  return result;
}
const a = [121, 144, 19, 161, 19, 144, 19,2,5,789, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));