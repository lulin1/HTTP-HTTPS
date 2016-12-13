var http = require('http');
var options = {
	hostname : 'localhost',
	port : 1337,
	path : '/',
	method : 'POST'
};
var req = http.request(options,function(res) {
	res.on('data',function(data) {
		console.log('客户端接收到数据：'+data);
	})
});
req.write('你好啊！');
req.end('再见啦！');
