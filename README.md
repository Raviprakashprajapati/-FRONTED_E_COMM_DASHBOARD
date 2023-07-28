# -FRONTED_E_COMM_DASHBOARD


This part of project  is an Ecommerce web application built using React.js for the frontend. It provides various components for user authentication, product management, and user profile functionality. The user data, including user details and product information, is stored in MongoDB Atlas cloud for secure and reliable data storage.


All FUNCTIONALITY---------



This frontend Ecommerce application aims to provide users with the ability to perform CRUD (Create, Read, Update, Delete) operations on products. Users can sign up or log in to their accounts, add new products, update existing products, view a list of all products, and search for specific products. Additionally, the application includes a user profile section to manage account information.


Features-------------------


User Authentication: Users can sign up and log in to their accounts using email and password.


Product Management: Authenticated users can add new products and update existing products.


Product List: Users can view a paginated list of all available products.


Product Search: Users can search for specific products based on keywords.


User Profile: The user profile section allows users to view and edit their account information.


Prerequisites


Before running the application, ensure you have the following installed:


Installation------


Clone this repository to your local machine.


Navigate to the project directory using the terminal or command prompt.


Run the following command to install the required dependencies:


Copy code


npm install



Configuration


The frontend application communicates with the backend API for user authentication and product management. Update the backend API URL in the src/api.js file to point to your backend server.



Project Structure
The project follows a well-organized structure for better maintainability:

ecommerce-frontend/


  ├── src/

  
  │   ├── components/

  
  │   │   ├── Auth/

  
  │   │   │   ├── Login.js

  
  │   │   │   ├── Signup.js

  
  │   │   │   └── UserProfile.js

  
  │   │   ├── Product/

  
  │   │   │   ├── AddProduct.js



  │   │   │   ├── ProductList.js

  
  │   │   │   └── UpdateProduct.js

  
  │   │   └── Search/

  
  │   │       └── ProductSearch.js
  │   ├
  │   └── App.js

  
  ├── index.js

  
  ├── package.json

  
  └── README.md



Usage
Ensure that the backend server is up and running and properly configured in src/api.js.


Start the application by running the following command:


Copy code
npm start


The application will open in your default web browser at ===> https://ecommercedashboardfronted.netlify.app/signup
Users can now interact with the application, perform CRUD operations on products, and manage their profiles.


Contributing
Contributions to this project are welcome! If you find any issues or want to add new features, feel free to submit a pull request.





