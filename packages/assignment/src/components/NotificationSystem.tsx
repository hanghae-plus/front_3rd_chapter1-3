import { STATUS } from '@/constants'
import { useNotification } from '@/context/hooks'
import { renderLog } from '@/utils'
import { FC } from 'react'

export const NotificationSystem: FC = () => {
  renderLog('NotificationSystem rendered')

  const { notifications, removeNotification } = useNotification()

  const notificationColorMap: Record<string, string> = {
    [STATUS.SUCCESS]: 'bg-green-500',
    [STATUS.ERROR]: 'bg-red-500',
    [STATUS.WARNING]: 'bg-yellow-500',
    [STATUS.INFO]: 'bg-blue-500',
  }

  const getNotificationColorClass = (type: string) => notificationColorMap[type] || 'bg-gray-500'

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      {notifications.map(({ id, type, message }) => (
        <div key={id} className={`p-4 rounded shadow-lg text-white ${getNotificationColorClass(type)}`}>
          {message}
          <button onClick={() => removeNotification(id)} className="ml-4 text-white hover:text-gray-200">
            닫기
          </button>
        </div>
      ))}
    </div>
  )
}
