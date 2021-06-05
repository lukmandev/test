const {Router} = require('express');
const path = require('path');
const request = require('request')
const router = Router();


var corsOptions = {
  origin: 'http://localhost:3000',
}




router.get('/', (req, res) => {
	res.cookie('token', 'hgdfsghj',{
	    maxAge: 100 * 2,
	    secure: true,
	});
	res.cookie('tokenfsdsd', 'hgdfsghj')
	res.render('first', {
		cookie: JSON.stringify(req.cookies)
	});
});


router.get('/get', (req, res) => {
	let json = JSON.parse(body);
	res.render('second');
});



router.post('/test', (req, res) => {
	res.json({name: 'hello'})
})

module.exports = router;
