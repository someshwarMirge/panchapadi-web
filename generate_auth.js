const fs = require('fs');
const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('jaymalhar').digest('hex');
console.log('New Hash:', hash);
fs.writeFileSync('new_hash.txt', hash);
