'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

import ContactButton from './ContactButton';
import type { Contact } from '@prisma/client';

// type Props = {
//   contacts: Contact[];
// };
export default  function ContactList({contacts}: {contacts: Contact[]}) {

  const searchParams = useSearchParams();
  const q = searchParams.get('q')?.toLocaleLowerCase() || '';

  const filteredContacts = q ? contacts.filter(contact => {
    return contact.first?.toLocaleLowerCase().includes(q) || contact.last?.toLocaleLowerCase().includes(q) || contact.position?.toLocaleLowerCase().includes(q) || contact.email?.toLocaleLowerCase().includes(q);
  }) : contacts;
  

  return (
    <nav className="min-h-48 flex-1 overflow-auto px-8 py-4">
      {filteredContacts.length ? (
        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id} className="mx-1" >
                <ContactButton contact={contact} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </nav>
  );
}
