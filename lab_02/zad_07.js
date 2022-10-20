import axios from "axios";

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        if (res.status == 200) return res;
        else console.log('Błąd');
    })
    .then(res => {
        const { title, body } = res;
        console.log(title);
        console.log(body);
    })
    .catch(err => {
        console.log(err);
    });
