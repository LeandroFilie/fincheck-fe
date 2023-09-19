import { useWindowWidth } from '@app/hooks/useWindowWidth';
import { useMemo, useState } from 'react';
import { useBankAccounts } from '@app/hooks/useBankAccounts';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useAccountsController() {
  const [sliderState, setSliderState] = useState({ isBeginning: true, isEnd: false });
  const windowWidth = useWindowWidth();
  const {
    areValuesVisible,
    toggleValuesVisibility,
    openNewAccountModal,
    openEditAccountModal,
  } = useDashboard();

  const { accounts, isFetching } = useBankAccounts();

  const currentBalance = useMemo(() => (
    accounts.reduce((total, account) => total + account.currentBalance, 0)
  ), [accounts]);

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading: isFetching,
    accounts,
    openNewAccountModal,
    currentBalance,
    openEditAccountModal,
  };
}
