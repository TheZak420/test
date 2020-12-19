function checkInfo (username,password){
	for (var i=0; i < database.length; i++){
		if (database[i].username === username &&
			database[i].password === password){
			return true ;
		}
	}
	return false;
}

function signIn (username,password){
	if (checkInfo(username,password)){
		console.log(newsfeeds);
	}
	else {alert("not correct");
}
}

var database = [{
	username:"zakaria",
	password:"123"
},
{
	username:"mehdi",
	password:"321"
},
{
	username:"sst",
	password:"pp"
}
];

var newsfeeds = [
	{
		username:"Ziko",
		news: "in Peru"
	},
	{
		username:"Mehdi",
		news:"bought a BMW"
	},
	{
		username:"Bob",
		news:"One love,One heart"
	}
];

var userPrompt = prompt("what\'s your username");
var passPrompt = prompt("what\'s your password");
signIn(userPrompt,passPrompt);