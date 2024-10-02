import { useNews } from "../providers";
import { NewsItem } from "./NewsItem";

export const NewsList = () => {
  const { filteredNews } = useNews();

  return (
    <div>
      {filteredNews.map(item => (
        <NewsItem key={item.id} item={item}/>
      ))}
    </div>
  );
};
