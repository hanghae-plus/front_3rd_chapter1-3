import { useState } from "react"
import { ComplexForm } from "../components/ComplexForm"
import { Header } from "../components/Header"
import { ItemList } from "../components/ItemList"
import { NotificationSystem } from "../components/NotificationSystem"
import { generateItems } from "../utils"
import { Theme } from "../components/Theme"

export const Main = () => {
  const [items] = useState(generateItems(10000))

  return (
    <Theme>
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
      <NotificationSystem />
    </Theme>
  )
}
