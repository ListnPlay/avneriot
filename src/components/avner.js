'use strict'
import riot from 'riot-dev';
import RiotControl from 'riotcontrol';
console.log("AVNER TAG");

riot.tag('avner', `

 <h1>And Avner is here</h1>
 <a href="/amit">Call Amit instead</a>
 <style>
     avner h1 {
         color: white;
     }
 </style>
 `,
 function(opts) {
     console.log("MOUNT AVNER");
     console.log(opts);
     let store = opts.store;
     store.on('person_swap', () => {
         console.log("Avner is being swapped!");
         this.unmount();
     });
});

