import http from "http";

const app = http.createServer((_request, response) => {
	response.writeHead(200, { "Content-Type": "test/plain" });
	response.end("Hello World");
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
