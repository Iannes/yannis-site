type CategoryProps = {
  category: string;
};

type CategoriesProps = {
  categories: string[];
};

export const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return categories ? (
    <article className="py-4 xl:py-8">
      <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">categories</h2>
      <div className="flex flex-wrap">
        {categories.map((category: string) => (
          <Category key={category} category={category} />
        ))}
      </div>
    </article>
  ) : null;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
  const className = 'mr-3 text-sm font-medium uppercase text-teal-500 hover:text-teal-600 dark:hover:text-teal-400';
  return (
    <p className={className} key={category}>
      {category}
    </p>
  );
};
