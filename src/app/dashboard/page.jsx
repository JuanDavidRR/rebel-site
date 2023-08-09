"use client";
import React, { useEffect, useState } from "react"; // Import necessary modules
import styles from "./page.module.css"; // Import CSS styles
import useSWR from "swr"; // Import the SWR library for data fetching
import { useSession } from "next-auth/react"; // Import the useSession hook from next-auth/react
import { useRouter } from "next/navigation"; // Import the useRouter hook from next/navigation
import Image from "next/image"; // Import the Image component from Next.js
import { AiFillDelete } from "react-icons/ai"; // Import the delete icon from React Icons
import { HiOutlineRefresh } from "react-icons/hi"; // Import the refresh icon from React Icons

const Dashboard = () => {
  const session = useSession(); // Use the useSession hook to access the user's session

  const router = useRouter(); // Use the useRouter hook for navigation

  const [selectedPost, setSelectedPost] = useState(false); // State to track the selected post

  // Function to fetch data using the SWR library
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // Use the SWR hook to fetch data from the API endpoint
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  // Loading state: If session status is loading, show a loading message
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  // Unauthenticated state: If session status is unauthenticated, redirect to login page
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  // Function to handle form submission for creating a new post
  const handleSubmit = async (e, id) => {
    e.preventDefault();

    // Extract form field values
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    // Make an API call to create a new post
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate(); // Refresh data using SWR
      e.target.reset(); // Reset the form
    } catch (err) {
      console.log(err);
    }
  };

  // Function to handle deleting a post
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate(); // Refresh data using SWR
    } catch (err) {
      console.log(err);
    }
  };

  // Function to handle updating a post
  const handleUpdate = async (id) => {
    // Extract updated values from form fields
    const title = document.getElementById("name").value;
    const desc = document.getElementById("description").value;
    const img = document.getElementById("image").value;
    const content = document.getElementById("content").value;

    // Make an API call to update the post
    const res = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        desc,
        img,
        content,
        username: session.data.user.name,
      }),
    });

    // Check the status of the response and display appropriate alert
    if (res.status === 200) {
      alert("Post updated successfully");
      setSelectedPost(false); // Clear the selected post
    } else {
      alert("An error occurred while updating the post");
    }
  };

  // Function to select a post for editing
  const selectPostToEdit = (id) => {
    // Get the post from the data array
    const post = data.find((p) => p._id === id);

    // Set the values of the form fields to the values of the selected post
    document.getElementById("name").value = post.title;
    document.getElementById("description").value = post.desc;
    document.getElementById("image").value = post.img;
    document.getElementById("content").value = post.content;
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          <h2 className={styles.title}>Your posts</h2>
          {isLoading ? (
            "loading"
          ) : data && data.length > 0 ? (
            data.map((post) => (
              <div
                onClick={() => selectPostToEdit(post._id)}
                className={styles.post}
                key={post._id}
              >
                <div className={styles.imgContainer}>
                  <Image
                    src={post.img}
                    className={styles.image}
                    alt=""
                    width={120}
                    height={75}
                  />
                </div>
                <p className={styles.postTitle}>{post.title}</p>
                <div className={styles.actions}>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    <AiFillDelete />{" "}
                  </span>
                  <span
                    className={styles.delete}
                    onClick={() => handleUpdate(post._id)}
                  >
                    <HiOutlineRefresh />
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>You do not have posts created. Create one now using the form</p>
          )}
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Add New Post</h1>
          <div className={styles.formItem}>
            <label htmlFor="name">Title</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Title"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="Description"
              placeholder="Lorem Ipsum description"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formItem}>
            <label htmlFor="description">Image (URL)</label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Lorem Ipsum description"
              className={styles.input}
              required
            />
          </div>{" "}
          <div className={styles.formItem}>
            <label htmlFor="content">Content</label>

            <textarea
              id="content"
              placeholder="Content"
              className={styles.textArea}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className={styles.button}>CREATE NEW POST</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
