import {numberOfStudents, numberOfTeachers, NumberOfClasses} from "/modules/home.component.js";
function template(pNumberOfStudents, pNumberOfTeachers, pNumberOfClasses) {
    return `
    <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
      <div class="col">
      <div class="card card-body border-dark">
            <p class="card-text">${pCountedStudents}</p>
            <p>number of students</p>
      </div>
      </div>
      <div class="col">
      <div class="card card-body border-dark">
      <p class="card-text">${pCountedTeachers}</p>
      <p>number of teachers</p>
      </div>
    </div>
    <div class="col">
    <div class="card card-body border-dark">
    <p class="card-text">${pCountedClasses}</p>
    <p>number of classes</p>
    </div>
    </div>
    </div>
        `;
    
    }
    const homeTemplate = template(numberOfStudents,numberOfTeachers,NumberOfClasses);
    export default homeTemplate;