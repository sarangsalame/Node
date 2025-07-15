// const http = require('http');

// const myServer = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World\n');
// });

// const PORT = process.env.PORT || 8000;

// myServer.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// Express Js 
const express = require('express');
const PORT = process.env.PORT || 8000;  

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from express!');    
});

app.get('/about', (req, res) => {
  res.send(
    `<div>Hi ${req.query.name ? req.query.name : ''}! from about page</div>`
  );    
});

app.listen(PORT, () => {  
  console.log('Server is running on port 8000');
});
