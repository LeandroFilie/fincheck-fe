import * as RdxPopover from '@radix-ui/react-popover';
import { ReactNode } from 'react';

export function Root({ children }: {children: ReactNode}) {
  return (
    <RdxPopover.Root>
      {children}
    </RdxPopover.Root>
  );
}
