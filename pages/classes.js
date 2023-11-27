import classes from "../School-information/class-data.js";
function template(){
    return classes.map(classList =>`
    <div class="wrapper">
        <button type="button" id="edit"><i class="fa fa-regular fa-pen-to-square"></i></button>
        <button type="button" id="remove"><i class="fa fa-regular fa-circle-minus"></i></button> 
        <h2>${classList.name}</h2>
        <p> Teacher IDS: ${classList.teacherIds.join(" ,")}</p>
        <button type="button" id="students">Students</button>
            <button type="button" id="teachers">Teachers</button>

}
`).join('');
}
const classesTemplate = template(classes);
export default classesTemplate