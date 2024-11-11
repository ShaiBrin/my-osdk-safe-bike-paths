'use client';

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import {store} from '../src/app/store';

export default function ClientProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
