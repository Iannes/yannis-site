import { FrontMatterData } from 'pages/blog';

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as const;

type PostHeaderProps = {
  frontMatter: FrontMatterData;
};

export const PostHeader: React.FC<PostHeaderProps> = ({ frontMatter }) => {
  return (
    <header className="pt-6 xl:pb-6">
      <div className="space-y-1 text-center">
        <dl className="space-y-10">
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={frontMatter.date}>
                {new Date(frontMatter.date).toLocaleDateString('en-US', postDateTemplate)}
              </time>
            </dd>
          </div>
        </dl>
        <div>
          <h1 className="text-3xl md:text-4xl dark:text-white text-center">{frontMatter.title}</h1>
        </div>
      </div>
    </header>
  );
};
