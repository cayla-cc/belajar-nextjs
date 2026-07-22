import { getLastPost } from "../lib/api";
import PostList from "../components/post-list";

export default async function Home() {
  const posts = await getLastPost();

  return (
    <div className="main-heading">
      <h1>Selamat Datang di NextJS News</h1>
      <p className="subtitle">
        Situs berita terupdate seputar perkembangan teknologi NextJS.
      </p>
      <PostList posts={posts} />
    </div>
  );
}