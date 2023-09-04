import { EyeIcon } from '@components/icons/EyeIcon';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatCurrency } from '@app/utils/formatCurrency';
import { cn } from '@app/utils/cn';
import { Spinner } from '@components/Spinner';
import { Card } from './Card';
import { SliderNavigation } from './SliderNavigation';
import { useAccountsController } from './useAccountsController';

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {isLoading && (
        <div className='w-full h-full flex items-center justify-center'>
          <Spinner className='text-teal-950/50 fill-white w-10 h-10' />
        </div>
      )}
      {!isLoading && (
        <>
          <span className="tracking-[-0.5px] text-white block">Saldo total</span>
          <div className='flex items-center gap-2'>
            <strong
              className={cn(
                'text-2xl tracking-[-1px] text-white',
                !areValuesVisible && 'blur-md',
              )}
            >
              {formatCurrency(1000)}
            </strong>
            <button
              className='w-8 h-8 flex items-center justify-center'
              onClick={toggleValuesVisibility}
            >
              <EyeIcon open={!areValuesVisible} />
            </button>
          </div>
          <div className='flex-1 flex flex-col justify-end mt-10 md:mt-0'>
            <div>
              <Swiper
                spaceBetween={16}
                slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
                onSlideChange={(swiper) => {
                  setSliderState({ isBeginning: swiper.isBeginning, isEnd: swiper.isEnd });
                }}
              >
                <div className='flex items-center justify-between mb-4' slot='container-start'>
                  <strong className="tracking-[-1px] text-white text-lg">
                    Minhas Contas
                  </strong>
                  <SliderNavigation
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                  />
                </div>

                <div>
                  <SwiperSlide>
                    <Card color='#7950F2' name='Nubank' balance={1000} type='CHECKING' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card color='#343A40' name='XP Investimentos' balance={1000.23} type='INVESTMENT' />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Card color='#0F0' name='Carteira' balance={1000} type='CASH' />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
