import { Post, User } from "./model";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts:");
  }
};

export const getPost = async (slug) => {
  try {
    console.log('Slug:', slug); // Log the slug being passed
    connectToDb();
    const post = await Post.findOne({slug});
    console.log('Fetched post:', post); // Log the fetched post
    return post;
  } catch (error) {
    console.log('Error fetching post:', error); // Log any error
    throw new Error("Failed to fetch post:");
  }
};

export const getuser = async (id) => {
  try {
    connectToDb();
    const user = await User.findOne({id});
    console.log('Fetched user:', user); // Log the fetched user
    return user;
  } catch (error) {
    console.error('Error fetching user:', error.message, error.stack); // Log detailed error
    throw new Error("Failed to fetch user");
  }
};

export const getusers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users:");
  }
};
