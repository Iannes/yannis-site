import Link from 'next/link';
import { formatDate } from 'utils/formatDate';

type ListItemProps = {
  slug: string;
  title: string;
  categories: string[];
  date: string;
  content: string;
};

export const ListItem: React.FC<ListItemProps> = ({ slug, date, title, categories, content }) => {
  return (
    <li key={slug} className="py-4">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <div className="space-y-3 xl:col-span-3">
          <div>
            <h3 className="mb-1 text-2xl font-bold leading-8 tracking-tight">
              <Link href={`/posts/${slug}`} className="text-gray-900 dark:text-gray-100" passHref>
                <a>{title}</a>
              </Link>
            </h3>
            <div className="flex flex-wrap">
              {categories.map((category: string) => (
                <span key={category} className="mr-3 text-sm font-medium uppercase text-teal-500">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">{content}</div>
          <div className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 leading-6">
            <Link href={`/posts/${slug}`} aria-label={`Read "${title}"`}>
              Read more &rarr;
            </Link>
          </div>
        </div>
      </article>
    </li>
  );
};
