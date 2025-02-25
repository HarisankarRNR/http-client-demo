# Angular HTTP Client Task

## Task Description
This task involves implementing an HTTP Client in an Angular application using **Angular 17+ Standalone API**. The following functionalities are required:

1. **Fetch Users**: Retrieve a list of users from a public API (e.g., JSONPlaceholder) and display them in a component.
2. **Add User**: Implement a feature to add a new user to the list using a `POST` request.
3. **Edit User**: Provide an edit button for each user to update their details using a `PUT` request.
4. **Delete User**: Implement a delete button to remove a user from the list using a `DELETE` request.

## Implementation Details
The application is built using **Angular 17.3.12** with the **Standalone API approach**. The implementation includes:

- **User Service**: Handles API calls for fetching, adding, updating, and deleting users.
- **User Component**: Displays the list of users and provides UI for adding, editing, and deleting users.
- **Reactive Forms**: Used for user input and form handling.
- **Observables & HTTP Client**: Utilized for asynchronous data fetching and updates.

## Technologies Used
- Angular 17.3.12 (Standalone API)
- TypeScript
- Angular HTTP Client
- RxJS Observables
- JSONPlaceholder API (Mock API)

## How to Run
1. Install dependencies:
   ```sh
   git clone <repo-url>
   cd <repo>
   npm install
   ```
2. Start the development server:
   ```sh
   ng serve
   ```

## API Endpoints Used
- Fetch Users: `GET https://jsonplaceholder.typicode.com/users`
- Add User: `POST https://jsonplaceholder.typicode.com/users`
- Edit User: `PUT https://jsonplaceholder.typicode.com/users/{id}`
- Delete User: `DELETE https://jsonplaceholder.typicode.com/users/{id}`

## Features Implemented
✔ Fetch users from API  
✔ Display users in the UI  
✔ Add a new user using a form  
✔ Edit an existing user  
✔ Delete a user from the list  
