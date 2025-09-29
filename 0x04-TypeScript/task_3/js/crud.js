// task_3/js/crud.js

export function insertRow(student) {
  console.log("Insert row", student);
  return Math.floor(Math.random() * 1000); // return a fake ID
}

export function deleteRow(rowId) {
  console.log("Delete row id", rowId);
}

export function updateRow(rowId, student) {
  console.log(`Update row ${rowId}`, student);
  return rowId;
}

