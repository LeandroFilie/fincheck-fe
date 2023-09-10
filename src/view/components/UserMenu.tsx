import { useAuth } from '@app/hooks/useAuth';
import { DropdownMenu } from '@components/DropdownMenu';
import { ExitIcon } from '@radix-ui/react-icons';

export function UserMenu() {
  const { signout } = useAuth();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="bg-teal-0 rounded-full w-10 h-10 flex items-center justify-center border border-teal-100">
          <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">LF</span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className='w-32'>
        <DropdownMenu.Item className='flex items-center justify-between' onSelect={signout}>
          Sair
          <ExitIcon className='w-4 h-4' />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>

  );
}
