import { AppState } from "../AppProvider";
import { useMemo } from "react";
import { useAppContext } from "./useAppContext.ts";

const filterNews = ({ category, news }: AppState) =>
  category
    ? news.filter(item => item.category === category)
    : news

export const useNews = () => {
  const value = useAppContext();
  return useMemo(() => ({
    news: value.news,
    addNews: value.addNews,
    likeNews: value.likeNews,
    filteredNews: filterNews(value),
    category: value.category,
    setCategory: value.setCategory,
  }), [value]);
}
