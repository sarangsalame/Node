const os = require('os');
console.log('Operating System Information:');
console.log('OS Type:', os.type());

console.log('OS Platform:', os.platform());
console.log('OS Release:', os.release());    
console.log('OS Architecture:', os.arch());
console.log('Total Memory:', os.totalmem(), 'bytes');
console.log('Free Memory:', os.freemem(), 'bytes');
console.log('CPU Information:', os.cpus());
console.log('Network Interfaces:', os.networkInterfaces());
console.log('Home Directory:', os.homedir());