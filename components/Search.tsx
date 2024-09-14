'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useTransition } from 'react';
import { SearchIcon, SpinnerIcon } from './ui/icons';

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || ''; 
const router = useRouter();
  const [searching, startTransition] = useTransition();

  return (
    <form role="search">
      <input
        className="w-full pl-8 outline-offset-1"
        aria-label="Search contacts"
        name="q"
        defaultValue={query}
        placeholder="Search"
        type="search"
        onChange={(e) => {
          e.preventDefault();
          startTransition(() => {
            router.push(`?q=${e.target.value}`);
          })}}
      />
      <div aria-hidden className="absolute left-10 top-7">
        {searching ? (
          <div className="h-fit w-fit animate-spin">
            <SpinnerIcon width={16} height={16} className="text-gray-dark" />
          </div>
        ) : (
          <SearchIcon width={16} height={16} className="text-gray-dark" />
        )}
      </div>
    </form>
  );
}
