import { EyeIcon } from '@components/icons/EyeIcon';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AccountCard } from './AccountCard';
import { AccountsSliderNavigation } from './AccountsSliderNavigation';

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
      <div className='flex-1 flex flex-col justify-end'>
        <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={2.1}
          >
            <div className='flex items-center justify-between mb-4' slot='container-start'>
              <strong className="tracking-[-1px] text-white text-lg">
                Minhas Contas
              </strong>
              <AccountsSliderNavigation />
            </div>

            <div>
              <SwiperSlide>
                <AccountCard color='#7950F2' name='Nubank' balance={1000} type='CHECKING' />
              </SwiperSlide>
              <SwiperSlide>
                <AccountCard color='#343A40' name='XP Investimentos' balance={1000.23} type='INVESTMENT' />
              </SwiperSlide>
              <SwiperSlide>
                <AccountCard color='#0F0' name='Carteira' balance={1000} type='CASH' />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
