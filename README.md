# Node
Node.js is a runtime env for js

Installation and setup
Go to the official website of node and download the LTS version
node -v or node --version

NPM: Node package manager
npm -v

Even version of node are always LTS
Odd version are the latest testing verion

To run node in [file name] in terminal

Node doesnot have any window object

npm init : Every time when created any node project need to run the command npm init to insilise the node this will create a package.json that will have all the configurations.

Modules: Smaller code placed in a sepreate file act as a module. We can export the functions from the file with export keyword and import it with required.

File handling: Create and Read file with fs module

Http Module: Use to handle the http operations.

https://www.google.com/?userId=1&a=2

https:// Hyper text transfer Protocol secure
www.google.com : domain name 
/ : path
?userId=1&a=2 : query paramaters

Http Methods: GET, PUT, POST and DELETE.

Verisioning: 
^4.18.2 compatible with version from the mentioned version till <5.0.0

~4.18.2 can update the minor fixed like ~4.18.3 ~4.18.4 but not ~4.19.0

REST API || Restfull apis: Set of rules - 
- It works on server client architecture.
- Always respect all http methods(GET, PUT, POST and DELETE) for eg: GET /users - read the data and return the users data dont use this GET /getUsers and so on.

Types of response that can be send by a backend server: res.send(), res.json(), res.render()

SSR(Server side rendering): When backend send the Html in the response and client just need to show without putting lots of efforts. It is fast as Compare to Client side rendering.

CSR(Client Side Rendering): When we get data as a response form the api and then need to show that in the UI is CSR. It is slower as compare to the SSR.



