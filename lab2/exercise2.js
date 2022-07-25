/**
 * 2.Create a web server that's going to send a response of big image (bigger then 3MB) to any client that 
 * sends a request to your specified server:port. Use the best way for performance. 
 * (Try to solve this in many different ways and inspect the loading time in the browser
 *  and send many requests to see the performance differences)
 */

 const fs = require("fs");
 const http = require("http");
 const server = http.createServer();

 //using stream
 server
   .on("request", (req, res) => {
     const src = fs.ReadStream("nature.jpg");
//fs.ReadStream()
     src.pipe(res);
   })
   .listen(3000);
   
//using readFile
 http
   .createServer((req, res) => {
     fs.readFile("nature.jpg", (err, data) => {
       if (err) throw err;
       res.end(data);
     });
   })
   .listen(3002, () => console.log("listening on 3000"));
 