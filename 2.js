var userLog = [
  {
    username : "afifjulio",
    password : "Duapuluh0@"
  },
  {
    username : "tiaralara",
    password : "Wadid@w123"
  },  
  {
    username : "dindafar",
    password : "Bukutul/s1"
  },  
]

function validateUser (username, password){
  for(i = 0; i < userLog.length ; i++){
    if(username === userLog[i].username && password === userLog[i].password){
      console.log ("welcome" + " " + username)
      return}
  }
  console.log ("wrong username/password");
}

console.log(validateUser("afifjulio","Duapuluh0@"));
