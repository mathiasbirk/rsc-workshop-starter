'use client';

import ErrorMessage from '@/components/ui/ErrorMessage';
import React from 'react';

type Props = {
  error: Error;
  reset: () => void;
};
export default function Error({ error, reset }: Props) {
  return <ErrorMessage onReset={reset}> Noe gikk galt 🥲 </ErrorMessage>;
}
