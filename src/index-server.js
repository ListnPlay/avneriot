'use strict';

import riot from 'riot-dev';
import from './components/main';
import from './components/avner';

import RiotControl from 'riotcontrol';
import PersonStore from '../stores/person-store'

let personStore = new PersonStore();
RiotControl.addStore(personStore);

export default () => {
     return riot.render('main', {
             personStore: personStore
     });
}


