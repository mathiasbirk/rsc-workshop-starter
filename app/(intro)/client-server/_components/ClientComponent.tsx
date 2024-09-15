'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  mutateData: () => Promise<string>;
};

export default function ClientComponent({ children, mutateData }: Props) {
  return (
    <div>
      {children}
      <button
        onClick={async () => {
          // Uten 'use server' kan vi ikke bruke denne
          const data = await mutateData();
          return alert(data);
        }}
        className="rounded bg-blue-500 p-2 text-white"
      >
        Click{' '}
      </button>
    </div>
  );
}
