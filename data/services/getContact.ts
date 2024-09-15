import { notFound } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { cache } from 'react';

// Cacher function to cache the result of the getContact function, if called twice runs the function once and caches the result
export const getContact = cache(async (contactId: string) => {
  await slow(1000);

  const contact = await prisma.contact.findUnique({ where: { id: contactId } });

  if (!contact) {
    notFound();
  }

  return contact;
});

// export const getContact = unstable_cache(
//   async (contactId: string) => {
//     return getContactDedupe(contactId);
//   },
//   ['contact'],
//   {
//     tags: ['contact'],
//   },
// );
