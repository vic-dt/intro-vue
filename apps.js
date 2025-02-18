const { createApp, ref} = Vue;

const app = createApp({
    template: `
   <h1>{{ nuntius }}</h1> 
   <h1>{{ auctor }}</h1> 
   <p>desde app.js<p>
    `,
    setup(){
        const nuntius = ref("I'm Batman");

        const auctor = ref('Batman');

        setTimeout(()=>{

            nuntius.value = 'Soy Goku';

            auctor.value = 'Goku';

            console.log(nuntius);
        }, 1000);

        return{
            nuntius,
            auctor,

        }
    }
});

app.mount('#myApp')