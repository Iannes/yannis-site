import React, { useState } from 'react';
import Link from 'next/link';
import { formatDate } from 'utils/formatDate';
import { BlogPost } from 'pages/blog';
import { ListLayoutHeader } from './ListLayoutHeader';

export default function ListLayout({ posts, initialDisplayPosts = [], pagination }: any) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post: BlogPost) => {
    const searchContent = post.data.title;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <ListLayoutHeader onChange={handleSearch} text="All Posts" />
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((post: BlogPost) => {
            const { content } = post;
            const { date, title, categories } = post?.data;
            const slug = getSlug(post);
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="mb-1 text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/posts/${slug}`} className="text-gray-900 dark:text-gray-100" passHref>
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {categories.map((category: string) => (
                          <span key={category} className="mr-3 text-sm font-medium uppercase text-teal-500">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">{content}</div>
                    <div className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 leading-6">
                      <Link href={`/posts/${slug}`} aria-label={`Read "${title}"`}>
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {/* {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )} */}
    </div>
  );
}

const getSlug = (post: BlogPost) => post.filePath.replace(/\.mdx?$/, '');
