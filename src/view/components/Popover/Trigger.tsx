import * as RdxPopover from '@radix-ui/react-popover';
import { cn } from '@app/utils/cn';
import { PopoverProps } from '.';

export function Trigger({ children, className }: PopoverProps) {
  return (
    <RdxPopover.Trigger className={cn(
      'outline-none',
      className,
    )}
    >
      {children}
    </RdxPopover.Trigger>
  );
}
