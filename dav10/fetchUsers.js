const fs = require('fs');
const https = require('https');

const url = 'https://jsonplaceholder.typicode.com/users';

https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const users = JSON.parse(data);
        const filtered = users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email
        }));
        fs.writeFileSync('users.json', JSON.stringify(filtered, null, 2));
        console.log('users.json created successfully');
    });
}).on('error', err => console.error('Error:', err.message));