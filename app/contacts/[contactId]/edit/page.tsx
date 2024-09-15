import { getContact } from '@/data/services/getContact';
import ContactForm from './_components/ContactForm';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import Skeleton from '@/components/ui/Skeleton';
import { slow } from '@/utils/slow';
type PageProps = {
  params: {
    contactId: string;
  };
};

export default async function EditContactPage({ params }: PageProps) {
  const contact = getContact(params.contactId);
  return (
    <>
      <Suspense
        fallback={
          <div className="flex max-w-[40rem] flex-row gap-4 @container">
            <div className="flex flex-col gap-8">
              <span>Name</span>
              <label htmlFor="position">Position</label>
              <label htmlFor="email">Email</label>
              <label htmlFor="github">Github</label>
              <label htmlFor="avatar">Avatar URL</label>
              <label htmlFor="notes">Notes</label>
            </div>
            <Skeleton />
          </div>
        }
      >
        <ContactForm contactPromise={contact} />
      </Suspense>
    </>
  );
}
