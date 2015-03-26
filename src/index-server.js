'use strict';

import riot from 'riot-dev';
import from './components/main';
import from './components/avner';

import RiotControl from 'riotcontrol';
import PersonStore from '../stores/person-store'

import express from 'express';

let app = express();

let personStore = new PersonStore();
RiotControl.addStore(personStore);

app.use(function (req, res, next) {
    next();
    console.log("Sending app");
    let view = riot.render('main', {
            personStore: personStore
    });
    res.send(view);
})

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

/*export default () => {
     }*/


