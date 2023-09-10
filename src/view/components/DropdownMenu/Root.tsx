import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';

export function Root({ children }: {children: ReactNode}) {
  return (
    <RdxDropdownMenu.Root>
      {children}
    </RdxDropdownMenu.Root>
  );
}
