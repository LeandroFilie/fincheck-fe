import { formatCurrency } from '@app/utils/formatCurrency';
import { cn } from '@app/utils/cn';
import { BankAccountTypeIcon } from '@components/icons/bankAccountType/BankAccountTypeIcon';
import { BankAccount } from '@app/types/BankAccount';
import { useDashboard } from '../DashboardContext/useDashboard';

interface CardProps {
  data: BankAccount
}

export function Card({ data } : CardProps) {
  const {
    color, name, currentBalance, type,
  } = data;
  const { areValuesVisible, openEditAccountModal } = useDashboard();

  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
      role='button'
      onClick={() => openEditAccountModal(data)}
      aria-hidden='true'
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className='text-gray-800 font-medium tracking-[-0.5px] block mt-4'>
          {name}
        </span>
      </div>

      <div>
        <span className={cn(
          'text-gray-800 font-medium tracking-[-0.5px] block',
          !areValuesVisible && 'blur-sm',
        )}
        >
          {formatCurrency(currentBalance)}
        </span>
        <small className='text-gray-600 text-sm'>Saldo atual</small>
      </div>
    </div>
  );
}
