const http = require("http");


const server = http.createServer((req, res) => {
  console.log('server called');
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello World!</h1>") // writing to the body
  res.end();
});

server.listen(8080, () => {
  console.log("server is listening...");
});