const express = require('express');
const path = require('path');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('App listening on port 3000\n');
});
