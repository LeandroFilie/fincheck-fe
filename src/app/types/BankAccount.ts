export interface BankAccount {
  id: string;
  name: string;
  initialBalance: number;
  currentBalance: number;
  color: string;
  type: 'CHECKING' | 'INVESTMENT' | 'CASH';
}
