const fs = require('fs');

fs.writeFile('test.csv', '1,2,3,4,5\n6,7,,9,10', err => {
    if (err) throw err;
});