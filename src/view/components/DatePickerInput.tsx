import { formatDate } from '@app/utils/formatDate';
import { cn } from '@app/utils/cn';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Popover } from './Popover';
import { DatePicker } from './DatePicker';

interface ColorsDropdownInputProps {
  className?: string;
  error?: string;
  value?: Date;
  onChange?(date: Date): void;
}

export function DatePickerInput({
  className, error, value, onChange,
}: ColorsDropdownInputProps) {
  const [selectedDate, setSelectedDate] = useState(value ?? new Date());

  function handleChangeDate(date: Date) {
    setSelectedDate(date);
    onChange?.(date);
  }

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger className='w-full'>
          <div className={cn(
            'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-700 focus:border-gray-800 transition-all outline-none text-left relative pt-5',
            error && '!border-red-900',
            className,
          )}
          >
            <span className='absolute text-gray-700 text-xs left-[13px] top-2 pointer-events-none'>Data</span>
            <span>{formatDate(selectedDate)}</span>
          </div>

          {error && (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <DatePicker
            value={selectedDate}
            onChange={handleChangeDate}
          />
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
