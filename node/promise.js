const { error } = require("console");

function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("register end");
            resolve();
        }, 2000)
    })
}
function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return reject("email sending failled");
            console.log("email end");
        }, 2000)
    })
}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login end");
            resolve();
        })
    }, 2000)
}
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Got User Data");
            resolve();
        }, 4000)
    })
}
function displayUserData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("User Data Displayed");
            resolve();
        }, 4000)
    })
}

// register()
// .then(sendEmail)
// .then(login)
// .then(getUserData)
// .then(displayUserData);

//async await 
async function authentication() {
    try {
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    } catch(err){
        console.log(err);
        throw new error();
    }
}
authentication().then(() => {
    console.log("All Set!");
}).catch((err) => {
    console.log(err);

});

console.log("other application work !");