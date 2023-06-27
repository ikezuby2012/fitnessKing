import React, { FC } from 'react'

interface Iprops {
    children: React.ReactNode;
}
const DashboardLayout: FC<Iprops> = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    )
}

export default DashboardLayout