// Main 컴포넌트
import React, {PropsWithChildren} from "react";

export const Main: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='flex flex-col md:flex-row'>{children}</div>
        </div>
    )
}
