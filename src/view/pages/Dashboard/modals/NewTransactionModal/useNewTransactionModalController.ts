import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useBankAccounts } from '@app/hooks/useBankAccounts';
import { useCategories } from '@app/hooks/useCategories';
import { useMemo } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { transactionsService } from '@app/services/transactionsService';
import toast from 'react-hot-toast';
import { currencyStringToNumber } from '@app/utils/currencyStringToNumber';
import { useDashboard } from '../../components/DashboardContext/useDashboard';

const schema = z.object({
  value: z.string().nonempty('Valor é obrigatório'),
  name: z.string().nonempty('Nome é obrigatório'),
  categoryId: z.string().nonempty('Categoria é obrigatório'),
  bankAccountId: z.string().nonempty('Conta é obrigatório'),
  date: z.date(),
});

type FormData = z.infer<typeof schema>;

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
  } = useDashboard();
  const { accounts } = useBankAccounts();
  const { categories: categoriesResponse } = useCategories();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isLoading, mutateAsync } = useMutation(transactionsService.create);

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        date: data.date.toISOString(),
        value: currencyStringToNumber(data.value),
        type: newTransactionType!,
      });

      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success(
        newTransactionType === 'EXPENSE'
          ? 'Despesa cadastrada com sucesso'
          : 'Receita cadastrada com sucesso',
      );
      closeNewTransactionModal();
      reset();
    } catch {
      toast.error(
        newTransactionType === 'EXPENSE'
          ? 'Erro ao cadastrar a despesa'
          : 'Erro ao cadastrar a receita',
      );
    }
  });

  const categories = useMemo(() => (
    categoriesResponse.filter((category) => category.type === newTransactionType)
  ), [categoriesResponse, newTransactionType]);

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    register,
    errors,
    control,
    handleSubmit,
    accounts,
    categories,
    isLoading,
  };
}
