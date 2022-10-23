import { BlogPost } from 'pages/blog';
import Card from '../Card';

type BlogPostsProps = { data: BlogPost[] };

const BlogPosts: React.FC<BlogPostsProps> = ({ data }) => (
  <div className="container py-8" id="blog">
    <h2 className="text-2xl md:text-4xl font-bold mb-1">Recent Posts</h2>
    <span className="bg-black inline-block h-0.5 w-20 rounded bg-accent mb-8" />
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
      {data?.map((post: BlogPost) => {
        if (!post) return null;
        return <Card key={post.content} data={post} />;
      })}
    </div>
  </div>
);

export default BlogPosts;
