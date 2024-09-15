'use server'

import { prisma } from "@/db";
import { slow } from "@/utils/slow";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateContact(contactId: string, data: FormData) {
    await slow();

    const contact = Object.fromEntries(data);

     await prisma.contact.update( {
        where: { id: contactId },
        data: contact
    });

    revalidatePath('/')
    redirect(`/contacts/${contactId}`);
}