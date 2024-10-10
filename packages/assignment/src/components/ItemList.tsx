import { FC, useState } from 'react'
import { renderLog } from '@/utils'
import { useCallback, useMemo } from '@/@lib'
import { useThemeContext } from '@/context/hooks'
import { THEME } from '@/constants'

interface ItemProps {
  id: number
  name: string
  category: string
  price: number
}

const MAX_ITEMS = 100

export const ItemList: FC<{ items: ItemProps[] }> = ({ items }) => {
  renderLog('ItemList rendered')
  const { theme } = useThemeContext()

  const [filter, setFilter] = useState('')

  const filteredItems = useMemo(
    () =>
      items.filter(
        (item) =>
          item.name.toLowerCase().includes(filter.toLowerCase()) ||
          item.category.toLowerCase().includes(filter.toLowerCase())
      ),
    [items, filter]
  )

  const averagePrice = useMemo(() => items.reduce((sum, item) => sum + item.price, 0) / items.length, [items])
  const themeClass = theme === THEME.LIGHT ? 'bg-white text-black' : 'bg-gray-700 text-white'

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }, [])

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">상품 목록</h2>
      <input
        type="text"
        placeholder="상품 검색..."
        value={filter}
        onChange={handleFilterChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
      />
      <p className="mb-4">평균 가격: {averagePrice.toLocaleString()}원</p>
      <ul className="space-y-2">
        {filteredItems.slice(0, MAX_ITEMS).map(({ id, name, category, price }) => (
          <li key={id} className={`p-2 rounded shadow ${themeClass}`}>
            {name} - {category} - {price.toLocaleString()}원
          </li>
        ))}
      </ul>
      {filteredItems.length > MAX_ITEMS && <p className="mt-4">...그 외 {filteredItems.length - MAX_ITEMS}개 상품</p>}
    </div>
  )
}
