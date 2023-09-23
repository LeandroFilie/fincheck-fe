import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBankAccounts } from '@app/hooks/useBankAccounts';
import { useCategories } from '@app/hooks/useCategories';
import { useMemo, useState } from 'react';
import { Transaction } from '@app/types/Transaction';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { transactionsService } from '@app/services/transactionsService';
import { currencyStringToNumber } from '@app/utils/currencyStringToNumber';
import toast from 'react-hot-toast';

const schema = z.object({
  value: z.union([
    z.string().nonempty('Valor é obrigatório'),
    z.number(),
  ]),
  name: z.string().nonempty('Nome é obrigatório'),
  categoryId: z.string().nonempty('Categoria é obrigatório'),
  bankAccountId: z.string().nonempty('Conta é obrigatório'),
  date: z.date(),
});

type FormData = z.infer<typeof schema>;

export function useEditTransactionModalController(
  transaction: Transaction | null,
  onClose: () => void,
) {
  const { accounts } = useBankAccounts();
  const { categories: categoriesResponse } = useCategories();
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      bankAccountId: transaction?.bankAccountId,
      categoryId: transaction?.categoryId,
      name: transaction?.name,
      value: transaction?.value,
      date: transaction ? new Date(transaction?.date) : new Date(),
    },
  });
  const queryClient = useQueryClient();
  const { isLoading, mutateAsync: updateTransaction } = useMutation(transactionsService.update);
  const {
    isLoading: isLoadingDelete,
    mutateAsync: removeTransaction,
  } = useMutation(transactionsService.remove);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const categories = useMemo(() => (
    categoriesResponse.filter((category) => category.type === transaction?.type)
  ), [categoriesResponse, transaction]);

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await updateTransaction({
        ...data,
        id: transaction!.id,
        date: data.date.toISOString(),
        value: currencyStringToNumber(data.value),
        type: transaction!.type,
      });

      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success(
        transaction!.type === 'EXPENSE'
          ? 'Despesa editada com sucesso'
          : 'Receita editada com sucesso',
      );
      onClose();
    } catch {
      toast.error(
        transaction!.type === 'EXPENSE'
          ? 'Erro ao salvar a despesa'
          : 'Erro ao salvar a receita',
      );
    }
  });

  async function handleDeleteTransaction() {
    try {
      await removeTransaction(transaction!.id);

      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success(
        transaction!.type === 'EXPENSE'
          ? 'Despesa removida com sucesso'
          : 'Receita removida com sucesso',
      );
      onClose();
    } catch {
      toast.error(
        transaction!.type === 'EXPENSE'
          ? 'Erro ao remover a despesa'
          : 'Erro ao remover a receita',
      );
    }
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  return {
    register,
    errors,
    control,
    handleSubmit,
    accounts,
    categories,
    isLoading,
    isDeleteModalOpen,
    isLoadingDelete,
    handleDeleteTransaction,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
  };
}
