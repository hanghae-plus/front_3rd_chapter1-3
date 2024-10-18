import { deepEquals } from '../equalities/index.ts';
import { FunctionComponent } from 'react';
import { memo } from './memo.tsx';

export function deepMemo<P extends object>(Component: FunctionComponent<P>) {
  return memo(Component, deepEquals);
}