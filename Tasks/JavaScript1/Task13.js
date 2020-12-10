/*Question url : https://jsfiddle.net/xrmdgLuv/1/ */
/*https://jsfiddle.net/haitham_mughrabi/6fpjwmcg/1/ */
function sortByRank(array) {
    return array.sort((item1, item2) => (item1.rank > item2.rank) ? 1 : (item1.rank===item2.rank) ? (item1.id<item2.id)?1 :1 :-1);
}
data = [{
    id: 1,
    rank: 'good'
}, {
    id: 2,
    rank: 'best',
}, {
    id: 3,
    rank: 'worst',
}, {
    id: 4,
    rank: 'worst',
}, {
    id: 5,
    rank: 'best',
}, {
    id: 6,
    rank: 'good',
}];

console.log(sortByRank(data)); 

/*

*/