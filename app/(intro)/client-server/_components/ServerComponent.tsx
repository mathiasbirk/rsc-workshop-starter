import { prisma } from '@/db'


export default async function ServerComponent() {

    const data = await prisma.contact.findMany();

    const contact = data[0];
    return (
        <div className='flex flex-col gap-2'>
            <div className='rounded border-2 border-blue-500 p-4 overflow-scroll'>
                <div>
                    <h1>{contact.first} {contact.last}</h1>
                </div>
                <p>{contact.email}</p>
            </div>
        </div>
    )
}
