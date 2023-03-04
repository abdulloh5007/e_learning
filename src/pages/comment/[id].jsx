import { Context } from "../../components/Context/Context";
import React, { useContext } from 'react'
import comments from "../../data/comments.json";

// export async function getStaticPaths() {
//   // Получить список постов из базы данных или API
//   const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .catch(err => console.log(err));

//   // Создать массив путей на основе ID каждого поста
//   const paths = posts.map(post => ({
//     params: { id: post.id.toString() }
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   // Получить пост по ID из базы данных или API
//   const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//     .then(res => res.json())
//     .catch(err => console.log(err));

//   return { props: { post } };
// }


import { useRouter } from "next/router";

export default function Comment({ comment }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{comment.title}</h1>
      <p>Author: {comment.id}</p>
      <p>Date: {comment.body}</p>
      <button onClick={() => router.back()}>Back</button>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const comment = await res.json();

  return {
    props: {
      comment,
    },
  };
}
