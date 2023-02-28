import {html} from '../../node_modules/lit-html/lit-html.js'
import {createItem} from '.././API/data.js';
import { updateNav } from './navView.js';
import { updateRow } from './addRowView.js';

export async function addProjView(ctx) {

    ctx.render(addProjTemplate(onSubmit))
    

   async function onSubmit(e){
        
        e.preventDefault();
        const formData = new FormData(e.target) // e.target should point to the form
        const {project, phase, subphase, monday,tuesday ,wednesday ,thursday ,friday ,saturday ,sunday} = Object.fromEntries(formData);
        if(!project || !phase|| !subphase || !monday || !tuesday || !wednesday  || !thursday || !friday || !saturday || !sunday){
            return alert ("All fields are required!")
        }
        await createItem({project, phase, subphase, monday,tuesday ,wednesday ,thursday ,friday ,saturday ,sunday});
        updateNav();
        updateRow();
        ctx.page.redirect("/Timesheets"); // redirect to the dashboard page.
    }
}

function addProjTemplate(handler) {
    const res = html`<div id="timesheetId" class="timesheet">
    <div class="timesheet-form">
  <h2>Timesheet</h2>
  <form @submit = ${handler}>
    <div class="form-group">
      <label for="project">Project</label>
      <select name="project" id="project">
        <!-- To decide if I will have an epty option or not for each field in the form. -->
        <option value=""></option>                    
        <option value="project1">Project 1</option>
        <option value="project2">Project 2</option>
        <option value="project3">Project 3</option>
      </select>
    </div>
    <div class="form-group">
      <label for="phase">Phase</label>
      <select name="phase" id="phase">
        <option value="phase1">Phase 1</option>
        <option value="phase2">Phase 2</option>
        <option value="phase3">Phase 3</option>
      </select>
    </div>
    <div class="form-group">
      <label for="subphase">Sub-phase</label>
      <select name="subphase" id="subphase">
        <option value="subphase1">Sub-phase 1</option>
        <option value="subphase2">Sub-phase 2</option>
        <option value="subphase3">Sub-phase 3</option>
      </select>
    </div>
    <div class="form-group">
      <label for="monday">Monday</label>
      <input type="number" name="monday" id="monday" min="15" max="480" step="15">
    </div>
    <div class="form-group">
      <label for="tuesday">Tuesday</label>
      <input type="number" name="tuesday" id="tuesday" min="15" max="480" step="15">
    </div>
    <div class="form-group">
      <label for="wednesday">Wednesday</label>
      <input type="number" name="wednesday" id="wednesday" min="15" max="480" step="15">
    </div>
    <div class="form-group">
      <label for="thursday">Thursday</label>
      <input type="number" name="thursday" id="thursday" min="15" max="480" step="15">
    </div>
    <div class="form-group">
      <label for="friday">Friday</label>
      <input type="number" name="friday" id="friday" min="15" max="480" step="15">
    </div>
    <div class="form-group">
      <label for="saturday">Saturday</label>
      <input type="number" name="saturday" id="saturday" min="15" max="480" step="15">
    </div>
    <div class="form-group">
      <label for="sunday">Sunday</label>
      <input type="number" name="sunday" id="sunday" min="15" max="480" step="15">
    </div>
    <div class="form-group">
      <button class="save-btn" type="submit">Save</button>
      <button class="prev-btn">Previous Week</button>
      <button class="next-btn">Next Week</button>
    </div>
  </form>
  
  `

    return res;
}