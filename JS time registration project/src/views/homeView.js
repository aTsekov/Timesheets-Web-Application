import {html} from '../../node_modules/lit-html/lit-html.js'


export function homeView(ctx){
    
    ctx.render(createHomeTemplate())
}

function  createHomeTemplate(){
    const res =html `
     <section id="home">
          <h1>Welcome to Timesheets</h1>
          <img src="./images/home.jpg" alt="home" />
          <h2>Browse through your timesheets</h2>
          <h3>Add or manage your items</h3>
        </section>`

        return res;
}