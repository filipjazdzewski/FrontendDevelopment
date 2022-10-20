const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
];
const result = myUsers.reduce((acc, animal) => {
    const { name, likes } = animal
    acc.push({[name]: likes, age: name.length * 10});
    return acc;
}, [])

console.log(result);
