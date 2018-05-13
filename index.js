const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.render('home.pug');
});

app.get('/:room', (req, res, next) => {
	console.log(req.params.room);
	next();
});

app.listen(8080);
