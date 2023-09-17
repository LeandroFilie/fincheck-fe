import { cn } from '@app/utils/cn';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { NumericFormat } from 'react-number-format';

interface InputCurrencyProps {
  error?: string;
  value?: string | number;
  onChange?(value: string | number): void;
}

export function InputCurrency({ value, error, onChange }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        thousandSeparator='.'
        decimalSeparator=','
        value={value}
        onValueChange={(values) => onChange?.(values.value)}
        className={cn(
          'w-full text-gray-800 text-[32px] font-bold tracking-[-1px] outline-none',
          error && 'text-red-900',
        )}
      />

      {error && (
      <div className="flex gap-2 items-center mt-2 text-red-900">
        <CrossCircledIcon />
        <span className="text-xs">{error}</span>
      </div>
      )}
    </div>
  );
}
