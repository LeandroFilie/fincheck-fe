import { cn } from '@app/utils/cn';
import { useSwiper } from 'swiper/react';

interface SliderOptionProps {
  month: string;
  isActive: boolean;
  index: number;
}

export function SliderOption({ isActive, month, index }: SliderOptionProps) {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        'w-full h-12 rounded-full text-sm text-gray-800 tracking-[-0.5px] font-medium',
        isActive && 'bg-white',
      )}
    >
      {month}
    </button>
  );
}
