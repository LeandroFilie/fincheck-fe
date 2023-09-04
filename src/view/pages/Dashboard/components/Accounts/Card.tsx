import { formatCurrency } from '@app/utils/formatCurrency';
import { BankAccountIcon } from '@components/icons/bankAccount/BankAccountIcon';
import { cn } from '@app/utils/cn';
import { useDashboard } from '../DashboardContext/useDashboard';

interface CardProps {
  color: string;
  name: string;
  balance: number;
  type: 'CASH' | 'INVESTMENT' | 'CHECKING';
}

export function Card({
  color, name, balance, type,
} : CardProps) {
  const { areValuesVisible } = useDashboard();

  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountIcon type={type} />
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
          {formatCurrency(balance)}
        </span>
        <small className='text-gray-600 text-sm'>Saldo atual</small>
      </div>
    </div>
  );
}
