const handlerbars = require('express-handlebars');

function handlebarsConfig(app) {
    //Handlebars config
    app.engine('hbs', handlerbars.engine({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs');
    app.set('views', 'src/views');
}

module.exports = handlebarsConfig;