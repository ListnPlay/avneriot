import riot from 'riot-dev';
import Routes from '../routes';
console.log("RIOT MAIN TAG");

riot.tag('main', `

 <h1>Hello World</h1>
 <a href="/amit">Call Amit</a>
 <a href="/avner">Call Avner</a>
 <person></person>
 <style>
     app {
         display: block;
         background-color: red;
     }
 </style>
 `,
 function(opts) {
     this.routes = new Routes();

     this.on('mount', () => {
         console.log("Main mounted");
         this.routes.start();
     });
});
