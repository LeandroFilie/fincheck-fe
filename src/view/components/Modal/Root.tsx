import { cn } from '@app/utils/cn';
import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  children: ReactNode;
}

export function Root({ open, children }: ModalProps) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={cn(
          'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm',
          'sata-[state=open]:animate-overlay-show',
        )}
        />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)] w-full max-w-[400px] outline-none',
            'data-[state=open]:animate-content-show',
          )}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
