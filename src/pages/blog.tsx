import Link from 'next/link';
import Layout from 'components/ui/Layout';
import SEO from 'components/SEO';
import Header from 'components/ui/theme/Header';
import { getPosts } from 'utils/mdx-utils';
import ListLayout from 'components/ui/ListLayout';

export const sortPostsByDate = (posts: BlogPost[]) => {
  return posts.sort((a: BlogPost, b: BlogPost) => {
    const aDate = new Date(a.data.date) as any;
    const bDate = new Date(b.data.date) as any;
    return bDate - aDate;
  });
};

export type BlogPost = {
  content: string;
  data: FrontMatterData;
  filePath: string;
};

export type FrontMatterData = {
  categories: string[];
  date: string;
  title: string;
};

type BlogProps = {
  posts: BlogPost[];
  initialDisplayPosts: [];
  pagination: any;
};

const Blog: React.FC<BlogProps> = ({ posts, initialDisplayPosts, pagination }) => {
  return (
    <>
      <Header page="blog" />
      <Layout>
        <SEO title="Blog: Yannis Spyrou " location="/blog" />
        <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} title="All Posts" />
        {/* <div className="flex flex-col max-w-lg mx-auto px-6">
          <h1 className="mt-5 text-3xl md:text-6xl uppercase mx-auto mb-4 dark:text-white">Blog</h1>
          {posts.map((post: BlogPost) => {
            const slug = getSlug(post);
            return (
              <div className="mt-4" key={post.content}>
                <Link href={`/posts/${slug}`}>
                  <a className="bg-white shadow-md dark:bg-zinc-900 py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t-0 first:border-t first:rounded-t-lg md:border-t border-b-0 last:border-b flex flex-col">
                    <h3 className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">{post.data.title}</h3>
                    <p className="text-2xl text-gray-700 mb-6 dark:text-white truncate">{post.content}</p>
                    <h3 className="text-gray-300 dark:text-white dark:opacity-60">
                      <div className="text-black-300 dark:text-white">Categories</div>
                      {post?.data?.categories?.map((category) => (
                        <>
                          <span key={category} className="mr-2">
                            {category}
                          </span>
                        </>
                      ))}
                    </h3>
                  </a>
                </Link>
              </div>
            );
          })}
        </div> */}
      </Layout>
    </>
  );
};

const getSlug = (post: BlogPost) => post.filePath.replace(/\.mdx?$/, '');

export const POSTS_PER_PAGE = 5;

export const getStaticProps = async () => {
  const posts = getPosts();
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  };
};

export default Blog;
