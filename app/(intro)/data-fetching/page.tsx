import { slow } from '@/utils/slow';
import React, { Suspense } from 'react';
import ClientComponent from './_component/ClientComponent';

const getData = async (delay: number) => {
  await slow(delay);
  return delay;
};

async function FirstComponent() {
  const delay = await getData(1000);

  return <div> First comp {delay}</div>;
}

async function SecondComponent() {
  const delay = await getData(2000);

  return <div> Second comp {delay}</div>;
}
export default function DataFetchingPage() {
  console.log('start time', new Date().getSeconds());

  //   const data1 = await getData(1000);
  //   const data2 = await getData(data1);

  //   const [data1, data2] = await Promise.all([getData(1000), getData(1000)]);

  const dataPromise = getData(3000);

  console.log('Sequential time', new Date().getSeconds());

  return (
    <>
      <h1>DataFetchingPage</h1>
      {/* 
            Venter på at begge komponenter er ferdig før de vises
      <Suspense fallback={<div> ... Loading</div>}>
        <FirstComponent />
        <SecondComponent />
      </Suspense> */}

      {/* <Suspense fallback={<div> ... Loading</div>}>
        <FirstComponent />
      </Suspense>
      <Suspense fallback={<div> ... Loading</div>}>
        <SecondComponent />
      </Suspense> */}
      <Suspense fallback={<div>Loading ... </div>}>
        <ClientComponent dataPromise={dataPromise} />
      </Suspense>
    </>
  );
}
