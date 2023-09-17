import { DropdownMenu } from '@components/DropdownMenu';
import { PlusIcon } from '@radix-ui/react-icons';
import { BankAccountIcon } from '@components/icons/BankAccountIcon';
import { CategoryIcon } from '@components/icons/categories/CategoryIcon';
import { useDashboard } from '../DashboardContext/useDashboard';

export function Fab() {
  const { openNewAccountModal } = useDashboard();

  return (
    <div className='fixed right-4 bottom-4 '>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className='text-white h-12 w-12 rounded-full bg-teal-900 flex items-center justify-center'>
          <PlusIcon className='w-6 h-6' />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content side='top'>
          <DropdownMenu.Item className='gap-2'>
            <CategoryIcon type='expense' />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item className='gap-2'>
            <CategoryIcon type='income' />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className='gap-2' onSelect={openNewAccountModal}>
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>

      </DropdownMenu.Root>
    </div>
  );
}
