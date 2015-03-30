import page from 'page';
import avner from './components/avner';
import amit from './components/amit';
import riot from 'riot-node';

let mountTag = (selector, tag, store) => {
    return (ctx, next) => {
        console.log("Mount tag ", tag, " on ", selector, "with store ", store);
        riot.mount(selector, tag, {context: ctx, store: store});
    };
};


export default class Routes {
    constructor() {
        console.log("Routes class constructed!");
        // this.routingTable();
    }

    routingTable() {
        console.log("routingTable!");


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
