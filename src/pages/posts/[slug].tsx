import { FrontMatterData } from 'pages/blog';
import Layout from 'components/ui/Layout';
import Header from 'components/ui/theme/Header';
import { PostSidebar } from 'components/ui/Posts/PostSidebar';
import { PostHeader } from 'components/ui/Posts/PostHeader';
import { PostContent } from 'components/ui/Posts/PostContent';

import { getNextPostBySlug, getPostBySlug, getPreviousPostBySlug, Post, postFilePaths } from 'utils/mdx-utils';

type PostPageProps = {
  source: any;
  frontMatter: FrontMatterData;
  prevPost: Post;
  nextPost: Post;
};

const PostPage: React.FC<PostPageProps> = ({ source, frontMatter, prevPost, nextPost }) => {
  return (
    <Layout>
      <Header page="blog" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <article className="px-2 md:px-10 lg:px-12">
          <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <PostHeader frontMatter={frontMatter} />
            <div
              className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
              style={{ gridTemplateRows: 'auto 1fr' }}
            >
              <PostContent source={source} />
              <PostSidebar next={nextPost} prev={prevPost} categories={frontMatter.categories} />
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
