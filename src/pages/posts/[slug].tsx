import { ReactFCC } from '../../../types';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { FrontMatterData } from 'pages/blog';
import Layout from 'components/ui/Layout';
import Header from 'components/ui/theme/Header';
import { PostSidebar } from 'components/ui/Posts/PostSidebar';
import { PostHeader } from 'components/ui/Posts/PostHeader';

import { getNextPostBySlug, getPostBySlug, getPreviousPostBySlug, Post, postFilePaths } from 'utils/mdx-utils';

const CustomP: ReactFCC = ({ children }) => {
  return <p className="max-w-none text-lg">{children}</p>;
};
const CustomH3: ReactFCC = ({ children }) => {
  return (
    <h3 tabIndex={0} className="text-xl md:text-3xl dark:text-white text-left pt-4 pb-4">
      {children}
    </h3>
  );
};
const CustomTitle: ReactFCC = ({ children }) => {
  return (
    <h1 tabIndex={0} className="text-3xl md:text-5xl dark:text-white">
      {children}
    </h1>
  );
};
const CustomH2: ReactFCC = ({ children }) => {
  return (
    <h2 tabIndex={0} className="text-black dark:text-white text-2xl md:text-3xl text-bold mt-4 mb-4 typography">
      {children}
    </h2>
  );
};

const components = {
  a: Link,
  Head,
  p: CustomP,
  h1: CustomTitle,
  h2: CustomH2,
  h3: CustomH3,
  img: Image,
};

type PostPageProps = {
  source: any;
  frontMatter: FrontMatterData;
  prevPost: Post;
  nextPost: Post;
};

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;

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
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                  {/* {frontMatter.description && <p className="text-xl mb-4">{frontMatter.description}</p>} */}
                  <main>
                    <div className="container flex items-center flex-col md:flex-row justify-between">
                      <div className="flex-1 w-full md:w-1/2 mb-8 md:mb-0 prose dark:prose-dark">
                        <h1 className="text-2xl md:text-3xl dark:text-white text-left mb-4">Introduction</h1>
                        <MDXRemote {...source} components={components} />
                      </div>
                    </div>
                  </main>
                </div>
              </div>
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

{
  /* <div className="grid md:grid-cols-2 lg:-mx-2 mt-12">
                {prevPost && (
                  <Link href={`/posts/${prevPost.slug}`}>
                    <a className="py-8 px-10 text-center md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg first last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none flex flex-col">
                      <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">Previous</p>
                      <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">{prevPost.title}</h4>
                      <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto" />
                    </a>
                  </Link>
                )}
                {nextPost && (
                  <Link href={`/posts/${nextPost.slug}`}>
                    <a className="py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t-0 first:border-t first:rounded-t-lg md:border-t border-b-0 last:border-b flex flex-col">
                      <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">Next</p>
                      <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">{nextPost.title}</h4>
                      <ArrowIcon className="mt-auto mx-auto md:ml-0" />
                    </a>
                  </Link>
                )}
              </div> */
}
