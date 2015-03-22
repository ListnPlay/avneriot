import riot from 'riot';
import Routes from '../routes';

riot.tag('app', `

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
         console.log("App mounted");
         this.routes.start();
     });
});
