'use server'

import { prisma } from "@/db";
import { slow } from "@/utils/slow";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function favoriteContact(contactId: string, favorite: boolean) {
    await slow();


     await prisma.contact.update( {
        where: { id: contactId },
        data: {
            favorite
        }
    });

    revalidatePath('/')
    redirect(`/contacts/${contactId}`);
}