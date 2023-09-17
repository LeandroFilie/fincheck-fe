import { httpClient } from '../httpClient';

type BankAccountsResponse = Array<{
  id: string;
  name: string;
  initialBalance: number;
  currentBalance: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
}>;

export async function getAll() {
  const { data } = await httpClient.get<BankAccountsResponse>('/bank-accounts');

  return data;
}
