import React, {useState, createContext, useContext, PropsWithChildren} from 'react';
import {generateItems, renderLog} from './utils';
import {useMemo, useCallback} from "./@lib";

type Theme = 'light' | 'dark';

// 타입 정의
interface Item {
    id: number;
    name: string;
    category: string;
    price: number;
}

interface User {
    name: string;
    email: string;
}

interface Notification {
    id: number;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
}

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

interface UserContextType {
    user: User | null;
    login: (name: string, email: string) => void;
    logout: () => void;
}

interface NotificationContextType {
    notifications: Notification[];
    addNotification: (message: string) => void;
    removeNotification: (id: number) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);
const UserContext = createContext<UserContextType | null>(null);
const NotificationContext = createContext<NotificationContextType | null>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [theme, setTheme] = useState<Theme>('light');
    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, []);
    const value = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

const UserProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const {addNotification} = useNotification();
    const login = useCallback((name: string, email: string) => {
        setUser({name, email});
        addNotification("로그인 성공");
    }, []);
    const logout = useCallback(() => {
        setUser(null);
        addNotification("로그아웃 성공");
    }, []);
    const value = useMemo(() => ({user, login, logout}), [user, login, logout]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const NotificationProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = useCallback((message: string) => {
        setNotifications((prev) => [...prev, {id: Date.now(), message}]);
    }, []);

    const removeNotification = useCallback((id: number) => {
        setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    }, []);

    const value = useMemo(
        () => ({
            notifications,
            addNotification,
            removeNotification,
        }),
        [notifications, addNotification, removeNotification]
    );

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};

const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser must be used within a UserProvider');
    return context;
};

const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context)
        throw new Error(
            'useNotification must be used within a NotificationProvider'
        );
    return context;
};

// Header 컴포넌트
export const Header: React.FC = () => {
    renderLog('Header rendered');
    const {theme, toggleTheme} = useTheme();
    const {user, login, logout} = useUser();

    const handleLogin = () => {
        // 실제 애플리케이션에서는 사용자 입력을 받아야 합니다.
        login('user@example.com', 'password');
    };

    return (
        <header
            className={`p-4 ${
                theme === 'light'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-200'
            }`}
        >
            <div className='container mx-auto flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>샘플 애플리케이션</h1>
                <div className='flex items-center'>
                    <button
                        onClick={toggleTheme}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'
                    >
                        {theme === 'light' ? '다크 모드' : '라이트 모드'}
                    </button>
                    {user ? (
                        <div className='flex items-center'>
                            <span className='mr-2'>{user.name}님 환영합니다!</span>
                            <button
                                onClick={logout}
                                className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                            >
                                로그아웃
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleLogin}
                            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                        >
                            로그인
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

// ItemList 컴포넌트
export const ItemList: React.FC<{ items: Item[] }> = ({items}) => {
    renderLog('ItemList rendered');
    const [filter, setFilter] = useState('');
    const {theme} = useTheme();

    const filteredItems = items.filter(
        (item) =>
            item.name.toLowerCase().includes(filter.toLowerCase()) ||
            item.category.toLowerCase().includes(filter.toLowerCase())
    );

    const averagePrice =
        items.reduce((sum, item) => sum + item.price, 0) / items.length;

    return (
        <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4'>상품 목록</h2>
            <input
                type='text'
                placeholder='상품 검색...'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className='w-full p-2 mb-4 border border-gray-300 rounded text-black'
            />
            <p className='mb-4'>평균 가격: {averagePrice.toLocaleString()}원</p>
            <ul className='space-y-2'>
                {filteredItems.slice(0, 100).map((item) => (
                    <li
                        key={item.id}
                        className={`p-2 rounded shadow ${
                            theme === 'light'
                                ? 'bg-white text-black'
                                : 'bg-gray-700 text-white'
                        }`}
                    >
                        {item.name} - {item.category} - {item.price.toLocaleString()}원
                    </li>
                ))}
            </ul>
            {filteredItems.length > 100 && (
                <p className='mt-4'>...그 외 {filteredItems.length - 100}개 상품</p>
            )}
        </div>
    );
};

// ComplexForm 컴포넌트
export const ComplexForm: React.FC = () => {
    renderLog('ComplexForm rendered');
    const {addNotification} = useNotification();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: 0,
        preferences: [] as string[],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addNotification('폼이 성공적으로 제출되었습니다');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'age' ? parseInt(value) || 0 : value,
        }));
    };

    const handlePreferenceChange = (preference: string) => {
        setFormData((prev) => ({
            ...prev,
            preferences: prev.preferences.includes(preference)
                ? prev.preferences.filter((p) => p !== preference)
                : [...prev.preferences, preference],
        }));
    };

    return (
        <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4'>복잡한 폼</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='이름'
                    className='w-full p-2 border border-gray-300 rounded text-black'
                />
                <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='이메일'
                    className='w-full p-2 border border-gray-300 rounded text-black'
                />
                <input
                    type='number'
                    name='age'
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder='나이'
                    className='w-full p-2 border border-gray-300 rounded text-black'
                />
                <div className='space-x-4'>
                    {['독서', '운동', '음악', '여행'].map((pref) => (
                        <label key={pref} className='inline-flex items-center'>
                            <input
                                type='checkbox'
                                checked={formData.preferences.includes(pref)}
                                onChange={() => handlePreferenceChange(pref)}
                                className='form-checkbox h-5 w-5 text-blue-600'
                            />
                            <span className='ml-2'>{pref}</span>
                        </label>
                    ))}
                </div>
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    제출
                </button>
            </form>
        </div>
    );
};

// NotificationSystem 컴포넌트
export const NotificationSystem: React.FC = () => {
    renderLog('NotificationSystem rendered');
    const {notifications, removeNotification} = useNotification();

    return (
        <div className='fixed bottom-4 right-4 space-y-2'>
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className={`p-4 rounded shadow-lg ${
                        notification.type === 'success'
                            ? 'bg-green-500'
                            : notification.type === 'error'
                                ? 'bg-red-500'
                                : notification.type === 'warning'
                                    ? 'bg-yellow-500'
                                    : 'bg-blue-500'
                    } text-white`}
                >
                    {notification.message}
                    <button
                        onClick={() => removeNotification(notification.id)}
                        className='ml-4 text-white hover:text-gray-200'
                    >
                        닫기
                    </button>
                </div>
            ))}
        </div>
    );
};

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
    const {theme} = useTheme();
    return (
        <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}>{children}</div>
    )
}
// 메인 App 컴포넌트
const App: React.FC = () => {
    const [items] = useState(generateItems(10000));

    return (
        <ThemeProvider>
            <NotificationProvider>
                <UserProvider>
                    <Layout>
                        <Header/>
                        <div className='container mx-auto px-4 py-8'>
                            <div className='flex flex-col md:flex-row'>
                                <div className='w-full md:w-1/2 md:pr-4'>
                                    <ItemList items={items}/>
                                </div>
                                <div className='w-full md:w-1/2 md:pl-4'>
                                    <ComplexForm/>
                                </div>
                            </div>
                        </div>
                    </Layout>
                    <NotificationSystem/>
                </UserProvider>
            </NotificationProvider>
        </ThemeProvider>
    );
};

export default App;
