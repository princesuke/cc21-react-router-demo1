export async function fetchPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );

  return res.json();
}

export async function fetchPostDetail({ params }) {
  // https://jsonplaceholder.typicode.com/posts/${params.id}
}
