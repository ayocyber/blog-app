import Image from "next/image";
import styles from "./singlepage.module.css";
import PostUser from "@/components/postUser.jsx/PostUser";
import { Suspense } from "react";
import { getPost, getPosts } from "@/lib/data";

const getData = async (slug)=>{
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
  if(!res.ok){
    throw new Error("Something went wrong")
  }

  return res.json()
}

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug)

  console.log('SinglePage params:', params); // Log the params to ensure slug is present

  // const post = await getPost(slug);

  if (!post) {
    console.error(`No post found with slug: ${slug}`); // Log an error if post is not found
  }

  return (
    <div className={styles.container}>
      {post?.img && (
        <div>
          <img src={post?.img} className={styles.img} />
        </div>
      )}
      <div className={styles.profile}>
        <h1>{post?.title}</h1>
        <div className={styles.info}>
          <div>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}
          </div>
          <div>
            <p>Published</p>
            <span>{post?.createdAt?.toString().slice(4, 16)}</span>
          </div>
        </div>
        <p className={styles.desc}>{post?.desc}</p>
      </div>
    </div>
  );
};

export default SinglePage;
