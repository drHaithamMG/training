/*Question url:  https://jsfiddle.net/4160amno/ */
/*My answer url: https://jsfiddle.net/haitham_mughrabi/xcse2af0/1/ */
function findHigherOdd(arr){
    const map=new Map();
    let odd;
    arr.forEach(key => {
       let value=map.get(key);
       if(map.has(key)){
        value=value+1;
        map.set(key,value);
        // console.log(key,map.get(key));
       } 
       else{
           map.set(key,1)
        //    console.log(key,map.get(key));
       }
       if (map.get(key)%2!=0)odd=key;
    });
    return odd;
}
console.log(findHigherOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); 
console.log(findHigherOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
console.log(findHigherOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));
console.log(findHigherOdd([10]));
console.log(findHigherOdd([1,1,1,1,1,1,10,1,1,1,1]));
console.log(findHigherOdd([5,4,3,2,1,5,4,3,2,10,10]));

