# Product Management Web Application

This project is a complete web application for managing products, developed with Express.js for the backend and React for the frontend.

## Technologies Used

- **Backend**: Express.js, Mongoose, Dotenv, Nodemon
- **Database**: MongoDB
- **Frontend**: React, React Icons

## Features

- Create, update, delete, and view products
- Database management with Mongoose and MongoDB
- Dynamic and responsive UI with React
- Interactive icons with React Icons
- Environment variable management with Dotenv
- Improved development experience with Nodemon

## Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Instructions

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/product-store-app.git
   cd product-store-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the project root
   - Add the necessary configurations, for example:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

4. **Start the application**
   ```sh
   npm run dev
   ```

## Usage
- Access the application at `http://localhost:5000`
- Interact with the UI to add, edit, or delete products

## Project Structure
```
.
├── backend
│   ├── config
│   ├── controller
│   │   ├── product.controller.js
│   ├── models
│   │   ├── product.model.js
│   ├── routes
│   │   ├── product.route.js
│   ├── server.js
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
```

## Dependencies
- Dotenv
- Express.js
- Mongoose
- React Icons
- Nodemon

## Author
- **Sfar Ahmed Khalil**

## License
This project is open-source.

## Shoutout
Special thanks to **burakorkmez** for their valuable resources and guidance!
