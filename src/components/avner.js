'use strict'
import riot from 'riot';
import RiotControl from 'riotcontrol';

riot.tag('avner', `

 <h1>And Avner is here</h1>
 <a href="/amit">Call Amit instead</a>
 <style>
     person h1 {
         color: white;
     }
 </style>
 `,
 function(opts) {
     let store = opts.store;
     store.on('person_swap', () => {
         console.log("Avner is being swapped!");
         this.unmount();
     });
});

