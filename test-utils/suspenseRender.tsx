import { render } from '@testing-library/react';
import React, { Suspense } from 'react';

export default function suspenseRender(children: React.ReactNode) {
  return render(<Suspense>{children}</Suspense>);
}
