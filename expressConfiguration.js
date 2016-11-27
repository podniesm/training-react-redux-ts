const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '_wwwroot')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '_wwwroot', 'index.html'));
});
app.listen(3000, () => {
    console.log('react-redux-ts training app listening on port 3000');
});