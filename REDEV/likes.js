function likes(arr) {
    switch (arr.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${arr[0]} likes this`;
        case 2:
            return `${arr[0]} and ${arr[1]} likes this`
        case 3:
            return `${arr[0]}, ${arr[1]} and ${arr[2]} likes this`
        default:
            return `${arr[0]}, ${arr[1]} and ${arr.length - 2} likes this`
    }
}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))

/*
likes([]) --> 'no one likes this'
likes(['Peter']) --> 'Peter likes this'
likes(['Jacob', 'Alex']) --> 'Jacob and Alex like this'
likes(['Max', 'John', 'Mark']) --> 'Max, John and Mark like this')
likes(['Alex', 'Jacob', 'Mark', 'Max']) --> 'Alex, Jacob and 2 others like this'*/
