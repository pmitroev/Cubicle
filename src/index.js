const express = require('express');
const handlerbars = require('express-handlebars');
const path = require('path');

const app = express();

const PORT = 3000;

// Express config
app.use(express.static(path.resolve(__dirname, 'public')));

//Handlebars config
app.engine('hbs', handlerbars.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));