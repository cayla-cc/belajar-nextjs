import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string; // Tetap dibutuhkan untuk data, tapi tidak ditampilkan di sini
}

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return <p className="subtitle">Belum ada postingan yang tersedia.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <article key={post.id} className="post-item">
          {/* Judul dibungkus Link ke /post/[id] */}
          <h2>
            <Link href={`/post/${post.id}`}>
              {post.title}
            </Link>
          </h2>

          {/* --- BARIS INI DIHAPUS --- */}
          {/* <p>{post.body.substring(0, 150)}...</p> */} 
          {/* ------------------------- */}

          {/* Link opsional: "Baca Selengkapnya" */}
          <Link href={`/post/${post.id}`} className="read-more">
            Baca Selengkapnya &rarr;
          </Link>
        </article>
      ))}
    </div>
  );
}