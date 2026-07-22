const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log('server called');
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.write("<h1>Hello World!</h1>") // writing to the body
//   res.end();
// });

const notes = [
  {
    id: 1,
    content: "bla bla bla",
  },
  {
    id: 2,
    content: "lorem ipsum...",
  },
  {
    id: 3,
    content: "foo bla moo",
  },
];



const server = http.createServer(async (req, res) => {
  console.log('server called');
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/") {
    res.write("Hello World!");
  } else if (req.url === "/notes") {
    if (req.method === "GET") {
      res.write(JSON.stringify(notes));
    } 
    else if (req.method === "POST") {
      const newNote = await readBody(req);
      if (newNote && newNote.content) {
        newNote.id = notes[notes.length - 1].id + 1;
        notes.push(newNote);
        res.statusCode = 201;
        res.write(JSON.stringify(newNote));
      } else {
        res.statusCode = 400;
        res.write(JSON.stringify({ errorCode: 392, message: "body must include content prop" }))
      }
    }
  } else {
    res.statusCode = 404;
    res.write("Page not found");
  }
  res.end();
});

server.listen(8080, () => {
  console.log("server is listening...");
});


function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        resolve(JSON.parse(body));
      });
  });
}