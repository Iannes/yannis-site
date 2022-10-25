import Link from 'next/link';
import { Post } from 'utils/mdx-utils';

type NavigationControlProps = {
  postInfo: Post;
  text: string;
};

type NavigationControlsProps = {
  prev: Post;
  next: Post;
};

export const NavigationControl: React.FC<NavigationControlProps> = ({ postInfo, text }) => {
  return (
    <div>
      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">{text}</h2>
      <div className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400">
        <Link href={`/posts/${postInfo.slug}`}>{postInfo.title}</Link>
      </div>
    </div>
  );
};

export const NavigationControls: React.FC<NavigationControlsProps> = ({ prev, next }) => {
  return next || prev ? (
    <nav className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
      {prev && <NavigationControl postInfo={prev} text="Previous Article" />}
      {next && <NavigationControl postInfo={next} text="Next Article" />}
    </nav>
  ) : null;
};
