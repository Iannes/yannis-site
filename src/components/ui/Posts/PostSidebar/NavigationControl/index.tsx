import Link from 'next/link';
import { Post } from 'utils/mdx-utils';

type NavigationControlProps = {
  postInfo: Post;
  text: string;
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
