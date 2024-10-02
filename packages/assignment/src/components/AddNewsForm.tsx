import { useNews, useNotification } from "../providers";
import { FormEvent, useState } from "react";
import { NewsCategory } from "../domain";

export const AddNewsForm = () => {
  const { addNews } = useNews();
  const { addNotification } = useNotification();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<NewsCategory>('정치');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addNews({ title, content, category });
    addNotification(`새 뉴스가 추가되었습니다: ${title}`);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
        className="w-full p-2 border rounded"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as NewsCategory)}
        className="w-full p-2 border rounded"
      >
        <option value="정치">정치</option>
        <option value="경제">경제</option>
        <option value="사회">사회</option>
        <option value="문화">문화</option>
      </select>
      <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">뉴스 추가</button>
    </form>
  );
};
