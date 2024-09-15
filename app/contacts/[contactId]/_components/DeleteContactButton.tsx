'use client';
import Button from '@/components/ui/Button';
import SubmitButton from '@/components/ui/SubmitButton';
import { deleteContact } from '@/data/actions/deleteContact';
import React, { useTransition } from 'react';

export default function DeleteContactButton({ contactId }: { contactId: string }) {
  const [isPending, startTransition] = useTransition();
  const deleteContactById = deleteContact.bind(null, contactId);

  return (
    <form
      action={deleteContactById}
      onSubmit={e => {
        e.preventDefault();
        const res = confirm('Are you sure you want to delete this contact?');
        if (!res) return;

        startTransition(async () => {
          await deleteContactById();
        });
      }}
    >
      <SubmitButton theme="destroy" loading={isPending}>
        Delete
      </SubmitButton>
    </form>
  );
}
