import { Modal } from '@components/Modal';
import { InputCurrency } from '@components/InputCurrency';
import { Input } from '@components/Input';
import { Select } from '@components/Select';
import { Button } from '@components/Button';
import { DatePickerInput } from '@components/DatePickerInput';
import { Controller } from 'react-hook-form';
import { Transaction } from '@app/types/Transaction';
import { useEditTransactionModalController } from './useEditTransactionModalController';

interface EditTransactionModalProps {
  open: boolean;
  onClose: () => void;
  transaction: Transaction | null;
}

export function EditTransactionModal({
  transaction,
  onClose,
  open,
}: EditTransactionModalProps) {
  const {
    control,
    errors,
    handleSubmit,
    register,
    accounts,
    categories,
    isLoading,
  } = useEditTransactionModalController(transaction, onClose);

  const isExpense = transaction?.type === 'EXPENSE';

  return (
    <Modal
      title={isExpense ? 'Editar Despesa' : 'Editar Receita'}
      open={open}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className='text-gray-600 tracking-[0.5px] text-xs'>
            Valor da {isExpense ? 'despesa' : 'receita'}
          </span>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600 tracking-[0.5px] text-lg'>R$</span>
            <Controller
              control={control}
              name="value"
              defaultValue='0'
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  value={value}
                  error={errors.value?.message}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>

        <div className='mt-10 flex flex-col gap-4'>
          <Input
            type='text'
            placeholder={isExpense ? 'Nome da Despesa' : 'Nome da Receita'}
            error={errors.name?.message}
            {...register('name')}
          />

          <Controller
            control={control}
            name="categoryId"
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                value={value}
                placeholder='Categoria'
                error={errors.categoryId?.message}
                options={categories.map((category) => ({
                  value: category.id,
                  label: category.name,
                }))}
              />
            )}
          />

          <Controller
            control={control}
            name="bankAccountId"
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                value={value}
                error={errors.bankAccountId?.message}
                placeholder={isExpense ? 'Pagar com' : 'Receber em'}
                options={accounts.map((account) => ({
                  value: account.id,
                  label: account.name,
                }))}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { value, onChange } }) => (
              <DatePickerInput value={value} onChange={onChange} />
            )}
          />

          <Button className='mt-2' isLoading={isLoading}>Salvar</Button>
        </div>
      </form>
    </Modal>
  );
}
