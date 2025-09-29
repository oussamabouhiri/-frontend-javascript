// task_3/js/main.ts

import { Student } from "./interface";
import { insertRow, deleteRow, updateRow } from "./crud";

// Create a student
const student: Student = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
  location: "San Francisco",
};

// Insert student
const newRowID = insertRow(student);

// Update student
updateRow(newRowID, {
  firstName: "Oussama",
  lastName: "Bouhiri",
  age: 26,
  location: "Agadir",
});

// Delete student
deleteRow(newRowID);

