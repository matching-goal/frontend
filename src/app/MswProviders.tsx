'use client';

import { useState, type PropsWithChildren, useEffect } from 'react';
const isDev = process.env.NEXT_PUBLIC_API_MOCKING === 'enable';

interface Props {}

export default function MSW({ children }: PropsWithChildren<Props>) {
  const [ready, setReady] = useState(false);

  const init = async () => {
    if (isDev) {
      const initMocks = await import('@/mocks');
      await initMocks.initMSW();
      setReady(() => true);
    }
  };

  useEffect(() => {
    if (ready) return;
    init();
  }, [ready]);

  if (!ready) return null;

  return <>{children}</>;
}
