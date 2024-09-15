'use client'
import Button from '@/components/ui/Button';
import { deleteContact } from '@/data/actions/deleteContact';
import React from 'react'

export default function DeleteContactButton({contactId}: {contactId: string}) {
  return (
    <Button onClick={ async (e)=> {
        e.preventDefault();
        const res = confirm('Are you sure you want to delete this contact?');
        if(!res) return;
        await deleteContact(contactId);
      }} type="submit" theme="destroy">
        Delete
      </Button>
  )
}
