import Skeleton from '@/components/ui/Skeleton'
import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
        <div className='mr-8 h-48  w-48 rounded-3xl bg-gray'>
        </div>
        <Skeleton />
  </div>
  )
}
