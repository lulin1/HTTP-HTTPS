var http = require('http');
var server = http.createServer(function(req,res) {
	//暂不指定接收到客户端请求时的处理！
}).listen(1337,'127.0.0.1');
server.on('connection',function(socket) {
	console.log('客户端连接已经建立！');
});
server.setTimeout(5000,function(socket) {
	console.log('服务器超时！');
	console.log(socket);
});