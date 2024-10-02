import { useNews } from "../providers";
import { NewsCategory } from "../domain";

const CATEGORIES: (NewsCategory | 'all')[] = ['all', '정치', '경제', '사회', '문화'];

export const CategoryFilter = () => {
  const { category: currentCategory, setCategory } = useNews();

  return (
    <div className="mb-4 space-x-2">
      {CATEGORIES.map(category => {
        const className = (currentCategory ?? 'all') === category
          ? 'bg-blue-500 text-white hover:bg-blue-600'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

        return (
          <button
            key={category}
            onClick={() => setCategory(category === 'all' ? null : category)}
            className={`px-3 py-1 ${className}`}
          >
            {category}
          </button>
        )
      })}
    </div>
  );
};
