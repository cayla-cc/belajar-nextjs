import { Post } from "@/types/post";

export async function getLastPost(): Promise<Post[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    if (!res.ok) return [];
    const posts: Post[] = await res.json();
    return posts;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return [];
  }
}

export async function getAllPost(): Promise<Post[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) return [];
    const posts: Post[] = await res.json();
    return posts;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return [];
  }
}

export async function getDetailPost(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();
  return post;
}