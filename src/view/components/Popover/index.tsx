import { ReactNode } from 'react';
import { Root } from './Root';
import { Trigger } from './Trigger';
import { Content } from './Content';

export interface PopoverProps {
  children: ReactNode;
  className?: string;
}

export const Popover = {
  Root,
  Trigger,
  Content,
};
