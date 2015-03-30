// SYSTEM JS
var System = require('systemjs');
require('./src/server-environment');
require('./src/config');

System.import('./index-server');
// Middleware renders the page


