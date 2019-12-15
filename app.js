// Native packages
const path = require('path');

// Third-party packages
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// This is setting the templating engine. '.set()' is a handy Express feature
app.set('view engine', 'ejs');
// This 👇 is an example of how to set where the views should be sought after,
// based on project directory. Not really necessary here, as 'views' is default setting.
app.set('views', 'views');

// Importing controller routes/local files
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

////////////////General middleware////////////////////////////////////
// Needs to come before route mounting
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//////////////// Route Mounting //////////////////////////////////////
// Note that the more specific routes must come before the 'base/root' routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
// Backup 404 route as catch-all
app.use(errorController.get404);

app.listen(3000);
