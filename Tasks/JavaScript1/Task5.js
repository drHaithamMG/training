/*Question url:  https://jsfiddle.net/m04bLgz6/ */
/*My answer url: https://jsfiddle.net/haitham_mughrabi/fhwj1gok/6/ */
"using strict";
/*solution 1*/
function comp(a, b) {
    let flag;
   a.forEach(element => {
       let temp=b.indexOf(Math.pow(element,2));
       if(temp>-1)flag=true;
       else flag=false;
   });
    return flag;
}
const a = [121, 144, 19, 161, 19, 144, 19];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));

/*solution 2 */
/*
function comp(a, b) {
    let flag;
    for (let outside = 0; outside < a.length; outside++) {
        nNumber = Math.pow(a[outside], 2)
        let inLoopFlag;
        for (let inside = 0; inside < b.length; inside++) {
            if (b[inside] == nNumber) {
                flag = true;
                inLoopFlag = true;
                break;
            }
            else {
                inLoopFlag = false;
            }
        }
        if (inLoopFlag == false) {
            flag = false;
            break;
        }
    };
    return flag;
}
const a = [121, 144, 19, 161, 19, 144, 19];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));
*/

/*if you want to see what item of a matches the power of a in b see the following code*/
/*
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
*/