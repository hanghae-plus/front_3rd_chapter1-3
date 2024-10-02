import { NewsItem as NewsItemType } from "../domain";
import { NewsItem } from "./NewsItem";

interface Props {
  items: NewsItemType[];
  childClassName: string;
  onLikeClick: (id: number) => void;
}

export const NewsList = ({ items, childClassName, onLikeClick }: Props) => {
  return (
    <div>
      {items.map(item => (
        <NewsItem key={item.id} item={item} className={childClassName} onLikeClick={onLikeClick}/>
      ))}
    </div>
  );
};
