const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Udało się!');
    }, 5000);
});

promise.then((output) => console.log(output));
