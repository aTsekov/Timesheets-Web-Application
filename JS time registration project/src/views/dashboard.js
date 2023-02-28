import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAllItems } from '../API/data.js';

export async function dashboardView(ctx) {

    const shoes = await getAllItems()// Get all pairs of items from the server. 

    ctx.render(dashboardTemplate(shoes)) // we give the template all items so they can be rendered. 

   
}



