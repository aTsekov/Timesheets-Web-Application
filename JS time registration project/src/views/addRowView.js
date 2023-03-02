import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { logout } from '.././API/data.js';
import page from '../../node_modules/page/page.mjs';
import { getItemById } from '.././API/data.js';
 
const table = document.getElementById('output');
let rowsData = []; //This is used to store the table rows.

// Flag to check if title row has been rendered
let isTitleRendered = false; //check if the table header row has been rendered.

export async function updateRow(ctx) {
  const data = { project, phase, subphase, monday, tuesday, wednesday, thursday, friday, saturday, sunday };
  const newRow = createRowTemp([data]);
  
  // If title has not been rendered yet, render it along with the first row
  if (!isTitleRendered) {
    rowsData.push(createTitleRowTemp()); // push the title row to the array only if it does not exists. 
    isTitleRendered = true;
  }


  
  rowsData.push(newRow); //Every time a new row is created it will be pushed to the array and then all rows will be rendered
  render(rowsData, table);
}

function createTitleRowTemp() {
  const today = new Date(); // get current date
  const dayOfWeek = today.getDay(); // get current day of the week.
  const dateStrings = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(); // make a new date.
    date.setDate(today.getDate() - dayOfWeek + i); //date = today's date - the day of the week(today) + i which itterates from Sunday to Saturday.
    const dateString = date.toLocaleDateString();
    dateStrings.push(dateString);
  }

  const res = html`
    
    <thead>
    
      <tr>
        
        <th>Project</th>
        <th>Phase</th>
        <th>Sub-Phase</th>
        <th>Monday ${dateStrings[1]}</th>
        <th>Tuesday ${dateStrings[2]}</th>
        <th>Wednesday ${dateStrings[3]}</th>
        <th>Thursday ${dateStrings[4]}</th>
        <th>Friday ${dateStrings[5]}</th>
        <th>Saturday ${dateStrings[6]}</th>
        <th>Sunday ${dateStrings[0]}</th>
      </tr>
    </thead>
    
  `;
  
  return res;
}

function createRowTemp(rowsData) {
  const res = html`
    <tbody>
    ${rowsData.map((rowData) => html`
    <tr>
      <td>${rowData.project.value}</td>
      <td>${rowData.phase.value}</td>
      <td>${rowData.subphase.value}</td>
      <td>${rowData.monday.value}</td>
      <td>${rowData.tuesday.value}</td>
      <td>${rowData.wednesday.value}</td>
      <td>${rowData.thursday.value}</td>
      <td>${rowData.friday.value}</td>
      <td>${rowData.saturday.value}</td>
      <td>${rowData.sunday.value}</td>
      <td><button>Edit</button></td>
    </tr>
  `)} 
    </tbody>
  `;
    return res;
}
