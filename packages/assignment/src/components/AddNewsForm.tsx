import { FormEvent, useState } from "react";
import { NewsCategory } from "../domain";
import { useCallback, memo } from "../@lib";

interface Props {
  onSubmit?: (payload: { title: string; content: string; category: NewsCategory }) => void;
}

export const AddNewsForm = memo(({ onSubmit }: Props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<NewsCategory>('정치');

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    onSubmit?.({ title, content, category });
    setTitle('');
    setContent('');
  }, [category, content, onSubmit, title]);

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
});
