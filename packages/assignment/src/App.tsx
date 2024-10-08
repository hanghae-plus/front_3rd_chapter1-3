import { FC, useState } from 'react'
import { generateItems } from '@/utils'
import { ItemList, ComplexForm, AppLayout, Header } from '@/components'

const ITEM_COUNT = 10000

// 메인 App 컴포넌트
const App: FC = () => {
  const [items] = useState(generateItems(ITEM_COUNT))

  return (
    <AppLayout>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-4">
            <ItemList items={items} />
          </div>
          <div className="w-full md:w-1/2 md:pl-4">
            <ComplexForm />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
export default App
