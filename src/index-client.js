'use strict';

import riot from 'riot';
import from './components/main';
import pageExpressMapper from 'kethinov/page.js-express-mapper.js';
import page from 'page';
import routes from './routes';

import personStore from './stores/person-store';

window.page = page;

// activate express-mapper plugin
pageExpressMapper({
    renderMethod: null,
    expressAppName: 'app'
    });


routes.runRoutingTable(window.app);

page();

riot.mount('main', {personStore: personStore});


