var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res) {
	if (req.url !== '/favicon.ico') {
		req.on('data',function(data) {
			console.log('服务器端接收到的数据为：'+ decodeURIComponent(data) );
		});
		req.on('end',function() {
			console.log('客户端请求数据已经全部接受完毕！');
		});
	}
	res.end();
}).listen(1337,'127.0.0.1');