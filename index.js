const express = require("express");
const port = 3001;
const http = require('http');
const fs = require('fs');

const app = express();

// app.get('/', (req, res) => {

//     res.send('Good Morning, Vietnam')


// })


// app.listen(3001, () =>{

//     console.log("SERVER IS RUNNING.")

// });


const server = http.createServer(function(req, res){

    res.writeHead(200, { "Content-Type": "text/html" })
    fs.readFile('index.html', function(error, data) {

        if (error) {
            res.writeHead(404);
            res.write("Error, Page not found.")
        } else {
            res.write(data)
        }

        res.end()
    })

})

server.listen(port, function(error){
    if(error){
        console.log("Something went wrong: SERVER ERROR.")
    } else {
        console.log("SERVER IS RUNNING.")
    }
})