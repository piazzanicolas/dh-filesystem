const fs = require('fs');
const path = require('path');

//**********HELPERS**********//
const filePath = path.join(__dirname, `../data/usersData.json`);

function readJSON () {
	let dataJSON = fs.readFileSync(filePath, 'utf-8');
	let arrayUsers;
	if (dataJSON == '') {
		arrayUsers = [];
	} else {
		arrayUsers = JSON.parse(dataJSON);
	}
	return arrayUsers;
}

function generateID () {
	let users = readJSON();
	if (users == ''){
		return 1;
	} else {
		let lastUser = users.pop();
		return lastUser.id + 1;
	}
}

function storeUser (dataUser){
	let users = readJSON();
	users.push(dataUser);
	fs.writeFileSync(filePath, JSON.stringify(users, null, ' '));
}

const controller = {
	registerForm: (req, res) => {
		res.render('register');
	},
	storage: (req, res) => {
		let newUser = {
			id: generateID(),
			...req.body
		};
		storeUser(newUser);
		res.redirect('/register');
	},
};

module.exports = controller
