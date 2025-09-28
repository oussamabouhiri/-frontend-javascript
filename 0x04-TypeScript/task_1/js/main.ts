interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  location: "Paris"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();
  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

