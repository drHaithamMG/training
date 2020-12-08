/*Question url :  https://jsfiddle.net/9hykxc54/1/ */
function getLikes(likes) {
    switch (likes.length) {
        case 0:
            console.log("No one likes this");
            break;
        case 1:
            console.log(`Must be ${likes[0]} likes this`);
            break;
        case 2:
            console.log(`Must be ${likes[0]} and ${likes[1]} like this`);
            break;
        case 3:
            console.log(`Must be ${likes[0]}, ${likes[1]} and ${likes[2]} like this`);
            break;
        default:
            console.log(`Must be ${likes[0]}, ${likes[1]} and ${likes.length-2} others like this`);
    }
}

console.log(getLikes([]));
console.log(getLikes(['Peter']));
console.log(getLikes(['Jacob', 'Alex']));
console.log(getLikes(['Max', 'John', 'Mark']));
console.log(getLikes(['Alex', 'Jacob', 'Mark', 'Max']));