var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
	title: 'Gothic Video Game',
	description: 'Awesome Game',
	price: 10
	}),

	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Call_of_Duty_4_Modern_Warfare.jpg',
	title: 'Call of Duty 4: Modern Warfare',
	description: 'Action-thriller from the award-winning team at Infinity Ward.',
	price: 19
	}),

	new Product({
	imagePath: 'http://ecx.images-amazon.com/images/I/81L8-mjNlrL._SL1500_.jpg',
	title: 'Counter Strike: Global Offensive',
	description: 'Multiplayer first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation.',
	price: 15
	}),

	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/f/f1/TombRaider2013.jpg',
	title: 'Tomb Raider',
	description: 'Explore the intense origin story of Lara Croft and her ascent from a young woman to a hardened survivor.',
	price: 19
	}),

	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg',
	title: 'Bioshock Infinite',
	description: 'Indebted to the wrong people, with his life on the line, veteran of the U.S. Cavalry and now hired gun, Booker DeWitt has only one opportunity to wipe his slate clean. He must rescue Elizabeth, a mysterious girl imprisoned since childhood and locked up in the flying city of Columbia.',
	price: 20
	}),

	new Product({
	imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Overwatch_cover_art_%28PC%29.jpg',
	title: 'Overwatch',
	description: 'Team-based multiplayer online first-person shooter video game developed and published by Blizzard Entertainment.',
	price: 40
	}),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function(err, result) {
		done++;
		if (done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}