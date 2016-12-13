var http = require('http');
var url = require('url');
var server = http.createServer().listen(1337,'localhost');
server.on('request',function(req,res) {
	if (req.url !== '/favicon.ico') {
		res.write('<html><head><meta charset="utf-8"/></head>');
		var url_part = url.parse(req.url);
		console.log(url_part);
		switch(url_part.pathname) {
			case '/':
			case '/index.html':
				res.write('<body>您当前正在访问网站的首页ya！</body></html>');
				break; 
			default:
				res.write('<body>您当前正在访问的页面为：'+url_part.pathname+'。</body></html>');
		}
	}
	res.end();
});