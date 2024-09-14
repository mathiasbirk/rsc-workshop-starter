'server only'
import { notFound } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';

export async function getContact(id: string) {
    await slow(1000);
    const contact = await prisma.contact.findUnique({where: {id}});

    if (!contact) {
        notFound();
    }

    return contact;
}