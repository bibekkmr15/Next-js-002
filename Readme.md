# Next.js Project - Meal Sharing App

## Project Overview

- The goal of this project is to create a web application for sharing and exploring meal details.
- Users can add their favorite recipes, view meal details, and interact with the community.
- The application is built using Next.js, a React framework known for its simplicity and efficiency in building modern web applications.

## Key Features:

- **Share Meal Page:** Allows users to add new meals, including details such as title, summary, instructions, and images. The input form is equipped with server-side validation to ensure data integrity.
- **Meals Page:** Displays a list of meals, each linking to its details page. The page includes static and dynamic metadata for improved SEO.
- **Meal Details Page:** Provides detailed information about a specific meal, dynamically generated using routes.
- **Image Handling:** Supports image uploads for meal details, with features like image preview, custom image picker input, and image optimization using Next.js Image component.
- **Database Integration:** Utilizes an SQLite database to store meal data, enhancing data persistence and retrieval.

## Additional Features:

- **Dynamic routes**: Each meal has its own dedicated page using dynamic routing.
- **Form validation**: Server-side validation ensures data integrity and user feedback.
- **Image Handling**: Uploads and stores images associated with meals.
- **Database integration**: Uses SQLite database for persisting meal data.
- **Error handling**: Handles errors gracefully and displays informative messages.
- **Loading states**: Enhances user experience with loading indicators during data fetching.
- **Customization**: Leverages custom components for reusability and maintainability.
- **Styling**: Employs CSS Modules for component-scoped styling.
- **Navigation**: Highlights the active navigation path for clarity.
- **Image optimization**: Utilizes Next.js Image component for efficient image handling.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:

   ```bash
   npm run dev
   ```

5. Visit http://localhost:3000 in your browser or follow the console instruction to experience the application.
