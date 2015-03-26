import riot from 'riot-dev';
riot.tag('amit', `

 <h1>And Amit is here</h1>
 <a href="/avner">Call Avner Back</a>
 <style>
     amit h1 {
         color: yellow;
     }
 </style>
 `,
 function(opts) {
    let store = opts.store;
    store.on('person_swap', () => {
        console.log("Amit is being swapped!");
        this.unmount();
    });
});


