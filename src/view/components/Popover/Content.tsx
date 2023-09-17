import * as RdxPopover from '@radix-ui/react-popover';
import { cn } from '@app/utils/cn';
import { PopoverProps } from '.';

export function Content({ children, className }: PopoverProps) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        className={cn(
          'rounded-2xl bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] z-[99] p-4',
          'data-[side=bottom]:animate-slide-up-and-fade',
          'data-[side=top]:animate-slide-down-and-fade',
          className,
        )}
      >
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  );
}
