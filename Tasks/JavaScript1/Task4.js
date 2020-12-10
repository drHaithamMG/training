/*Question url:  https://jsfiddle.net/ko9wte4n/3/ */
/*My answer url: https://jsfiddle.net/haitham_mughrabi/q9Ldgfcw/6/*/

/*solution 1*/
function createPhoneNumber(number) {
    number=number.toString().split(',').join('');
    if (number.length == 10) {
    return `(${number.substr(0,3)}) ${number.substr(3,3)}-${number.substr(6)} `;
    }
    else
        return `${number} is not a vaild number`
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(numbers));

/*Soultion 2*/
//  function createPhoneNumber(numbers) {
//     let cleaned = ('' + numbers).replace(/\D/g, '');
//     let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
//     if (match) {
//        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
//     }
//     return null;
//    }
//    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//    console.log(createPhoneNumber(numbers));

/*solution 3*/
// function createPhoneNumber(number) {
//     if (number.length == 10) {
//         number.unshift('(');
//         number.splice(4, 0, ') ');
//         number.splice(8, 0, '-');
//         let phoneNumber = '';
//         number.forEach(element => {
//             phoneNumber += element;
//         });
//         return phoneNumber;

//     }
//     else
//         return `${number} is not a vaild number`
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(createPhoneNumber(numbers));

