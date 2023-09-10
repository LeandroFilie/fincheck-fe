import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@app/utils/cn';
import { DropdownMenuProps } from '.';

interface ItemProps extends DropdownMenuProps{
  onSelect?: () => void;
}

export function Item({ children, className, onSelect }: ItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        'min-h-[40px] outline-none flex items-center py-2 px-4 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer',
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
