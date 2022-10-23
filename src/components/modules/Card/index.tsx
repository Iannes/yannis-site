import React from 'react';
import Link from 'next/link';

const POSTS_PATH = '/posts';

export const getSlug = (filePath: string) => filePath.replace(/\.mdx?$/, '');

const CATEGORY_COLORS = {
  react: 'bg-blue-300',
  serverless: 'bg-green-300',
  graphql: 'bg-purple-300',
  appsync: 'bg-pink-300',
  amplify: 'bg-orange-300',
};

const Card = ({ data }: any) => {
  const slug = getSlug(data.filePath);

  return (
    <Link href={`${POSTS_PATH}/${slug}`} passHref>
      <a className="mb-4 rounded-xl hover:translate-y-minus-2 transition duration-700 ease-in-out hover:shadow-2xl transform-gpu bg-white shadow-md dark:bg-grey-200 rounded-sm p-4 h-full overflow-hidden flex flex-col justify-between">
        <div>
          <h3 className="text-black font-semibold text-xl mb-4">{data.data.title}</h3>
          <p className="text-base text-md text-gray-700 mb-6 line-clamp-2 max-w-sm">{data.content}</p>
        </div>
        <div className="flex justify-between flex-col">
          {data?.data?.categories && (
            <div className="flex justify-between flex-row mb-3">
              <div>
                {data?.data?.categories.map((category: any) => (
                  <span
                    key={category}
                    className={`${generateClassName(
                      category,
                    )} mr-2 px-2.5 py-0.5 rounded text-gray-700 italic last:mr-0 text-xs`}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

export default Card;

const generateClassName = (category: string) => {
  const lowercased = category.toLowerCase();
  return CATEGORY_COLORS[lowercased as keyof typeof CATEGORY_COLORS];
  return;
};
