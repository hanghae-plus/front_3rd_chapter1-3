import { FC, useState } from 'react'
import { generateItems } from '@/utils'
import { ItemList, ComplexForm, AppLayout } from '@/components'

// 메인 App 컴포넌트
const App: FC = () => {
  const [items] = useState(generateItems(10000))

  return (
    <AppLayout>
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
