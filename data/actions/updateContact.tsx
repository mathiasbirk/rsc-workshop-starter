'use server';

import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { contactSchema, ContactSchemaErrorType, ContactSchemaType } from '@/validations/contactSchema';
import { error } from 'console';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type State = {
  errors?: ContactSchemaErrorType;
  data: ContactSchemaType;
};

export async function updateContact(contactId: string, _prevState: State, formData: FormData): Promise<State> {
  await slow();

  const data = Object.fromEntries(formData);
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.formErrors,
      data: data,
    } as State;
  }

  await prisma.contact.update({
    where: { id: contactId },
    data: result,
  });

  revalidatePath('/');
  redirect(`/contacts/${contactId}`);
}
