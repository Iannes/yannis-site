import Link from 'next/link';
import { Categories } from 'components/modules/Categories';
import { NavigationControls } from './NavigationControls';
import { Post } from 'utils/mdx-utils';

export type PostSidebarProps = {
  categories: string[];
  next: Post;
  prev: Post;
};

export const PostSidebar: React.FC<PostSidebarProps> = ({ categories, next, prev }) => {
  return (
    <aside className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
      <Categories categories={categories} />
      <NavigationControls next={next} prev={prev} />
      <div className="pt-4 xl:pt-8 text-teal-500 hover:text-teal-600 dark:hover:text-teal-400">
        <Link href="/blog">&larr; Back to the blog</Link>
      </div>
    </aside>
  );
};
