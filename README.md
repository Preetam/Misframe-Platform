Misframe - The platform.
=======================

I made a Node.js blog platform! This is the code running on http://misfra.me/

Requirements.
------------
Node, NPM, CouchDB. That's pretty much it. I'm using CouchDB 1.0.1 and Node.js 0.6.6.

Document format.
----------------
This is the actual first post:

	{
	   "_id": "post-1",
	   "_rev": "30-e692c1753c626c6cef61990a173427d0",
	   "date": "November 30, 2011",
	   "title": "First post!",
	   "subtitle": "Who says it has to be interesting?",
	   "body": "<p>I procrastinate. I really did not want to write a blog post (even though I told myself to), so I made this. What is this? First off, it&#39;s something made <em>entirely</em> by me. I&#39;ll go into the technical stuff later. I couldn&#39;t have done it without the amazing people who have developed Node.js, Express, Jade, Stylus, CouchDB, etc. Those people rock.</p><p>Enough about the geeky stuff? Sure, let&#39;s move on. I&#39;ve named this site &ldquo;Misframe.&rdquo; To frame is to create or formulate. To misframe is to do that incorrectly. I always find myself disappointed at things being done the wrong way, and the fault is found almost always at the origins. My best piece of advice would be to do things right from the beginning.</p><p>So what&#39;s the point of this blog? Well right now, I don&#39;t know. It&#39;ll be about anything and everything. I&#39;ll try to keep things interesting. In the end, this blog is mainly for myself. I&#39;ve had a web presence for <em>many</em> years&mdash;at least 8. In fact, there are still my forum posts from <em>way</em> back that I look at for fun. I&#39;ve learned to live in the moment. There&#39;s just no time to step back and look at where I am right now. Hopefully, I&#39;ll have some time later on to look back at this stuff.</p><p>You know, you can click on the post title and read/write some comments! <em>Exciting</em>, isn&#39;t it?</p>",
	   "urlFriendlyTitle": "first-post",
	   "id": 1,
	   "type": "post",
	   "published": true
	}

CouchDB views.
-------------
singlePost:

	function(doc) {
	  if(doc.type == 'post')
	    emit(doc.id, doc);
	}

getPosts:

	function(doc) {
	  if(doc.type == 'post' && doc.published)
	    emit(doc.id, doc);
	}

The missing piece.
------------------
So, `db.js` is missing. I don't want my database credentials floating around the internet. This is the format it should be in:

	var nano = require('nano')('http://USERNAME:PASSWORD@HOSTNAMEorIP:PORT');
	var db = nano.use('misframe');
	
	exports.db = db;

You can probably figure out the rest. `misframe` is obviously the name of my database. Yours will probably be different.

Things to do...
---------------
* Categories
* RSS feeds

License.
-------
	Copyright (C) 2011 Preetam Jinka

	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
	of the Software, and to permit persons to whom the Software is furnished to do
	so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
