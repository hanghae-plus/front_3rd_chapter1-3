import React, { useState } from "react";
import { renderLog } from "../utils";
import { useNotification } from "../hooks/useNotification";

/**
 * @component ComplexForm
 * @description 복잡한 사용자 입력 폼을 렌더링하고 폼 데이터의 상태를 관리하는 React 함수형 컴포넌트
 * 이름, 이메일, 나이, 그리고 선호하는 활동을 사용자로부터 수집합니다.
 * 입력 값의 변화를 추적하고, 사용자가 폼을 제출할 때 성공 메시지를 통해 알림을 제공 
 *
 * @returns 사용자 데이터 입력을 위한 폼과 제출 버튼을 포함한 React 컴포넌트
 */

export const ComplexForm: React.FC = () => {
  renderLog("ComplexForm rendered");
  const { addNotification } = useNotification();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
    preferences: [] as string[],
  });

  /**
   * @function handelSubmit
   * @description 사용자가 폼을 제출할 때 호출되는 이벤트 핸들러 함수로, 폼의 기본 제출 동작을 방지하고, 알람을 표시
   * @param e - 폼 제출 이벤트 객체, React.FormEvent 타입
   */

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification("폼이 성공적으로 제출되었습니다", "success");
  };

  /**
   * @function handleInputChange
   * @description 입력 필드의 값이 변경될 때 호출되는 이벤트 핸들러 함수로, 입력 필드의 이름과 값에 따라 formData의 상태를 업데이트
   * @param e - 입력 필드 변경 이벤트 객체, React.ChangeEvent<HTMLInputElement> 타입
   */

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value, 10) || 0 : value,
    }));
  };

  /**
   * @function handlePreferenceChange
   * @description 사용자가 선호사항 체크박스를 변경할 때 호출되는 함수
   * 선택된 선호사항을 배열에서 추가하거나 제거
   *
   * @param preference - 사용자가 선택한 선호사항, string 타입
   */

  const handlePreferenceChange = (preference: string) => {
    setFormData((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(preference)
        ? prev.preferences.filter((p) => p !== preference)
        : [...prev.preferences, preference],
    }));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">복잡한 폼</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="이름"
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="이메일"
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="나이"
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <div className="space-x-4">
          {["독서", "운동", "음악", "여행"].map((pref) => (
            <label key={pref} className="inline-flex items-center">
              <input
                type="checkbox"
                checked={formData.preferences.includes(pref)}
                onChange={() => handlePreferenceChange(pref)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">{pref}</span>
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          제출
        </button>
      </form>
    </div>
  );
};
