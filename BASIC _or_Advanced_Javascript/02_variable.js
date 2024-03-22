const accountId = 144553
let accountEmail = "Sandeep@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountState // undefined
// accountId = 25 // not allowed

console.log(accountId);

accountEmail = "Akash@gmail.com"
accountPassword = "212121"
accountCity = "Jaipur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
* Prefer not to use var
* because of issue in block scope and functional scope
*/