/*Question url:  https://jsfiddle.net/m3wughz6/ */
/*My answer url: https://jsfiddle.net/haitham_mughrabi/c0svdLhw/4/ */

function sortWord(string) {
    let arr = string.split(' ');
    arr.forEach((word, wordIndex) => {
        let temp;
        for (latter of word) {
            if (isFinite(latter)) {
                temp = Number(latter);
                arr.splice(temp, 0, word);
                arr.splice(wordIndex, 1);
                break;
            }
        }
    });
    return arr;
}
let sentence = "is2 Thi1s T4est 3a";
console.log(sortWord(sentence));