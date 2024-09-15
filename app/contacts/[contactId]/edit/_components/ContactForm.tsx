'use client';

import React, { useActionState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import LinkButton from '@/components/ui/LinkButton';
import TextArea from '@/components/ui/TextArea';
import { updateContact } from '@/data/actions/updateContact';
import { Contact } from '@prisma/client';
import { ContactSchemaErrorType } from '@/validations/contactSchema';

type Props = {
  contact: Contact;
};
export default function ContactForm({ contact }: Props) {
  const updateContactById = updateContact.bind(null, contact.id);

  const [state, updateContactAction] = useActionState(updateContactById, {
    errors: {} as ContactSchemaErrorType,
    data: {
      avatar: contact.avatar,
      email: contact.email,
      first: contact.first,
      github: contact.github,
      last: contact.last,
      notes: contact.notes,
      position: contact.position,
    },
  });
  return (
    <form action={updateContactAction} className="flex max-w-[40rem] flex-col gap-4 @container">
      <div className="grip-rows-6 grid grid-cols-1 items-center gap-2 @sm:grid-cols-[1fr_4fr] @sm:gap-4">
        <span className="flex">Name</span>
        <div className="flex gap-4">
          <Input
            defaultValue={state.data.first || undefined}
            aria-label="First name"
            name="first"
            type="text"
            placeholder="First"
          />
          <Input
            aria-label="Last name"
            defaultValue={state.data.last || undefined}
            name="last"
            placeholder="Last"
            type="text"
          />
        </div>
        <label htmlFor="position">Position</label>
        <Input defaultValue={state.data.position || undefined} name="position" placeholder="Konsulent" type="text" />
        <label htmlFor="email">Email</label>
        <Input
          defaultValue={state.data.email || undefined}
          name="email"
          placeholder="moa@inmeta.no"
          type="text"
          errors={state.errors?.fieldErrors?.email}
        />
        <label htmlFor="github">Github</label>
        <Input defaultValue={state.data.github || undefined} name="github" placeholder="@moa" type="text" />
        <label htmlFor="avatar">Avatar URL</label>
        <Input
          defaultValue={state.data.avatar || undefined}
          name="avatar"
          placeholder="https:// media.licdn.com/dms/image/example"
          type="text"
          errors={state.errors?.fieldErrors?.avatar}
        />
        <label className="self-start" htmlFor="notes">
          Notes
        </label>
        <TextArea className="grow" defaultValue={state.data.notes || undefined} name="notes" rows={6} />
      </div>

      <div className="flex gap-2 self-end">
        <LinkButton theme="secondary" href={`/contacts/${contact.id}`}>
          Cancel
        </LinkButton>
        <Button theme="primary" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
