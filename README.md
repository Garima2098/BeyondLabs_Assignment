# Resume Builder Application

This is a multi-step Resume Builder application built with React. The UI strictly follows the provided Figma design and allows users to build and preview their resume in an interactive and dynamic manner.

## 🚀 Features

- Upload a PDF/DOCS resume
- Step-by-step form with validation
- Dynamic addition/removal of skills and education
- Drag-and-drop of the Resume.
- Local storage support for data persistence
- Final summary page with resume download option

## 📝 Form Steps Breakdown

### 1. Upload Resume
- Users can upload a `.pdf` file.
- Uploaded resume is displayed on the summary page.
- Users can download their uploaded resume.

### 2. Basic Details
- Fields: **Name**, **Email**, **Phone**

### 3. Add Skills
- Add multiple skills dynamically
- Each skill includes:
  - Skill Name 
  - Experience Level (Beginner, Intermediate, Expert)
- Remove skills as needed

### 4. Education Details
- Add multiple entries dynamically
- Each entry includes:
  - Degree Name (Required)
  - University/College (Required)
  - Year of Completion 
- Remove education entries

### 5. Summary Page
- Displays all user-provided data in order
- Resume download link shown

## 🔧 Tech Stack

- **LocalStorage** for saving form data

## 📦 Installation

```bash
git clone https://github.com/Garima2098/BeyondLabs.git
cd my-app
npm install
npm start

