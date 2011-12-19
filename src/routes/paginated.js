
/*
 * GET home page.
 */
var db = require('../db.js');
exports.paginated = function(req, res) {
	db.view('misframe', 'getPosts', {keys: null, limit: 4, skip: 4*req.params.page}, function(e1,r1,h1) {
		var posts = r1.rows;
		var total = r1.total_rows;
		for(var i in posts)
			posts[i] = posts[i].value;
		console.log(posts);
		res.render('index', {title: 'Misfra.me', posts: posts, total: total, curPage: parseInt(req.params.page)});
	});

//	res.render('about', {title: 'misframe'});
};
