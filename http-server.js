var http = require('http');
var server = http.createServer(function(req,res) {
	if (req.url !== '/favicon.ico') {
		req.on('data',function(data) {
			console.log('服务器端接收到数据：'+data);
			res.write('确认数据：'+data);
		})
		req.on('end',function() {
			res.end();
		})
	}
}).listen(1337,'localhost');