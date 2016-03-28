var http=require("http");

http.createServer(

	function(request, response){
		response.writeHead(200,{'Content-Type':'text/plain'});
		response.end('Bienvenido al curso de node.js');
	}	

).listen(8000);

console.log("Server inicializado...");