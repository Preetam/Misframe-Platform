var db = require('../db.js').db;

exports.rss = function(req, res) {
	db.view('misframe', 'getPosts', {keys: null, limit: 10, descending: true}, function(e1,r1,h1) {
		var posts = r1.rows;
		var total = r1.total_rows;
		var items = '';
		for(var i in posts) {
                        posts[i] = posts[i].value;
			items += '<item><title>'+posts[i].title+'</title><link>http://misfra.me/post/'+posts[i].id+'</link><description>'+posts[i].body.replace(/&mdash;/g,'—')+'</description></item>';
		}
		
		var feed = [
			'<?xml version="1.0"?>',
			'<rss version="2.0">',
			'       <channel>',
			'               <title>Misframe</title>',
			'               <link>http://misfra.me/</link>',
			'               <description>A blog by Preetam Jinka</description>',
					items,
			'       </channel>',
			'</rss>'].join('\n');

		res.end(feed);
	});

};
