// Import necessary modules and packages
import { NextResponse } from "next/server"; // Import NextResponse from the next/server package for handling responses
import connect from "@/utils/db"; // Import the database connection function
import Post from "@/models/Post"; // Import the Post model

// Define the GET request handler
export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username"); // Extract the 'username' query parameter from the URL

  try {
    await connect(); // Establish a connection to the database

    // Retrieve posts from the database based on the 'username' query parameter
    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 }); // Return the posts as JSON response with a success status
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 }); // Handle and respond with a database error status
  }
};

// Define the POST request handler
export const POST = async (request) => {
  const body = await request.json(); // Parse the JSON body of the request

  const newPost = new Post(body); // Create a new Post instance using the parsed body

  try {
    await connect(); // Establish a connection to the database

    await newPost.save(); // Save the new Post instance to the database

    return new NextResponse("Post has been created", { status: 201 }); // Respond with a success message and status code indicating post creation
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 }); // Handle and respond with a database error status
  }
};