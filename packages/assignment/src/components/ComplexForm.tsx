import { FC, useState } from 'react'
import { useNotificationContext } from '@/context/hooks'
import { renderLog } from '@/utils'
import { STATUS } from '@/constants'

type FormData = {
  name: string
  email: string
  age: number
  preferences: string[]
}

const SUBMIT_MESSAGE = '폼이 성공적으로 제출되었습니다'

const formFields = [
  { placeholder: '이름', name: 'name', type: 'text' },
  { placeholder: '이메일', name: 'email', type: 'email' },
  { placeholder: '나이', name: 'age', type: 'number' },
]

export const ComplexForm: FC = () => {
  renderLog('ComplexForm rendered')
  const { addNotification } = useNotificationContext()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    age: 0,
    preferences: [] as string[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addNotification(SUBMIT_MESSAGE, STATUS.SUCCESS)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value,
    }))
  }

  const handlePreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(e.target.value)
        ? prev.preferences.filter((p) => p !== e.target.value)
        : [...prev.preferences, e.target.value],
    }))
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">복잡한 폼</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {formFields.map((field) => (
          <input
            key={field.name}
            {...field}
            value={formData[field.name as keyof FormData]}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        ))}
        <div className="space-x-4">
          {['독서', '운동', '음악', '여행'].map((pref) => (
            <label key={pref} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={formData.preferences.includes(pref)}
                onChange={handlePreferenceChange}
                value={pref}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">{pref}</span>
            </label>
          ))}
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          제출
        </button>
      </form>
    </div>
  )
}
