export function calculateClassAverage(students, courseId) {

    const notes = students.map(s => s.courses.find(c => c.courseId === courseId).grade)
    .filter(grade => grade !== undefined);  
    const toplam = notes.reduce((t, n) => t + n, 0);  
    return toplam / notes.length;  


    
}

export function findTopStudent(students) {
    return students.reduce((topStudent, currentStudent) => {
        return currentStudent.getAverage() > topStudent.getAverage() ? currentStudent : topStudent;
    }
    )}



export function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}