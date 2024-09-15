'use client'
import React, { useTransition } from 'react'
import Button from './ui/Button'
import { createEmptyContact } from '@/data/actions/createEmptyContact'

export default function NewContactButton() {
    const [isPending, startTransition] = useTransition();
  return (
    <Button 
        onClick={async () => {
            startTransition(async () => {
                await createEmptyContact();
            })
        }}
        type="submit" 
        theme="secondary">
        New
    </Button>
  )
}
