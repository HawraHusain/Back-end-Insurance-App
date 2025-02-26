# Insurance Management App
## Description
This is a web-based application designed to manage insurance policies for users and companies. Users can register, login, and manage their insurance policies, while companies can offer and track insurance plans.
## Getting Started
### Links:
- **Deployed App**: [Visit the deployed app](https://your-app-url.com)
- **Project Planning (Trello)**: [Project Planning on Trello](https://trello.com/b/JfM6GYk9/insurance-management-app)
- **Backend Repository**: [Backend Repository on GitHub](https://github.com/HawraHusain/Back-end-Insurance-App.git)
- **Frontend Repository**: (https://github.com/HawraHusain/Front-end-Insurance-App.git)
### Prerequisites
- **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed.
- **MongoDB**: You need access to a MongoDB database (local or cloud-based).
### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/HawraHusain/Back-end-Insurance-App.git
  cd Back-end-Insurance-App,
  git clone https://github.com/HawraHusain/Front-end-Insurance-App.git
    cd cd Front-end-Insurance-App
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up your environment:
    Create a `.env` file with the following variables:
    ```plaintext
    MONGODB_URI=mongodb://your-mongo-uri
    JWT_SECRET=your-jwt-secret-key
    ```
4. Start the server:
    ```bash
    npm start
    ```
    ## Usage
- Visit `http://localhost:3000` in your browser to access the application.
- Log in with your credentials or sign up if you’re a new user.
- Manage insurance policies from the user dashboard.
![Screenshot](./path-to-screenshot.png)
## Technologies Used
- **React**: Frontend framework.
- **Express**: Backend framework.
- **MongoDB**: Database for storing user and insurance policy data.
- **JWT**: Authentication via JSON Web Tokens.
- **Axios**: For making HTTP requests.
- **Bcrypt**: For password hashing.
- **HTML**: for Structure.
- **CSS**: for styling.
## Next Steps / Planned Enhancements
1. **User Profile Management**: Implement the ability for users to update their profile information, including email, phone number, and password.
2. **Dashboard**: Add a user dashboard to provide an overview of the user's active policies, renewal dates, and more.
3. **Search Functionality**: Allow users to search for insurance policies by category (e.g., Health, Life, Travel).
4. **Responsive Design**: Improve the mobile responsiveness of the application to ensure a seamless experience across devices.
5. **User Notifications**: Implement a system for notifying users about important events, such as expiring policies or new offers.