Here's a detailed README file to guide the setup and running of the railway management system:

---

# Railway Management System

A railway management system built with Node.js, Express, and MySQL. It allows users to register, log in, check train availability, book seats, and view booking details. Admins can add new trains and manage seat availability.

## Features

- User Registration and Login
- Role-Based Access Control
- Add New Trains (Admin)
- Check Seat Availability
- Book Seats
- View Booking Details

## Tech Stack

- Backend: Node.js, Express.js
- Database: MySQL
- ORM: Sequelize
- Authentication: JWT (JSON Web Tokens)

## Requirements

- Node.js (>= 14.x)
- MySQL

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/railway-management-system.git
cd railway-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up the Database

Make sure you have MySQL installed and running. Create a database named `railway_management`.

```sql
CREATE DATABASE railway_management;
```


### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=railway_management
JWT_SECRET=your_jwt_secret
PORT=3000
```

### 5. Run Database Migrations

To create the necessary tables, run the Sequelize sync command:

```javascript
// Add this script at the end of app.js to sync models with the database
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
```

### 6. Start the Server

```bash
npm start
```

The server will start on the port specified in the `.env` file (default: 3000).

## API Endpoints

### Auth Routes

- **Register a User**

  ```
  POST /auth/register
  ```

  **Request Body:**

  ```json
  {
    "username": "example",
    "password": "password",
    "role": "user"  // "admin" for admin users
  }
  ```

- **Login a User**

  ```
  POST /auth/login
  ```

  **Request Body:**

  ```json
  {
    "username": "example",
    "password": "password"
  }
  ```

### Train Routes

- **Add a New Train (Admin Only)**

  ```
  POST /trains/
  ```

  **Headers:**

  ```
  Authorization: Bearer <admin_token>
  ```

  **Request Body:**

  ```json
  {
    "name": "Train Name",
    "source": "Source Station",
    "destination": "Destination Station",
    "totalSeats": 100
  }
  ```

- **Get Seat Availability**

  ```
  GET /trains/availability
  ```

  **Query Parameters:**

  ```
  source: Source Station
  destination: Destination Station
  ```

### Booking Routes

- **Book a Seat**

  ```
  POST /bookings/
  ```

  **Headers:**

  ```
  Authorization: Bearer <user_token>
  ```

  **Request Body:**

  ```json
  {
    "trainId": 1
  }
  ```

- **Get Booking Details**

  ```
  GET /bookings/
  ```

  **Headers:**

  ```
  Authorization: Bearer <user_token>
  ```

---

By following these instructions, you should be able to set up and run the railway management system on your local machine.

