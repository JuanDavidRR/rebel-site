// Import necessary modules and packages
import User from "@/models/User"; // Import the User model
import connect from "@/utils/db"; // Import the database connection function
import bcrypt from "bcryptjs"; // Import the bcrypt library for password hashing
import { NextResponse } from "next/server"; // Import Next.js response utilities

// Define a POST function to handle user registration
export const POST = async (request) => {
  // Extract user data (name, email, password) from the request body
  const { name, email, password } = await request.json();

  // Establish a connection to the database
  await connect();

  // Hash the provided password using bcrypt
  const hashedPassword = await bcrypt.hash(password, 5);

  // Create a new User instance with the hashed password
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    // Save the new user to the database
    await newUser.save();

    // Return a success response with a status code of 201 (Created)
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    // Return an error response with a status code of 500 (Internal Server Error)
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
