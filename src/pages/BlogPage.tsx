import type { ReactNode } from "react";

interface BlogPost {
  date: string;
  dateTime: string;
  title: string;
  content: ReactNode;
}

const posts: BlogPost[] = [];

export default function BlogPage() {
  return (
    <main id="main-content" className="blog container">
      <h1 className="page-title">Blog</h1>
      <p className="lead">
        Notes on design, development, and the things I'm learning.
      </p>

      <section className="section" aria-labelledby="latest-posts-title">
        <h2 id="latest-posts-title" className="label">
          Latest posts
        </h2>
        {posts.length > 0 ? (
          <ol>
            {posts.map((post) => (
              <li key={post.dateTime} className="post">
                <time dateTime={post.dateTime}>{post.date}</time>
                <article>
                  <h3>{post.title}</h3>
                  <div className="post-body">{post.content}</div>
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <p className="empty">No posts yet.</p>
        )}
      </section>
    </main>
  );
}
