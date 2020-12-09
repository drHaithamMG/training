/*Task Content*/
/*
[7, 2, 2, 6, 10, 10, 10]

[7, 4, 6, 30]
*/
/*My answer url: https://jsfiddle.net/haitham_mughrabi/7vej3ghz/1/ */
// let key //7 start from it index stop when it find no match
function sumMatches(arr) {
    let key, sum = 0;
    let sumArray = [];
    for (let item = 0; item < arr.length; item++) {
        key = arr[item];
        for (let looper = item; looper < arr.length; looper++) {
            if (key == arr[looper]) {
                sum = sum + arr[looper];
                item = looper;

            }
            else {
                break;
            }
        }
        sumArray.push(sum);
        sum = 0;
    }
    return sumArray;
}
console.log(sumMatches([7, 2, 2, 6, 10, 10, 10]));