# PingCRM

**PingCRM** is a TypeScript-based web application built with React for the frontend and FastAPI for the backend. It serves as a lightweight customer relationship management (CRM) tool that allows users to manage contacts and organizations. The application features APIs for creating, reading, updating, and deleting both contacts and organizations, with a dynamic UI that adapts based on the entity type. It uses modern React patterns like modular components, dynamic forms, and data tables, while the FastAPI backend provides a performant, asynchronous REST interface. PingCRM is designed to be an efficient, developer-friendly CRM system ideal for small teams and demos.

## For Backend

### 1. **Create a virtual environment**

Run this command in your project directory:

```sh
python -m venv venv
```

### 2. **Activate the virtual environment**

- **On Windows (Command Prompt):**
  ```sh
  venv\Scripts\activate
  ```
- **On Windows (PowerShell):**
  ```sh
  venv\Scripts\Activate.ps1
  ```
- **On macOS/Linux:**
  ```sh
  source venv/bin/activate
  ```

### 3. **Install Dependencies**

Run the following command:

```sh
pip install -r requirements.txt
```

### Note:

**Make sure you're inside your virtual environment and in the project directory.**

### 4. **Run FastAPI Server**

Run:

```sh
uvicorn app.main:app --reload
```

## For FrontEnd

### Note:

**Make sure you're inside ping-crm-frontend**

### 1. **Run**

```sh
npm start
```

### 8. **Access URL**

#### Frontend: http://localhost:3000

#### Backend: http://127.0.0.1:8000

#### Swagger: http://127.0.0.1:8000/docs#/
