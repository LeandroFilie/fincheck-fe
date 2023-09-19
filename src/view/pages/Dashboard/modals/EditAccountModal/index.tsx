import { Modal } from '@components/Modal';
import { InputCurrency } from '@components/InputCurrency';
import { Input } from '@components/Input';
import { Select } from '@components/Select';
import { ColorsDropdownInput } from '@components/ColorsDropdownInput';
import { Button } from '@components/Button';
import { Controller } from 'react-hook-form';
import { TrashIcon } from '@components/icons/TrashIcon';
import { ConfirmDeleteModal } from '@components/ConfirmDeleteModal';
import { useEditAccountModalController } from './useEditAccountModalController';

export function EditAccountModal() {
  const {
    errors,
    handleSubmit,
    register,
    control,
    isLoading,
    closeEditAccountModal,
    isEditAccountModalOpen,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount,
    isLoadingDelete,
  } = useEditAccountModalController();

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        onClose={handleCloseDeleteModal}
        title='Tem certeza que deseja excluir essa conta?'
        description='Ao excluir essa conta também serão excluídos todos os
        registros de receita e despesas relacionados.'
        onConfirm={handleDeleteAccount}
        isLoading={isLoadingDelete}
      />
    );
  }

  return (
    <Modal
      title="Editar Conta"
      open={isEditAccountModalOpen}
      onClose={closeEditAccountModal}
      rigthAction={(
        <button onClick={handleOpenDeleteModal}>
          <TrashIcon className='w-6 h-6 text-red-900' />
        </button>
      )}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className='text-gray-600 tracking-[0.5px] text-xs'>Saldo</span>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600 tracking-[0.5px] text-lg'>R$</span>
            <Controller
              control={control}
              name="initialBalance"
              defaultValue='0'
              render={({ field: { onChange, value } }) => (
                <InputCurrency
                  value={value}
                  error={errors.initialBalance?.message}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>

        <div className='mt-10 flex flex-col gap-4'>
          <Input
            type='text'
            placeholder='Nome da Conta'
            error={errors.name?.message}
            {...register('name')}
          />

          <Controller
            control={control}
            name="type"
            defaultValue='CHECKING'
            render={({ field: { onChange, value } }) => (
              <Select
                onChange={onChange}
                value={value}
                placeholder='Tipo'
                options={[
                  { value: 'CHECKING', label: 'Conta Corrente' },
                  { value: 'INVESTMENT', label: 'Investimentos' },
                  { value: 'CASH', label: 'Dinheiro Físico' },
                ]}
                error={errors.type?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="color"
            defaultValue=''
            render={({ field: { onChange, value } }) => (
              <ColorsDropdownInput
                value={value}
                error={errors.color?.message}
                onChange={onChange}
              />
            )}
          />

          <Button type="submit" className='mt-2' isLoading={isLoading}>Salvar</Button>
        </div>
      </form>
    </Modal>
  );
}
