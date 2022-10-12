
// const users = [
	// {username: 'mlewis'},
	// {username: 'akagen'},
	// {username: 'msmith'}
// ]
function findUserByUsername (users, entry ){
	return users.find(function (user){
		return user.username === entry;
	})
}

function removeUser (users, entry){
	let foundIndex = users.findIndex(function (user){
		return user.username === entry;
	})
	if(foundIndex === -1) return;
	return users.splice(foundIndex, 1)[0];
}