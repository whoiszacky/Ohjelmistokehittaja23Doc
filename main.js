// this is for the moveabll svgs 

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connection details for MySQL server
const con = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password : "zack",
  database : "about_me"
});

// con is variable and it stores the connection 
con.connect((err) => {
    if (err) throw err;
    else 
        console.log('Connected to MySQL server');
  });

  
  app.post('/submit', (req, res) => {
    /** [Learn while doing]
     * in order to read HTTP POST data , we have to use "body-parser" node module.
     *  body-parser is a piece of express middleware that reads a form's input and 
     * stores it as a javascript object accessible through req.body
     */
    const { firstname, email, message } = req.body;
    const values = [firstname, email, message]; 
    console.log(values.firstname)
  
    /**
     * theReport represents the INSERT query to insert data into the "info" table. 
     *  [ database : "about_me"]
     *  [table: "info"] 
     */

    const theReport = `INSERT INTO info (name, email, opinion) VALUES (?, ?, ?);`;
    
 
    con.query(theReport, values, (err, result) => {
      if (err) throw err;
 
      res.send('Form data submitted successfully');
    });
  });

  // Run the server
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });