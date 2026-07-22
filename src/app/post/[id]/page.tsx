import { getDetailPost } from "../../../lib/api";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = await getDetailPost(id);

  if (!post) {
    return <div className="main-heading"><h1>Postingan tidak ditemukan</h1></div>;
  }

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p className="meta">Diposting pada ID: {post.id}</p>
      <div className="content">
        <p>{post.body}</p>
      </div>
      <a href="/post" className="back-link">&larr; Kembali ke Daftar Post</a>
    </div>
  );
}