import { Student } from "./models.js";
import { fetchStudents } from "./database.js";
import {
  calculateClassAverage,
  findTopStudent,
  filterStudents
} from "./analytics.js";

console.log("Fetching data");  //2sn beklemeez hemen çalışır

fetchStudents((rawData) => {
  console.log("Data received"); //2sn sonra çalışır

  const students = rawData.map(s => new Student(s.id, s.name, s.courses));

  console.log("");
  console.log("Testing Immutability:");
  console.log("Original ID: " + students[0].id);
  console.log("Attempting to change ID to 999");
   
  try {
    students[0].id = 999;
  } catch (err) {
    // id degistirilemiyor, hata veriyor
  }

  console.log("Final ID: " + students[0].id + " (ID did not change)");

  // rapor
  console.log("");
  console.log("Analytics Report");

  const avg = calculateClassAverage(students, 101);
  console.log("Class Average for Course 101: " + avg.toFixed(2));

  const top = findTopStudent(students);
  console.log(`Top Student: ${top.name} (Average: ${top.getAverage()})`);

  const result = filterStudents(students, function (student) {
    const found = student.courses.filter(c => c.courseId === 102);
    return found.length > 0;
  });

  const names = result.map(s => s.name);
  console.log("Students in Course 102: " + names.join(", "));
});
