import { BlogPost } from 'pages/blog';
import { ListItem } from '../ListItem';

type PostsListProps = {
  displayPosts: BlogPost[];
  filteredBlogPosts: BlogPost[];
};

export const PostsList: React.FC<PostsListProps> = ({ displayPosts, filteredBlogPosts }) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {!filteredBlogPosts.length && 'No posts found.'}
      {displayPosts.map((post: BlogPost) => {
        const { content } = post;
        const { date, title, categories } = post?.data;
        const slug = getSlug(post);
        return <ListItem key={slug} slug={slug} title={title} categories={categories} date={date} content={content} />;
      })}
    </ul>
  );
};

const getSlug = (post: BlogPost) => post.filePath.replace(/\.mdx?$/, '');
