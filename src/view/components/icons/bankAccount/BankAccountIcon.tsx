import { iconsMap } from './iconsMap';

interface BankAccountIconProps {
  type: keyof typeof iconsMap;
}

export function BankAccountIcon({ type }: BankAccountIconProps) {
  const Icon = iconsMap[type];
  return <Icon />;
}
