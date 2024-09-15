'use client';
import React, { useTransition } from 'react';
import { cn } from '@/utils/cn';
import type { Contact } from '@prisma/client';
import { favoriteContact } from '@/data/actions/favoriteContact';

export default function Favorite({ contact }: { contact: Contact }) {
  let favorite = contact.favorite;
  const [isPending, startTransition] = useTransition();
  const favoriteContactById = favoriteContact.bind(null, contact.id, favorite);

  return (
    <form action={favoriteContactById}>
      <button
        className={cn(
          favorite ? 'text-yellow-500' : 'text-gray-dark',
          isPending ? 'animate-bounce text-yellow-600' : '',
          'flex text-2xl font-normal shadow-none hover:text-yellow-400 hover:shadow-none',
        )}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </form>
  );
}
