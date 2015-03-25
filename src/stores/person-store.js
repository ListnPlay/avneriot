'use strict'
import riot from 'riot';

export default function PersonStore() {
    riot.observable(this);

    this.currentPerson = "avner";

}
