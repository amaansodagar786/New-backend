//server.js
const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');
const cors = require('cors');
app.set('view engine', 'ejs');
app.use(cors());





app.get('/api', (req, res) => {
const filePath = path.join(__dirname, 'data.json');

fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
console.error(err);
return res.status(500).json({ error: 'Internal Server Error' });
}

const jsonData = JSON.parse(data);
res.json(jsonData);
});
});



app.listen(3001, () => {
console.log("server connected")
})