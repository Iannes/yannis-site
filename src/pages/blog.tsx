import Link from 'next/link';
import Layout from 'components/ui/Layout';
import SEO from 'components/SEO';
import Header from 'components/ui/theme/Header';
import { getPosts } from 'utils/mdx-utils';
import ListLayout from 'components/ui/Posts/PostContent/ListLayout';

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
      </Layout>
    </>
  );
};

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
