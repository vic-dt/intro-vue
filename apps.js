const { createApp, ref} = Vue;

const app = createApp({
    template: `
   <h1>Hola Mundo</h1> 
   <p>desde app.js<p>
    `
});

app.mount('#myApp')