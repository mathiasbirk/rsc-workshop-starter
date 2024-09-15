'use server'

import { prisma } from "@/db";
import { slow } from "@/utils/slow";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEmptyContact() {
    await slow();

    const contact = await prisma.contact.create({
        data: {},
    });

    revalidatePath('/')
    redirect(`/contacts/${contact.id}/edit`);
}