import { EyeIcon } from '@components/icons/EyeIcon';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { AccountCard } from './AccountCard';

export function Accounts() {
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      <span className="tracking-[-0.5px] text-white block">Saldo total</span>
      <div className='flex items-center gap-2'>
        <strong className="text-2xl tracking-[-1px] text-white">
          R$ 1000,00
        </strong>
        <button className='w-8 h-8 flex items-center justify-center'>
          <EyeIcon open />
        </button>
      </div>
      <div className='flex-1 flex flex-col justify-end gap-4'>
        <div className='flex items-center justify-between'>
          <strong className="tracking-[-1px] text-white text-lg">
            Minhas Contas
          </strong>
          <div>
            <button
              className='py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40'
            >
              <ChevronLeftIcon className='text-white h-6 w-6' />
            </button>
            <button
              className='py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40'
            >
              <ChevronRightIcon className='text-white h-6 w-6' />
            </button>
          </div>
        </div>

        <div>
          <AccountCard color='#7950F2' name='Nubank' balance={1000} type='CHECKING' />
          <AccountCard color='#343A40' name='XP Investimentos' balance={1000.23} type='INVESTMENT' />
          <AccountCard color='#0F0' name='Carteira' balance={1000} type='CASH' />
        </div>
      </div>
    </div>
  );
}
