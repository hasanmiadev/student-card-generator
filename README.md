# Student Card Generator

The Student Card Generator is a web application designed to simplify the process of generating student identification cards for educational institutions. It provides a digital solution for managing student information and producing printable card templates.


## Features

- Add, edit, and delete student information, including name, student ID, program, and photo.
- Create customizable card templates with placeholders for student information.
- Generate individual student cards by populating the card templates with student details.
- Download and print the generated student cards in a printable format.
- Bulk card generation for generating multiple student cards at once.
- Search and filter options for easy retrieval of student records.

## API Endpoints
#### The following API endpoints are available:
- GET /api/students: Retrieve a list of all student records.
- GET /api/students/:id: Retrieve a specific student record by ID.
- POST /api/students: Create a new student record.
- PUT /api/students/:id: Update an existing student record.
- DELETE /api/students/:id: Delete a specific student record.
- POST /api/card-templates: Create a new card template.
- GET /api/card-templates/:id: Retrieve a specific card template by ID.
- GET /api/student-cards/:id: Generate a student card for a specific student ID.
- GET /api/student-cards/bulk: Generate student cards in bulk.

## Technologies Used
- Node.js
- Express.js
- JavaScript