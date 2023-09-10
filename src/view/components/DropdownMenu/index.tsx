import { ReactNode } from 'react';
import { Root } from './Root';
import { Trigger } from './Trigger';
import { Content } from './Content';
import { Item } from './Item';

export interface DropdownMenuProps {
  children: ReactNode;
  className?: string;
}

export const DropdownMenu = {
  Root,
  Trigger,
  Content,
  Item,
};
