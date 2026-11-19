import type { ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";

interface BlogPost {
  date: string;
  dateTime: string;
  title: string;
  content: ReactNode;
}

const posts: BlogPost[] = [];

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <main id="main-content" className="blog container">
      <h1 className="page-title">{t.blog.title}</h1>
      <p className="lead">{t.blog.lead}</p>

      <section className="section" aria-labelledby="latest-posts-title">
        <h2 id="latest-posts-title" className="label">
          {t.blog.latest}
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
          <p className="empty">{t.blog.empty}</p>
        )}
      </section>
    </main>
  );
}
