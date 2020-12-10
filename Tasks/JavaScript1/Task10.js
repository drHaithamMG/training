/*Question url : https://jsfiddle.net/kLgenscp/1/ */
/*https://jsfiddle.net/haitham_mughrabi/jrqg4s8v/1/ */
console.log(expandedForm(42));
console.log(expandedForm(70304));
console.log(expandedForm(12));

function expandedForm(number) {
    strNumber = number.toString().split('').reverse();
    for (let index = 0; index < strNumber.length; index++) {
        if (index > 0) {
            strNumber[index] = strNumber[index] * Math.pow(10, index);
        }
    }
    strNumber = strNumber.reverse();
    return sum(strNumber)
}
function sum(number) {
    let answer = '';

    for (let i = 0; i < number.length; i++) {
        if (number[i] == 0) continue;
        answer += number[i];
        if (i < number.length - 1) {
            answer += ' + ';
        }
    }
    return answer
}
