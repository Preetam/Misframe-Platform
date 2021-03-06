var db = require('../db.js').db;

exports.about = require('./about.js').about;
exports.contact = require('./contact.js').contact;

exports.singlePost = require('./singlePost.js').singlePost;
exports.paginated = require('./paginated.js').paginated;
exports.rss = require('./rss.js').rss;

exports.index = function(req, res) {
	db.view('misframe', 'getPosts', {keys: null, limit: 4, descending: true}, function(e1,r1,h1) {
		if(e1)
			console.log(e1);

		var posts = r1.rows;
                var total = r1.total_rows;
                for(var i in posts)
                        posts[i] = posts[i].value;
                console.log(posts);
                res.render('index', {title: 'Misfra.me', posts: posts, total: total, curPage: 0});
	});

//	res.render('about', {title: 'misframe'});
};
