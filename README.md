# AI Job Board

A full-stack Job Board application built using React, Spring Boot, MySQL, Railway, and Vercel.

## Live Demo

### Frontend

https://job-board-ai-phi.vercel.app

### Backend API

https://job-board-ai-production-65bc.up.railway.app/api/jobs

### GitHub Repository

https://github.com/dasaprasad/job-board-ai

---

## Features

* View all jobs
* Post new jobs
* View job details
* Apply for jobs
* MySQL database integration
* RESTful API
* Responsive frontend UI
* CI/CD using GitHub Actions
* Cloud deployment using Railway and Vercel

---

## Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* Axios

### Backend

* Spring Boot
* Spring Data JPA
* Spring Security
* Hibernate

### Database

* MySQL

### Deployment

* Railway (Backend + MySQL)
* Vercel (Frontend)

### CI/CD

* GitHub Actions

---

## Project Structure

```text
job-board-ai
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── application.properties
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── .github
    └── workflows
        └── ci.yml
```

## API Endpoints

### Jobs

```http
GET /api/jobs
```

Get all jobs.

```http
POST /api/jobs
```

Create a new job.

```http
GET /api/jobs/{id}
```

Get a job by ID.

```http
DELETE /api/jobs/{id}
```

Delete a job.

---

## Run Locally

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Deployment

### Railway

* Spring Boot Backend
* MySQL Database

### Vercel

* React Frontend

---

## CI/CD Pipeline

GitHub Actions automatically:

* Builds Spring Boot backend
* Builds React frontend
* Verifies successful compilation on every push to the main branch

---

## Author

Prasad D

GitHub:
https://github.com/dasaprasad
