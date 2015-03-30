'use strict';

import riot from 'riot-node';
import from './components/main';
import from './components/avner';

import RiotControl from 'riotcontrol';
import PersonStore from '../stores/person-store'

import express from 'express';

import Q from 'q';
import FS from 'fs';
import cheerio from 'cheerio';

let app = express();
let layoutHTML;

let personStore = new PersonStore();
RiotControl.addStore(personStore);

// Escape the SystemJS dir
let baseDir = __dirname + "../../../../../";

console.log(__dirname);
app.use(express.static(baseDir + "../public"));

app.use(function (req, res, next) {
    next(); // Process routes
    console.log("Sending app");
    let view = riot.render('main', {
            personStore: personStore
    });
    console.log(view);
    let renderLayout = cheerio.load(layoutHTML);
    renderLayout('body').append(view);
    console.log(renderLayout.html());
    res.send(renderLayout.html());
});


app.get('/', function (req, res) {
    console.log("Handling route!")
    RiotControl.trigger("person_swap", null);
});

app.get('/avner', function (req, res) {
    console.log("Triggering avner person_swap")
    RiotControl.trigger("person_swap", "avner");
});

app.get('/amit', function (req, res) {
    console.log("Triggering amit person_swap")
    RiotControl.trigger("person_swap", "amit");
});

let server = app.listen(3000, function () {

    let host = server.address().address
    let port = server.address().port

    console.log('Node app listening at http://%s:%s', host, port);
});

Q.spawn(function* () {
    try {
        console.log("Loading index.html layout");
        // Loading static HTML file
        layoutHTML = yield Q.denodeify(FS.readFile)("./index.html");
        layoutHTML = layoutHTML.toString().trim();
    }
    catch (e) {
        console.log("Error", e);
    }
});


