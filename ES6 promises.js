let my_promise = new_promise((resolve, reject) => {
    let condition = true; // Change this to false to test rejection
    if(condition) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }
});

my_promise
.then(result => {
    console.log(result); // Outputs: Promise resolved successfully!
})
.catch(error => {
    console.error(error); // Outputs: Promise rejected.
});