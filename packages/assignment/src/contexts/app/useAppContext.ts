import { useContext } from 'react'
import AppContext from './AppContext'

// 커스텀 훅: useAppContext
const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export default useAppContext
