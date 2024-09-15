'use client'

import React from 'react'

type Props = {
    children: React.ReactNode;
    mutateData: () => Promise<string>;
}

export default function ClientComponent({children, mutateData}: Props) {
    // 
    return (
        <div>
            {children}
            <button onClick={async () => {
                // Uten 'use server' kan vi ikke bruke denne 
                const data = await mutateData();
                return alert(data);
            }} className='bg-blue-500 text-white p-2 rounded'>Click </button>
        </div>
    )
}