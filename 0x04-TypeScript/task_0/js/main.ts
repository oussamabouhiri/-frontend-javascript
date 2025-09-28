// Define Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Oussama",
  lastName: "Bouhiri",
  age: 26,
  location: "Agadir",
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  location: "London",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

