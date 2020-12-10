/*Question url : https://jsfiddle.net/5rsk97tb/ */
/*My answer: https://jsfiddle.net/haitham_mughrabi/awgyqpn1/ */
"use strict"
function getAscendingDescending(array) {
    let pointer = 1;
    let flag;
    const result = [];
    if (array[0] > array[1]) {
        flag = '+';
        result.push(array[0])
    }
    else if(array[0] < array[pointer]) {
        flag = '-';
        result.push(array[0])
    }
    for (let current =0; current < array.length - 1; current++) {
        if (array[current] > array[pointer]) {
            if (flag == '-') {
                flag = '+';
                result.push(array[pointer])
            }

        }
        else if (array[current] < array[pointer]) {
            if (flag == '+') {
                flag = '-';
                result.push(array[pointer])
            }
        }
        pointer++;
    }

    return result;
}
const arrayA = [2, 5, 12, 67, 50, 1, 99, 381, 420, 600, 200, 34, 77];
const arrayB = [431, 200, 188, 50, 111, 175, 402, 6];
console.log("This is Array A ", getAscendingDescending(arrayA));
console.log("This is Array B ", getAscendingDescending(arrayB));
