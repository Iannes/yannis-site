import { InferGetStaticPropsType, NextPage } from 'next';
import { getPosts } from 'utils/mdx-utils';
import Layout from 'components/ui/Layout';
import SEO from 'components/SEO';
import Intro from 'components/modules/Intro';
import BlogPosts from 'components/modules/BlogPosts';
import Skills from 'components/modules/Skills';
import Contact from 'components/modules/Contact';
import { BlogPost } from './blog';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  return (
    <Layout>
      <SEO />
      <Intro />
      <BlogPosts data={posts as BlogPost[]} />
      <Skills />
      <Contact />
    </Layout>
  );
};

const getSlug = (post: BlogPost) => post.filePath.replace(/\.mdx?$/, '');

export const getStaticProps = async () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
