import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@app/utils/cn';
import { DropdownMenuProps } from '.';

export function Trigger({ children, className }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Trigger
      className={cn(
        'outline-none',
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Trigger>
  );
}
