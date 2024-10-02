import { useContextSelector } from "../../@lib";
import { AppContext, AppState } from "../AppProvider";

const filterNews = ({ category, news }: AppState)=>
  category
    ? news.filter(item => item.category === category)
    : news

export const useNews = () => {
  return useContextSelector(AppContext, value => ({
    news: value.news,
    addNews: value.addNews,
    likeNews: value.likeNews,
    filteredNews: filterNews(value),
    category: value.category,
    setCategory: value.setCategory,
  }))
}
