1. Get All Rescue Reports:
Feature: Retrieve all active emergency reports.
HTTP Method: GET
Endpoint Path: /api/reports
Description: Returns a list of all emergency reports in the system.

2. Create a New Rescue Report:
Feature: Allow a user to submit a new emergency report.
HTTP Method: POST
Endpoint Path: /api/reports
Description: Creates and stores a new emergency report in the system.

3. Get a Single Rescue Report:
Feature: Retrieve details of a specific emergency report.
HTTP Method: GET
Endpoint Path: /api/reports/{id}
Description: Fetches the details of a report using its unique ID.

5. Delete Rescue Report:
Feature: Remove an emergency report from the system.
HTTP Method: DELETE
Endpoint Path: /api/reports/{id}
Description: Deletes the report with the given ID.

Examples: 
1. Get All Rescue Reports
Success Response (200 OK) 
```json
[
  {
    "id": 1,
    "animal_type": "Dog",
    "description": "Injured stray dog near Market Street.",
    "location": "Market Street, Sector 5",
    "status": "Active",
    "reported_by": "John Doe",
    "reported_at": "2025-08-10T14:30:00Z"
  }
]
```
Error Response (404 Not Found)
```json
{
  "error": "No reports found"
}
```
2. Create a New Rescue Report
Request Body
```json
{
  "animal_type": "Cat",
  "description": "Kitten stuck on rooftop.",
  "location": "Sunrise Apartments, Block C",
  "reported_by": "Jane Smith"
}
```

Success Response (201 Created)
```json
{
  "message": "Report created successfully",
  "reportId": 1
}
```
Error Response (400 Bad Request)
```json
{
  "error": "Invalid input data"
}
```
3. Get a Single Rescue Report
Success Response (200 OK)
```json
{
  "id": 1,
  "animal_type": "Dog",
  "description": "Injured stray dog near Market Street.",
  "location": "Market Street, Sector 5",
  "status": "Active",
  "reported_by": "John Doe",
  "reported_at": "2025-08-10T14:30:00Z"
}
```
Error Response (404 Not Found)
```json
{
  "error": "Report not found"
}
```

4. Update Rescue Report
Request Body
```json
{
  "animal_type": "Dog",
  "description": "Dog treated and awaiting adoption.",
  "status": "Ongoing"
}
```

Success Response (200 OK)
```json
{
  "message": "Report updated successfully"
}
```
Error Response (404 Not Found)
```json
{
  "error": "Report not found"
}
```

5. Delete Rescue Report
Success Response (200 OK)
```json
{
  "message": "Report deleted successfully"
}
```
Error Response (404 Not Found)
```json
{
  "error": "Report not found"
}
```
