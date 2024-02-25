const promiseOne = new Promise( function (resolve, reject) {
    // DO an async task
    // DB calls, cyptography, network

    setTimeout(function() {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async task resolved");
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({userName: "Sandeep", email: "Sand@gmail.com"})
    }, 1000);
})


promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({userName: "Sandeep", password: "123"})
        } else {
            reject('Error: something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user) {
    console.log(user);
    return user.userName
}).then(function(myName) {
    console.log(myName);
}).catch(function(err) {
    console.log(err);
}).finally(function() {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({userName: "Rohit", password: "123"})
        } else {
            reject('Error: Name went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
   try {
    const response =  await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()


// async function getAllUser() {
//     try {
//         const response = await fetch('https://api.github.com/users/sandeep-coder-app')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error); 
//     }
// }

// getAllUser()

fetch('https://api.github.com/users/sandeep-coder-app')
.then((res)=> {
    return res.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))