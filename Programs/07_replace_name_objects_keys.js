// How to replace the names of multiple objects keys with the values provided using javascript ?

let obj = {
    name: "Sandeep",
    age: 20,
    gender: "Male"
}

// console.log(obj.name);

// let renameObjectKey = (object) => {
//     object.firstName = obj.name
//     delete obj.name
// }

// renameObjectKey(obj)
// console.log(obj);

let rename = (object) => {
    object.lastName = obj.name
    Object.height = obj.age
    delete obj.name
    delete obj.age
}

rename(obj)

console.log(obj);

