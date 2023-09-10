import { ReactNode } from 'react';
import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@app/utils/cn';

interface DropdownMenuProps {
  children: ReactNode;
  className?: string;
}

function DropdownMenuRoot({ children }: {children: ReactNode}) {
  return (
    <RdxDropdownMenu.Root>
      {children}
    </RdxDropdownMenu.Root>
  );
}

function DropdownMenuTrigger({ children }: {children: ReactNode}) {
  return (
    <RdxDropdownMenu.Trigger className='outline-none'>
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

function DropdownMenuContent({ children, className }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          'rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
          className,
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

function DropdownMenuItem({ children, className }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Item
      className={cn(
        'min-h-[48px] outline-none flex items-center py-2 px-4 text-sm text-gray-800 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer',
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
