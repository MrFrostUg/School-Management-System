import classes from "../School-information/class-data.js";
import stundents from "../School-information/stundents.js";
import teachers from "../School-information/teachers.js";
const templateId = "home";
function countElements(elements){
    return elements.length;
}
const numberOfStudents = countElements(stundents);
const numberOfTeachers = countElements(teachers);
const NumberOfClasses = countElements(classes);
export {templateId, numberOfStudents, numberOfTeachers, NumberOfClasses};