import page from 'page';
import avner from './components/avner';
import amit from './components/amit';
import riot from 'riot';
import RiotControl from 'riotcontrol';
import PersonStore from './stores/person-store'

let mountTag = (selector, tag, store) => {
    return (ctx, next) => {
        console.log("Mount tag ", tag, " on ", selector, "with store ", store);
        riot.mount(selector, tag, {context: ctx, store: store});
    };
};

let triggerEvent = (eventName) => {
    return (ctx, next) => {
        console.log("Trigget event: ", eventName);
        RiotControl.trigger(eventName);
        next();
    };
};

export default class Routes {
    constructor() {
        console.log("Routes class constructed!");
        this.routingTable();
    }

    routingTable() {
        console.log("routingTable!");

        let personStore = new PersonStore();
        RiotControl.addStore(personStore);

        //============Routing Table============//
        //                                     //
        page('/', triggerEvent('person_swap'), mountTag('person', 'avner', personStore));
        page('/amit', triggerEvent('person_swap'), mountTag('person', 'amit', personStore));
        page('/avner', triggerEvent('person_swap'), mountTag('person', 'avner', personStore));
    }

    start() {
        console.log("Routing...");
        page();
    }
}
