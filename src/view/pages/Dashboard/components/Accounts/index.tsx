import { EyeIcon } from '@components/icons/EyeIcon';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatCurrency } from '@app/utils/formatCurrency';
import { cn } from '@app/utils/cn';
import { Spinner } from '@components/Spinner';
import { PlusIcon } from '@radix-ui/react-icons';
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
    accounts,
    openNewAccountModal,
    currentBalance,
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
              {formatCurrency(currentBalance)}
            </strong>
            <button
              className='w-8 h-8 flex items-center justify-center'
              onClick={toggleValuesVisibility}
            >
              <EyeIcon open={!areValuesVisible} />
            </button>
          </div>
          <div className='flex-1 flex flex-col justify-end mt-10 md:mt-0'>
            {accounts.length === 0 && (
            <>
              <div className='mb-4' slot='container-start'>
                <strong className="tracking-[-1px] text-white text-lg">
                  Minhas Contas
                </strong>
              </div>

              <button
                className='mt-4 h-52 rounded-2xl border-2 border-dashed border-teal-600
                flex flex-col items-center justify-center gap-4 text-white'
                onClick={openNewAccountModal}
              >
                <div className='w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center'>
                  <PlusIcon className='w-6 h-6' />
                </div>
                <span className='font-medium tracking-[-0.5px] block w-32 text-center'>Cadastre uma nova conta</span>
              </button>
            </>
            )}
            {accounts.length > 0 && (
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
                    {accounts.map((account) => (
                      <SwiperSlide key={account.id}>
                        <Card
                          color={account.color}
                          name={account.name}
                          balance={account.currentBalance}
                          type={account.type}
                        />
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
