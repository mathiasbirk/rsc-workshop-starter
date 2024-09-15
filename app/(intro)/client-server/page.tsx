import React from 'react'
import ClientComponent from './_components/ClientComponent'
import ServerComponent from './_components/ServerComponent'
import { prisma } from '@/db'

export default function ClientServerPage() {
  // Denne funksjonen får et skjult API-endepunkt generert pga "use server"

  async function mutateData() {
    'use server';

    const data = await prisma.contact.findMany();
    return data[0].first ?? '';
  }
  return (
        <div>
            <ClientComponent mutateData={mutateData} >
                <ServerComponent/>
            </ClientComponent>
        </div>
  )
}
