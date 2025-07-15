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
const users = require('./MOCK_DATA.json')


const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from express!');
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/about', (req, res) => {
  res.send(
    `<div>Hi ${req.query.name ? req.query.name : ''}! from about page</div>`
  );
});

// HTML Endpoints
app.get('/users', (req, res) => {
  const html = users.map(user =>
    `<div>${user.id} - ${user.first_name}</div>`
  ).join('');
  res.send(html);
});

// API Endpoints
app.get('/api/users', (req, res) => {
  res.json(users);
});

// app.get('/api/user/:id', (req, res) => {
//   const userId = parseInt(req.params.id, 10);
//   const user = users.find(u => u.id === userId);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).send('User not found');
//   }
// });


// app.patch('/api/user/:id', express.json(), (req, res) => {
//   const userId = parseInt(req.params.id, 10);
//   const userIndex = users.findIndex(u => u.id === userId);
//   if (userIndex === -1) {
//     return res.status(404).send('User not found');
//   }
//   const updatedUser = { ...users[userIndex], ...req.body };
//   users[userIndex] = updatedUser;
//   res.json(updatedUser);
// });

app.post('/api/user', express.json(), (req, res) => {
  const newUser = req.body;
  if (!newUser || !newUser.first_name || !newUser.email) {
    return res.status(400).send('Invalid user data');
  }
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.route('/api/user/:id')
  .delete((req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      return res.status(404).send('User not found');
    }
    users.splice(userIndex, 1);
    res.status(204).send();
  }
  )
  .get((req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  }
  )
  .patch(express.json(), (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      return res.status(404).send('User not found');
    }
    const updatedUser = { ...users[userIndex], ...req.body };
    users[userIndex] = updatedUser;
    res.json(updatedUser);
  }
  );

app.listen(PORT, () => {
  console.log('Server is running on port 8000');
});
