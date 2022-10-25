import Link from 'next/link';
import { NavigationControl } from './NavigationControl';
import { Post } from 'utils/mdx-utils';

export type PostSidebarProps = {
  categories: string[];
  next: Post;
  prev: Post;
};

export const PostSidebar: React.FC<PostSidebarProps> = ({ categories, next, prev }) => {
  return (
    <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
      {categories && (
        <div className="py-4 xl:py-8">
          <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">categories</h2>
          <div className="flex flex-wrap">
            {categories.map((category: string) => (
              // <Category key={category} text={category} />
              <p
                className="mr-3 text-sm font-medium uppercase text-teal-500 hover:text-teal-600 dark:hover:text-teal-400"
                key={category}
              >
                {category}
              </p>
            ))}
          </div>
        </div>
      )}
      {(next || prev) && (
        <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
          {prev && <NavigationControl postInfo={prev} text="Previous Article" />}
          {next && <NavigationControl postInfo={next} text="Next Article" />}
        </div>
      )}
      <div className="pt-4 xl:pt-8 text-teal-500 hover:text-teal-600 dark:hover:text-teal-400">
        <Link href="/blog">&larr; Back to the blog</Link>
      </div>
    </div>
  );
};
