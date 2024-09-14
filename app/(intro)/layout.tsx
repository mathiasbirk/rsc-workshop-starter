import React from 'react'
import BackButton from '@/components/ui/BackButton'

export default function IntroLayout({children}: {children: React.ReactNode}) {
  return (
    <div
    className='flex flex-col gap-4'> 
        <BackButton/>
        {children}
    </div>
  )
}
