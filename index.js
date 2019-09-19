const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello Digital Ocean!');
	console.log('App access!!');
});

app.listen(3000, () => {
	console.log('Magic is happening on port 3000!');
});
