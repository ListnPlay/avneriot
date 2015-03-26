'use strict'
import riot from 'riot';

export default function PersonStore() {
    riot.observable(this);
    this.currentPerson = null;

    this.on("person_swap", (person) => {
        console.log("Person swap!", person)
        this.currentPerson = person;
    });
}
