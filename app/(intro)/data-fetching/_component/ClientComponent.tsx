'use client';
import React, { use } from 'react';

type Props = {
  dataPromise: Promise<number>;
};
export default function ClientComponent({ dataPromise }: Props) {
  const data = use(dataPromise);

  return <div>ClientComponent</div>;
}
