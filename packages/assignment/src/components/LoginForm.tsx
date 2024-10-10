import { useState } from "react"
import { useUser } from "../hooks"

export const LoginForm = () => {
  const { login } = useUser()
  const [formData, setFormData] = useState<{
    email: string
    password: string
  }>({
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value) || 0 : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(formData.email)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10 }}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="이메일"
        className="p-2 border rounded text-black"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="비밀번호"
        className="p-2 border rounded text-black"
      />

      <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        로그인
      </button>
    </form>
  )
}
