// <!-- You will be given a number and you will need to return it as a string. 
// For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4' -->

function expandedForm(number){
    strNumber=number.toString().split('').reverse();
    for(let index=0;index<strNumber.length;index++){
        strNumber[index]=strNumber[index]*1e(index+1);
        console.log(strNumber[index]);
    }
}