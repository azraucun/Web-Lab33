# Assignment 3

To run: node main.js

## Files
- models.js: Student class. I made the id read-only with Object.defineProperty.
- database.js: fetchStudents function. It waits 2 seconds with setTimeout and then gives the data to the callback.
- analytics.js: calculateClassAverage, findTopStudent and filterStudents functions.
- main.js: Gets the data, makes Student objects and prints the results.

## Challenges
- calculateClassAverage was the hardest part for me because every student has their own courses array.
- When I tried to change the id, I got an error. I used try/catch to fix it.
- The example output says Zeynep is the top student, but Ali has a higher average (87.5), so my code prints Ali.