let current_users = ["Ali","Nawaz","faraZ","Tariq","Yasir","Noman"];


let new_users =["Ahmed","Manzoor","Faraz","Aliyan","Yasir","Ishaq"];

// we will use forEach method
new_users.forEach(new_users =>{
let new_usersLower = new_users.toLowerCase();

//we will use some() method
let userNameTaken = current_users.some(current_users => current_users.toLowerCase()=== new_usersLower);

//now we will apply conditions
if(userNameTaken){
    console.log(`${new_users} need to choose a new username because it's already taken`);
    
}else{
    console.log(`${new_users} is the new member added`);
    current_users.push(new_users);           //add new user to current uusers
}

});
console.log(current_users);
