'use server'

import { prisma } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteContact(contactId: string) {

     await prisma.contact.delete( {
        where: { id: contactId },
    });

    revalidatePath('/')
    redirect(`/`);
}