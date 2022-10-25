import { ReactFCC } from '../../../../../types';
import { MDXRemote } from 'next-mdx-remote';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

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

type PostContentProps = {
  source: any;
};

export const PostContent: React.FC<PostContentProps> = ({ source }) => {
  return (
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
  );
};
