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
    <main
      id="main-content"
      className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 md:px-10 md:py-24"
    >
      <h1 className="mb-4 text-5xl leading-[1] font-bold tracking-tight md:text-6xl">
        Blog
      </h1>
      <p className="max-w-xl text-lg leading-relaxed font-light text-ink/75 dark:text-white/75">
        Notes on design, development, and the things I'm learning.
      </p>

      <section
        className="mt-14 border-t border-ink/10 pt-8 dark:border-white/10"
        aria-labelledby="latest-posts-title"
      >
        <h2
          id="latest-posts-title"
          className="mb-8 font-mono text-xs font-bold tracking-widest text-rose uppercase dark:text-rose-light"
        >
          Latest posts
        </h2>
        {posts.length > 0 ? (
          <ol className="divide-y divide-ink/10 dark:divide-white/10">
            {posts.map((post) => (
              <li key={post.dateTime} className="py-8 first:pt-0">
                <article className="grid gap-2 md:grid-cols-[10rem_1fr] md:gap-8">
                  <time
                    dateTime={post.dateTime}
                    className="text-sm text-ink/50 dark:text-white/50"
                  >
                    {post.date}
                  </time>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      {post.title}
                    </h3>
                    <div className="mt-3 leading-relaxed font-light">
                      {post.content}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <p className="font-light text-ink/60 dark:text-white/60">
            No posts yet.
          </p>
        )}
      </section>
    </main>
  );
}
