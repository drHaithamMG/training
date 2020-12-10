/*Question url : https://jsfiddle.net/ygtn9hvm/ */
/*https://jsfiddle.net/haitham_mughrabi/3w6q10p8/1/ */
function decipherThis(str) {
    newStr = str.split(' ');
    let encodeChar = '';
    newStr.forEach((word,wordIndex) => {
        encodeChar = String.fromCharCode(Number.parseInt(word));
        word=word.replace(/1|2|3|4|5|6|7|8|9|0/g,'').split('').reverse();
        word.unshift(encodeChar);
        word=word.join('');
        newStr.splice(wordIndex,1,word);
    });
    return newStr;
};
console.log(decipherThis('72olle 103doo 100ya'));
