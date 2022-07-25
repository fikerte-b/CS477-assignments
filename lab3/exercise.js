const http = require('http');
const server = http.createServer();
const fs = require('fs');

//no.1 Create a http server which is listen to 3000 port
// server.on('request', (req, res)=> {
//     res.end('Hello');
// });
// server.listen(3000);

//no2 The home page “/” which displays an html page with one input to enter any text message
// 3.User enter information, then click “Submit” button
//4. On the server side, grab user's inputs and save into a file.
//5. After saving successfully, display "Save Successfully" page to user with a link goes back to home page.

// server.on('request', function (req, res)  {
    
//     if (req.url === "/" && req.method === "GET") {
//       res.write(`hello world!!!`);
//       res.end();
//     }
// });
// server.listen(3000);
server.on('request', (req, res) => {
    

    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/messsage" method="POST">Enter: <input name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end(); 
    }

     if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            fs.writeFileSync('message.txt', parsedBody.split('=')[1]);
        });

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Save Successfully</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000, console.log(`listening on port 3000----`));

