const express = require("express");

const ejs = require("ejs");

// Create express app
const app = express();

// // Create a database connection configuration
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "testfullstack_students", // comment out if running example 1
// });

// // Establish connection with the DB
// db.connect((err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(`Successful connected to the DB....`);
//   }
// });

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get('/resume', function(req, res) {
  res.render('../views/resume.ejs');
});

app.get('/fun_facts', function(req, res) {
  res.render('../views/fun_facts.ejs');
});

app.get('/blog', function(req, res) {
  res.render('../views/blog.ejs');
});

app.get('/trivia', function(req, res) {
  res.render('../views/trivia.ejs');
});

// app.post("/insertstudents", (req, res) => {
//   let data = { name: req.body.studentName, email: req.body.studentEmail };
//   let sql = `INSERT INTO students SET ?`;
//   let query = db.query(sql, data, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.send(`student entry was inserted to the db...`);
//   });
// });

// app.post("/updatestudents", (req, res) => {
//   let sql = `UPDATE students SET email = '${req.body.studentNewEmailUpdate}'  WHERE id = ${req.body.studentID}`;
//   db.query(sql, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.send(`student entry was updated in the db...`);
//   });
// });

// app.post("/deletestudents", (req, res) => {
//   let sql = `DELETE FROM students WHERE email = '${req.body.studentEmail}'`;
//   db.query(sql, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.send(`student entry was deleted in the db...`);
//   });
// });

// app.get("/readstudents", (req, res) => {
//   let sql = `SELECT * FROM students`;
//   db.query(sql, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.render("readData", { data: result });
//   });
// });





// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
