import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { logout } from '.././API/data.js';
import page from '../../node_modules/page/page.mjs';
import { getItemById } from '.././API/data.js';
 
 
 
 
const table = document.getElementById('output')
let rowsData = [];
 
 
export async function updateRow(ctx) {
 
  const data = { project, phase, subphase, monday, tuesday, wednesday, thursday, friday, saturday, sunday };
  const newRow = createRowTemp([data]);
  rowsData.push(newRow);
  render(rowsData, table);
 
}
 
 
 
function createRowTemp(rowsData) {
 
  
 
  const today = new Date().toLocaleDateString();
 
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toLocaleDateString();
 
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toLocaleDateString();
 
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
  const dayAfterTomorrowString = dayAfterTomorrow.toLocaleDateString();
 
  const inThreeDays = new Date();
  inThreeDays.setDate(inThreeDays.getDate() + 3);
  const inThreeDaysString = inThreeDays.toLocaleDateString();
 
  const inFourDays = new Date();
  inFourDays.setDate(inFourDays.getDate() + 4);
  const ininFourDaysString = inFourDays.toLocaleDateString();
 
  const inFiveDays = new Date();
  inFiveDays.setDate(inFiveDays.getDate() + 5);
  const ininFiveDaysString = inFiveDays.toLocaleDateString();
  const res = html`
    <table>
    <thead>
      <tr>
        <th>Project</th>
        <th>Phase</th>
        <th>Sub-Phase</th>
        <th>Monday ${yesterdayString}</th>
        <th>Tuesday ${today}</th>
        <th>Wednesday ${tomorrowString}</th>
        <th>Thursday ${dayAfterTomorrowString}</th>
        <th>Friday ${inThreeDaysString}</th>
        <th>Saturday ${ininFourDaysString}</th>
        <th>Sunday ${ininFiveDaysString}</th>
      </tr>
    </thead>
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
    </tr>
  `)} 
       
    </tbody>
  </table>`
 
 
  return res;
}