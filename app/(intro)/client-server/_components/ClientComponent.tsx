'use client'

import React from 'react'

type Props = {
    children: React.ReactNode;
    content: React.ReactNode;
}

export default function ClientComponent({children, content}: Props) {

    return (
        <div>
            {children}
            {content}
            <button onClick={() => {return alert('Clicked')}} className='bg-blue-500 text-white p-2 rounded'>Click </button>
        </div>
    )
}