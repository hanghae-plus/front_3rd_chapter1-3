import React, { useState } from 'react';
import { renderLog } from '../../utils';
import { useNotification } from '../../hooks';
import { useCallback, useMemo } from '../../@lib';

export const ComplexForm: React.FC = React.memo(() => {
    renderLog('ComplexForm rendered');
    const { addNotification } = useNotification();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: 0,
        preferences: [] as string[],
    });

    const handleSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            addNotification('폼이 성공적으로 제출되었습니다', 'success');
        },
        [addNotification]
    );

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            if (name === 'age') {
                const ageValue = parseInt(value) || 0;
                if (prev.age === ageValue) return prev;
                return { ...prev, age: ageValue };
            }
            if (prev.name === value) return prev;
            return { ...prev, [name]: value };
        });
    }, []);

    const handlePreferenceChange = useCallback((preference: string) => {
        setFormData((prev) => {
            const isPreferenceSelected = prev.preferences.includes(preference);

            if (isPreferenceSelected) {
                return {
                    ...prev,
                    preferences: prev.preferences.filter((p) => p !== preference),
                };
            } else {
                return {
                    ...prev,
                    preferences: [...prev.preferences, preference],
                };
            }
        });
    }, []);

    const preferences = useMemo(() => ['독서', '운동', '음악', '여행'], []);

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">복잡한 폼</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="이름" className="w-full p-2 border border-gray-300 rounded text-black" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="이메일" className="w-full p-2 border border-gray-300 rounded text-black" />
                <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="나이" className="w-full p-2 border border-gray-300 rounded text-black" />
                <div className="space-x-4">
                    {preferences.map((preferR) => (
                        <label key={preferR} className="inline-flex items-center">
                            <input type="checkbox" checked={formData.preferences.includes(preferR)} onChange={() => handlePreferenceChange(preferR)} className="form-checkbox h-5 w-5 text-blue-600" />
                            <span className="ml-2">{preferR}</span>
                        </label>
                    ))}
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    제출
                </button>
            </form>
        </div>
    );
});
