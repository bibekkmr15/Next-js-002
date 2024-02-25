// Import the `better-sqlite3` library to interact with the SQLite database
import sql from "better-sqlite3";

// Open the database file named "meals.db"
const db = sql("meals.db");

// Asynchronous function to retrieve all meals from the database
export async function getMeals() {
  // Simulate a short delay (2 seconds) for demonstration purposes
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // // Simulate a error for testing
  // throw new Error("an error occured");

  // Prepare an SQL statement to select all rows from the "meals" table
  // Execute the statement and return all retrieved meals as an array
  return db.prepare("SELECT * FROM meals").all();
}

// Function to retrieve meal from the database where the "slug" column matches the provided `slug` parameter
export function getMeal(slug) {
  // Prepare an SQL statement to select all columns (*) from the "meals" table where the "slug" column matches the provided `slug` parameter
  // Execute the prepared statement with the provided `slug` parameter and return the retrieved meal as an object
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
