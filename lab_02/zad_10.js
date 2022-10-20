const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

function gradeBetween(studentArr) {
    return studentArr.reduce((acc, curr) => {
        if (curr.grade >= 84 && curr.grade <= 95) {
            acc.push(curr);
        }
        return acc;
    }, [])
}

console.log(gradeBetween(students));
