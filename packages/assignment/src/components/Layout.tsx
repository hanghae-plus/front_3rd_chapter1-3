// Layout 컴포넌트
import {PropsWithChildren} from "react";
import {useTheme} from "../context/themeContext.tsx";

export const Layout: React.FC<PropsWithChildren> = ({children}) => {
    const {theme} = useTheme();
    return (
        <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900 text-white'}`}>{children}</div>
    )
}
