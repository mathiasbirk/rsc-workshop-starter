'use server';

import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { contactSchema, ContactSchemaErrorType } from '@/validations/contactSchema';
import { error } from 'console';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type State = {
  errors: ContactSchemaErrorType;
};

export async function updateContact(contactId: string, _prevState: State, formData: FormData) {
  await slow();

  const data = Object.fromEntries(formData);
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.formErrors,
    };
  }

  await prisma.contact.update({
    where: { id: contactId },
    data: result,
  });

  revalidatePath('/');
  redirect(`/contacts/${contactId}`);
}
