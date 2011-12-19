var db = require('../db.js').db;

exports.singlePost = function(req, res) {
	db.view('misframe', 'singlePost', {key: parseInt(req.params.id)}, function(e1,r1,h1) {
		console.log(r1);

		if(r1.rows.length == 0) {
			res.render('404', {title: "Not found"});
		}

		else {
			var post = r1.rows[0].value;
			res.render('singlePost', {title: post.title, post: post});
		}
	});

};
