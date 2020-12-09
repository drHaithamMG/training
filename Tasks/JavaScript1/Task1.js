/*Question url:  https://jsfiddle.net/9hykxc54/1/ */
/*My answer url: https://jsfiddle.net/haitham_mughrabi/kx8t1d40/4/ */
function getLikes(likes) {
    switch (likes.length) {
        case 0:
            return("No one likes this");
        case 1:
            return(`Must be ${likes[0]} likes this`);
        case 2:
            return(`Must be ${likes[0]} and ${likes[1]} like this`);
        case 3:
            return(`Must be ${likes[0]}, ${likes[1]} and ${likes[2]} like this`);
        default:
            return(`Must be ${likes[0]}, ${likes[1]} and ${likes.length-2} others like this`);
    }
}
console.log(getLikes([]));
console.log(getLikes(['Peter']));
console.log(getLikes(['Jacob', 'Alex']));
console.log(getLikes(['Max', 'John', 'Mark']));
console.log(getLikes(['Alex', 'Jacob', 'Mark', 'Max']));
