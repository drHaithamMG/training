var array1 = [1, 2, 3, 4, 2, 5, 6];
var array2 = [5, 6, 7, 8];

var sum = array1.map(function(num, idx) {
    return num + array2[idx];
});
console.log(sum);