import { getAllPost } from "../../lib/api";
import PostList from "../../components/post-list";

export default async function PostPage() {
  const posts = await getAllPost();

  return (
    <div className="main-heading">
      <h1>Daftar Postingan</h1>
      <p className="subtitle">
        Berikut adalah semua postingan terbaru dari NextJS News.
      </p>
      <PostList posts={posts} />
    </div>
  );
}