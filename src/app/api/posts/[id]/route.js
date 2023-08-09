// Import necessary modules and packages
import { NextResponse } from "next/server"; // Import NextResponse for handling responses
import connect from "@/utils/db"; // Import the database connection function
import Post from "@/models/Post"; // Import the Post model

// Handler for GET request
export const GET = async (request, { params }) => {
  const { id } = params; // Extract the 'id' parameter from the request

  try {
    await connect(); // Establish a connection to the database

    const post = await Post.findById(id); // Retrieve a Post document by its ID

    return new NextResponse(JSON.stringify(post), { status: 200 }); // Respond with the retrieved Post as JSON
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 }); // Handle and respond with a database error status
  }
};

// Handler for DELETE request
export const DELETE = async (request, { params }) => {
  const { id } = params; // Extract the 'id' parameter from the request

  try {
    await connect(); // Establish a connection to the database

    await Post.findByIdAndDelete(id); // Delete a Post document by its ID

    return new NextResponse("Post has been deleted", { status: 200 }); // Respond with a success message
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 }); // Handle and respond with a database error status
  }
};

// Handler for PUT request
export const PUT = async (request, { params }) => {
  const { id } = params; // Extract the 'id' parameter from the request
  const body = await request.json(); // Parse the JSON body of the request

  try {
    await connect(); // Establish a connection to the database

    await Post.findByIdAndUpdate(id, body); // Update a Post document by its ID with the provided data

    return new NextResponse("Post has been updated", { status: 200 }); // Respond with a success message
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 }); // Handle and respond with a database error status
  }
}