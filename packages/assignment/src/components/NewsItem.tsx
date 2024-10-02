import { NewsItem as INewsItem } from "../domain";
import { memo } from "../@lib";

interface Props {
  item: INewsItem
  className: string;
  onLikeClick: (id: number) => void;
}

export const NewsItem = memo(({ item, className, onLikeClick }: Props) => {
  return (
    <div className={`p-4 mb-4 rounded shadow ${className}`}>
      <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
      <p className="mb-2">{item.content}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{item.category}</span>
        <button
          onClick={() => onLikeClick(item.id)}
          className="px-3 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200"
        >
          좋아요 ({item.likes})
        </button>
      </div>
    </div>
  );
});
