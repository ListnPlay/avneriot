import riot from 'riot';
import avner from './avner';

console.log("RIOT MAIN TAG");
riot.tag('main', `

 <h1>Hello World</h1>
 <a href="/amit">Call Amit</a>
 <a href="/avner">Call Avner</a>
 <avner if={opts.personStore.currentPerson=='avner'} store={opts.personStore}></avner>
 <amit if={opts.personStore.currentPerson=='amit'} store={opts.personStore}></amit>
 <style>
     main {
         display: block;
         background-color: red;
     }
 </style>
 `,
 function(opts) {
     //this.routes = new Routes();
    
    //     console.log(personStore);

    this.on('mount', () => {
        console.log("Main mounted");
        //         this.routes.start();
    });
});
