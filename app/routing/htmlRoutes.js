var path = require("path");

module.exports = function (app) {

	app.use('/', function(req,res) {
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.use('/contact', function(req,res) {
		res.sendFile(path.join(__dirname + '/../public/contact.html'));
    });
    
    app.use('/portfolio', function(req,res) {
		res.sendFile(path.join(__dirname + '/../public/portfolio.html'));
	});
}