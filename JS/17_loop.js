// for of

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    // console.log(i);
}

// maps

const map = new Map()

map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")


// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


 // Objects

const myObj = {
    'game1' : 'NFS',
    'game2': 'IPL'
}

// console.log(myObj);

// for of loop not iterable in Objects


// for in
const myObj1 = {
    js: 'JavaScript',
    CPP: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObj1) {
    // console.log(`${key} shortcut is for ${myObj1[key]}`);
}

const programming = ['js', 'java', 'c', 'cpp'];

for (const key in programming) {
  //  console.log(key);
  //  console.log(programming[key]);
}



// for each

const code = ['js', 'java', 'python', 'cpp']

// code.forEach( function (val) {
//     console.log(val);
// })

code.forEach( (item) => {
    // console.log(item);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },

]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})