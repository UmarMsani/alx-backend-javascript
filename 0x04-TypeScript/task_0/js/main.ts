// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to display the list of students in a table format
const displayStudents = (students: Student[]): void => {
  // Create table elements
  const table = document.createElement('table'); // Create a table element
  const tableHead = document.createElement('thead'); // Create a table head element
  const headRow = document.createElement('tr'); // Create a table row for the head
  const tableBody = document.createElement('tbody'); // Create a table body element

  // Create table headers
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td'); // Insert header for first name
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td'); // Insert header for location
  tableHead.insertAdjacentElement('beforeend', headRow); // Insert the head row into the table head

  // Loop through each student and create a table row for them
  for (const student of students) {
    const bodyRow = document.createElement('tr'); // Create a table row for the student
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`); // Insert first name into cell
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`); // Insert location into cell
    tableBody.insertAdjacentElement('beforeend', bodyRow); // Insert the body row into the table body
  }

  // Append table elements to the document body
  table.insertAdjacentElement('beforeend', tableHead); // Insert the table head into the table
  table.insertAdjacentElement('beforeend', tableBody); // Insert the table body into the table
  document.body.insertAdjacentElement('beforeend', table); // Insert the table into the document body
};

// Display the list of students in a table
displayStudents(studentsList);
