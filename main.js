var current_users = ["Ali", "Nawaz", "faraZ", "Tariq", "Yasir", "Noman"];
var new_users = ["Ahmed", "Manzoor", "Faraz", "Aliyan", "Yasir", "Ishaq"];
// we will use forEach method
new_users.forEach(function (new_users) {
    var new_usersLower = new_users.toLowerCase();
    //we will use some() method
    var userNameTaken = current_users.some(function (current_users) { return current_users.toLowerCase() === new_usersLower; });
    //now we will apply conditions
    if (userNameTaken) {
        console.log("".concat(new_users, " need to choose a new username because it's already taken"));
    }
    else {
        console.log("".concat(new_users, " is the new member added"));
        current_users.push(new_users); //add new user to current uusers
    }
});
console.log(current_users);
