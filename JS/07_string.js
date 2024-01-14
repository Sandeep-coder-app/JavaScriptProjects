const name1 = "Sandeep Singh"
const count = 50
const name2 = "Akash Yadav"

console.log(`Hello my name is ${name1} and repo count is ${count}`);

console.log(name1[0]);

// slice
const a = name1.slice(-1, 5)
console.log(a);

//substring
const b = name1.substring(0, 4)
console.log(b);

// replace

const c = name1.replace("e","v")
console.log(c);

// replaceAll
const d = name1.replaceAll("e", "m")
console.log(d);

// toUpperCae

const e = name1.toUpperCase()
console.log(e);

// toLowerCase

const f = name1.toLowerCase()
console.log(f);

// concat

const g = name1.concat(" ",count)
console.log(g);

// trim
const email = "  app@gmail.com"
const h = email.trim()
console.log(h);

const email1 = "app@gmail.com12 565"
const i = email1.trimEnd()
console.log(i);

// chatAt


console.log(name2.charAt(2));
console.log(name2.charAt(6));

// split

const company = "google-microsoft-paytm"
console.log(company.split('-'));

// includes

console.log(name1.includes("v"));

// indexOf
console.log(name1.indexOf('i','9'));

// search

console.log(name1.search(/d/));