async function getPosts() {
  const res = await fetch(`${process.env.BACKEND_URL}/posts?limit=6`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getPost(slug: string) {
  const res = await fetch(`${process.env.BACKEND_URL}/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export { getPosts, getPost };
