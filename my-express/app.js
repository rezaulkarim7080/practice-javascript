// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/");
//   {
//     res.write("Hello world");
//     res.end();
//   }
// });

// server.listen(3000);
// console.log("Listenning on port 3000...");

const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
//console.log(app);

//app.get();
// app.post();
// app.patch();
// app.delete();

// app.get("/", (request, response) => {
//   response.send("Hello from express js");
// });
// app.get("/students", (request, response) => {
//   response.send(JASON.stringify(["Rezaul", "Karim"]));
// });

app.get("/", (request, response) => {
  response.send("Hello from express js");
});
// app.get("/api/students", (req, res) => {
//   fs.readFile("./db.json", "utf-8", (err, data) => {
//     console.log(data);
//     res.send(data);
//   });
// });

app.post("/api/students", (req, res) => {
  const student = req.body;
  fs.readFile("./db.json", "utf-8", (err, data) => {
    const students = JSON.parse(data);
    students.students.push(student);
    fs.writeFile("./db.json", JSON.stringify(students), (err) => {
      res.send(student);
    });
    //console.log(students);
  });
});

const port = 2000;

app.listen(port, () => {
  console.log("listening port 3000>.....");
});
