Misframe - The platform.
=======================

I made a Node.js blog platform! This is the code running on http://misfra.me/

Requirements
------------
Node, NPM, CouchDB. That's pretty much it. I'm using CouchDB 1.0.1.

CouchDB Views
-------------
TODO

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
