/*Question url:  https://jsfiddle.net/mk8pwfg1/ */
/*My answer url: https://jsfiddle.net/haitham_mughrabi/f9uy4506/2/*/
function makeArrayOfArrays(x){
    const mother=[];
    for(let row =1;row<=x;row++){
        let daughter=[];
        for(let col=1;col<=x;col++){
            daughter.push(col*row);
        }
        mother.push(daughter);
        daughter=[];
    }
    return mother;
}
const x=prompt("Enter a value :");
console.log(makeArrayOfArrays(x));