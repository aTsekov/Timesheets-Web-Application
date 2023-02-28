
import { html ,render} from '../../node_modules/lit-html/lit-html.js'
import{logout} from '.././API/data.js';
import page from '../../node_modules/page/page.mjs';


const table = document.getElementById('test')
const currentDate = new Date();
  const currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  
export async function updateRow(ctx){
    
    render(createRowTemp(currentDay),table)

}

function createRowTemp() {
    

    const today = new Date().toLocaleDateString();

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate()  -1);
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

    const res =html`
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
      <!-- Add rows for each project phase and sub-phase -->
      <tr>
        <td rowspan="2">Project A</td>
        <td rowspan="1">Phase 1</td>
        <td>Sub-Phase A</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
      </tr>
      
    </tbody>
  </table>`
          
    
    return res;
}
