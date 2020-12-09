/*Question url: https://jsfiddle.net/gyfL9c7o/ */
/*My answer url: https://jsfiddle.net/haitham_mughrabi/2dbprz4w/3/ */
function inArray(array1,array2){
    array2=array2.toString();
    const result =[];
    array1.forEach(element => {
        if(array2.includes(element))
        result.push(element);
    });
  return result.sort();
}
const array1 = ['arp', 'live', 'strong'];
const array2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
console.log(inArray(array1,array2));
const array3 = ["tarp", "mice", "bull"];
const array4 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(array3,array4));
