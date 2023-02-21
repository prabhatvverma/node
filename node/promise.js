// let promise = new Promise((resolve, reject) => {
//     console.log("hello");
//     resolve(35);
// })

// console.log("my name is khan");
// setTimeout(() => {
//     console.log("printing after 5 sec...");
// }, 5000);
// console.log("and i'm not a terrorist");
// console.log(promise);



function register(callback) {
    setTimeout(() => {
        console.log("Registre End");
        callback();
    }, 1000)
}
function sendEmail(callback) {
    setTimeout(() => {
        console.log("Email End");
        callback();
    }, 4000)
}
function login(callback) {
    setTimeout(() => {
        console.log("Login End");
        callback();
    }, 2000)
}
function getUserData(callback) {
    setTimeout(() => {
        console.log("Got User Data");
        callback();
    }, 5000)
}
function displayUserData() {
    setTimeout(() => {
        console.log("User Data Displayed");
        
    }, 7000)
}

register(() => {
    sendEmail(() => {
        login(() => {
            getUserData(() => {
                displayUserData();
            });
        });
    });
});

console.log("other application work !");
