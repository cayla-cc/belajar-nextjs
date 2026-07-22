// Definisikan tipe Post secara langsung di sini
export interface Post {
  id: number;
  title: string;
  body: string;
}

export async function getLastPost(): Promise<Post[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await res.json();
    return data.slice(0, 3);
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return [];
  }
}

export async function getAllPost(): Promise<Post[]> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return [];
  }
}

export async function getDetailPost(id: number): Promise<Post | null> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Gagal mengambil data detail:", error);
    return null;
  }
}