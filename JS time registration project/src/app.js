import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { homeView } from './views/homeView.js';
import { addProjView } from './views/addPair.js';
import { updateNav } from './views/navView.js';


const root = document.getElementById('input'); // DO NOT FORGET TO ADJUST THE ROOT!!!
//Test for github

//page(renderMiddleware); to test


page("/", renderMiddleware, homeView);
page("/home", renderMiddleware, homeView);
page("/Timesheets", renderMiddleware, addProjView);
page("*", homeView);

updateNav();
page.start();



function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, root) // content is the html template that will be written and root is the element
   //that will be the "parent" of the new html code. 

    const user = JSON.parse(sessionStorage.getItem("userData"));
    if (user){ // we place the user in the context.
        ctx.user = user;
    }
    next();
}