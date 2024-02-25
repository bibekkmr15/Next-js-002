// Import the `better-sqlite3` library to interact with the SQLite database
import sql from "better-sqlite3";

// Open the database file named "meals.db"
const db = sql("meals.db");

export async function getMeals() {
  // Simulate a short delay (2 seconds) for demonstration purposes
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // // Simulate a error for testing
  // throw new Error("an error occured");

  // Prepare an SQL statement to select all rows from the "meals" table
  // Execute the statement and return all retrieved meals as an array
  return db.prepare("SELECT * FROM meals").all();
}
