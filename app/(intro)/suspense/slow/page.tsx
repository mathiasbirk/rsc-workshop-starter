
import { slow } from '@/utils/slow'
import React, { Suspense } from 'react'

async function SlowComponent() {
    await slow();
    return <div>Slow Component</div>
}


export default async function SlowPage() {
    await slow();


  return (
    <div>SlowPage

        <Suspense fallback={<div>Loading...</div>}>
            <SlowComponent/>
        </Suspense>
    </div>
  )
}
