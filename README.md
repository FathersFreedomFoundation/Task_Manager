# Task_Manager# Task Manager API

A simple Task Manager API built with Node.js, Express, and MongoDB. This project allows users to create, update, and manage tasks, supporting task completion tracking and deletion. The API communicates with a MongoDB database to store task data, and it includes a frontend to interact with the API.

## Features

- Add new tasks
- Mark tasks as completed or incomplete
- Delete tasks
- View all tasks
- Persistent storage using MongoDB

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: HTML, CSS, JavaScript
- **Middleware**: CORS

## Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Set up MongoDB](https://www.mongodb.com/)

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/FathersFreedomFoundation/Task_Manager.git
    cd Task_Manager
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB database:
   - Replace the MongoDB connection string in the `index.js` file with your own connection string.
   
    ```javascript
    const dbURI = 'your-mongodb-connection-string';
    ```

4. Run the server:

    ```bash
    npm start
    ```

5. Access the application by navigating to `http://localhost:5000` in your browser.

## Usage

1. **Frontend Interaction**:
   - Add a task using the input field.
   - View, delete, or mark tasks as complete/incomplete directly in the frontend interface.

2. **API Endpoints**:
   - **GET** `/tasks`: Retrieve all tasks.
   - **POST** `/tasks`: Create a new task.
   - **PUT** `/tasks/:id`: Update task completion status.
   - **DELETE** `/tasks/:id`: Delete a task.

## Project Structure

```bash
.
├── public/
│   └── index.html        # Frontend HTML
├── index.js              # Main server-side logic
├── package.json          # Node.js dependencies and scripts
└── README.md             # Project documentation
