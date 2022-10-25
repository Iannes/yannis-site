import React, { useState } from 'react';
import { BlogPost } from 'pages/blog';
import { ListLayoutHeader } from './ListLayoutHeader';
import { PostsList } from './PostsList';

type ListLayoutProps = {
  posts: BlogPost[];
  initialDisplayPosts: BlogPost[];
  pagination: any;
};

const ListLayout: React.FC<ListLayoutProps> = ({ posts, initialDisplayPosts = [], pagination }) => {
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
        <PostsList filteredBlogPosts={filteredBlogPosts} displayPosts={displayPosts} />
      </div>
      {/* {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )} */}
    </div>
  );
};

export default ListLayout;
