import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
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

// Function to save a meal
export async function saveMeal(meal) {
  // Generate a slug for the meal based on its title
  meal.slug = slugify(meal.title, { lower: true });
  // Sanitize instructions to prevent cross-site scripting (XSS) attacks
  meal.instructions = xss(meal.instructions);

  // Extract file extension from the image name
  const extension = meal.image.name.split(".").pop();
  // Create a unique filename for the saved image using the meal's slug
  const fileName = `${meal.slug}.${extension}`;

  // Create a write stream to save the image to the 'public/images' directory
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  // Convert image data to a buffered format
  const bufferedImage = await meal.image.arrayBuffer();

  // Write the buffered image data to the file stream
  stream.write(Buffer.from(bufferedImage), (error) => {
    // Handle errors during the image saving process
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  // Update the meal object with the path to the saved image
  meal.image = `/images/${fileName}`;

  // Insert the meal data into the 'meals' table in the database
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
