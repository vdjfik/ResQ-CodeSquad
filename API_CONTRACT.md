## DATA MODELS:
```json
{
  "animal_type": "string",
  "title": "string",
  "description": "string",
  "location": "string",
  "status": "string",
  "images": ["string"],
  "contact": {
    "name": "string",
    "phone": "string",
    "email": "string"
  }
}
```
### 1. Get All Rescue Reports
**Feature:** Retrieve all active rescue reports.  
**HTTP Method:** GET  
**Endpoint Path:** `/api/reports`  
**Description:** Returns a list of all rescue reports in the system.

Success Response (200 OK)
```json
[
  {
    "id": 1,
    "animal_type": "Dog",
    "title": "Injured stray dog",
    "description": "Injured stray dog near Market Street.",
    "location": "Market Street, Sector 5",
    "status": "Active",
    "images": [],
    "contact": {
      "name": "John Doe",
      "phone": "+91-9876543210",
      "email": "john@example.com"
    },
    "created_at": "2025-08-10T14:30:00Z",
    "updated_at": "2025-08-10T14:30:00Z"
  }
]
```
Error Response (404 Not Found)
```json
{
  "error": "No reports found"
}
```
### 2. Create a New Rescue Report
**Feature:** Allow a user to submit a new rescue report.  
**HTTP Method:** POST  
**Endpoint Path:** `/api/reports`  
**Description:** Creates and stores a new rescue report in the system.  

Request Body
```json
{
  "animal_type": "Cat",
  "title": "Kitten stuck on rooftop",
  "description": "Small kitten trapped on the roof of a building.",
  "location": "Sunrise Apartments, Block C",
  "status": "Active",
  "images": ["https://example.com/image1.jpg"],
  "contact": {
    "name": "Jane Smith",
    "phone": "+91-9876543211",
    "email": "jane@example.com"
  }
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

### 3. Get a Single Rescue Report
**Feature:** Retrieve details of a specific rescue report.  
**HTTP Method:** GET  
**Endpoint Path:** `/api/reports/{id}`  
**Description:** Fetches the details of a report using its unique ID.  

Success Response (200 OK)
```json
{
  "id": 1,
  "animal_type": "Dog",
  "title": "Injured stray dog",
  "description": "Injured stray dog near Market Street.",
  "location": "Market Street, Sector 5",
  "status": "Active",
  "images": [],
  "contact": {
    "name": "John Doe",
    "phone": "+91-9876543210",
    "email": "john@example.com"
  },
  "created_at": "2025-08-10T14:30:00Z",
  "updated_at": "2025-08-10T14:30:00Z"
}
```
Error Response (404 Not Found)
```json
{
  "error": "Report not found"
}
```
### 4. Update Rescue Report
**Feature:** Update the details of an existing rescue report.  
**HTTP Method:** PUT  
**Endpoint Path:** `/api/reports/{id}`  
**Description:** Modifies an existing rescue report identified by {id}.  

Request Body (Example)
```json
{
  "animal_type": "Dog",
  "title": "Injured dog found",
  "description": "Dog treated and awaiting adoption.",
  "location": "Sector 5",
  "status": "Ongoing",
  "images": [],
  "contact": {
    "name": "Alex",
    "phone": "+91-9876543210",
    "email": "alex@example.com"
  }
}
```
Success Response (200 OK)
```json
{
  "message": "Report updated successfully",
  "report": {
    "id": 1,
    "animal_type": "Dog",
    "title": "Injured dog found",
    "description": "Dog treated and awaiting adoption.",
    "location": "Sector 5",
    "status": "Ongoing",
    "images": [],
    "contact": {
      "name": "Alex",
      "phone": "+91-9876543210",
      "email": "alex@example.com"
    },
    "created_at": "2025-08-10T09:12:00Z",
    "updated_at": "2025-08-11T14:20:00Z"
  }
}
```
Error Response (404 Not Found)
```json
{
  "error": "Report not found"
}
```
Error Response (400 Bad Request)
```json
{
  "error": "Invalid input data",
  "details": "status must be one of [\"Active\", \"Ongoing\", \"Resolved\", \"Closed\"]"
}
```
### 5. Delete Rescue Report
**Feature:** Remove a rescue report from the system.  
**HTTP Method:** DELETE  
**Endpoint Path:** `/api/reports/{id}`  
**Description:** Deletes the report with the given ID.  

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
