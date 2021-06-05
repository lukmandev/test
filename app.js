const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');


let PORT = process.env.PORT || 5000;


async function start() {
	try {
		app.listen(PORT, () => {
			console.log('server running on port', PORT);
		});
	} catch(e) {
		console.log(e);
	}
}
start();

const hbs = handlebars.create({
	defaultLayout: 'defaultLayout/main',
	extname: 'hbs'
});

console.log(hbs)

app.engine(
  'hbs',
  hbs.engine
)
app.set('views', 'views')
app.set('view engine', 'hbs')
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
    extended:true
}));
app.use((req, res, next) => {
  req.headers['H'] = 1;
  next();
});
app.use(cookieParser('secret key'));



app.use('/', require('./routes/test.js'));



