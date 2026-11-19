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
      className="mx-auto w-full max-w-3xl flex-1 px-8 py-12 md:py-20"
    >
        <p className="mb-3 text-sm font-medium tracking-wide text-red-500 uppercase">
          Writing
        </p>
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Notes &amp; thoughts</h1>
        <p className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
          Coming soon.
        </p>

        <section
          className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700"
          aria-labelledby="latest-posts-title"
        >
          <h2 id="latest-posts-title" className="mb-3 text-2xl font-bold">
            Latest posts
          </h2>
          {posts.length > 0 ? (
            <ol className="space-y-8">
              {posts.map((post) => (
                <li key={post.dateTime}>
                  <article>
                    <time
                      dateTime={post.dateTime}
                      className="text-sm text-gray-500 dark:text-gray-400"
                    >
                      {post.date}
                    </time>
                    <h3 className="mt-1 text-xl font-semibold">{post.title}</h3>
                    <div className="mt-3 font-light leading-relaxed">
                      {post.content}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          ) : (
            <p className="font-light text-gray-600 dark:text-gray-400">
              No posts published yet. Check back soon.
            </p>
          )}
        </section>
    </main>
  );
}
