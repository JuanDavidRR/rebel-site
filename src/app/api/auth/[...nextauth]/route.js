// Import necessary modules and packages
import NextAuth from "next-auth"; // Import the NextAuth library
import GoogleProvider from "next-auth/providers/google"; // Import the Google authentication provider
import CredentialsProvider from "next-auth/providers/credentials"; // Import the custom credentials authentication provider
import User from "@/models/User"; // Import the User model
import connect from "@/utils/db"; // Import the database connection function
import bcrypt from "bcryptjs"; // Import the bcrypt library for password hashing

// Define a handler function using NextAuth
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials", // Identifying the provider for authentication (Id, Name)
      name: "Credentials",
      async authorize(credentials) {
        //Check if the user exists.
        await connect(); // Establish a connection to the database

        try {
          // Find a user with the provided email in the database
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            // Compare the provided password with the hashed password stored in the database
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user; // Return the user object if authentication is successful
            } else {
              throw new Error("Wrong Credentials!"); // Throw an error if password is incorrect
            }
          } else {
            throw new Error("User not found!"); // Throw an error if user is not found
          }
        } catch (err) {
          throw new Error(err); // Handle and re-throw any errors that occur during authorization
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // The client ID for Google OAuth
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // The client secret for Google OAuth
    }),
  ],
  pages: {
    error: "/dashboard/login", // Redirect to this page in case of authentication errors
  },
});

// Export the handler function with different HTTP methods
export { handler as GET, handler as POST };
