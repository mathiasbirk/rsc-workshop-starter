'use client';


import React, { useState, useTransition } from 'react'
import Button from '@/components/ui/Button';


function SlowComponent() {
    const startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // do nothing   
    }
    return <div>Slow Component</div>
}

const items: React.ReactNode[] = [];
for (let i = 0; i < 500; i++) {
    items.push(<SlowComponent key={i}/>);
}

export default function TransitionsPage() {
    const [tab, setTab] = useState(1);
    const [isPending, startTransition] = useTransition();

 const [count, setCount] = useState(0)

  return (<>
    <h1>Transitions</h1>
    <div className='flex gap-4'>
        {count}
        <Button onClick={() => {
            return setTab(1);
        }}>
            <span>Tab 1 {tab === 1 && '👈'}</span>
        </Button>
        <Button onClick={() => {
            return setTab(2);
        }}>
            <span>Tab 2 {tab === 2 && '👈'}</span>
        </Button>
        <Button
            className={isPending ? 'opacity-50' : ''}
        onClick={() => {
            startTransition(() => {
                setCount(count => {return count + 1});
                setTab(3);
            });
        }}>
            <span>Tab 3 {tab === 3 && '👈'}</span>
        </Button>

    </div>  

    <div>
        {tab === 1 && <div>Tab 1</div>}
        {tab === 2 && <div>Tab 2</div>}
        {tab === 3 && <div>Tab 3 {items}</div>}
    </div>
    </>)
}
