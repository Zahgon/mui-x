import { warnOnce } from '@mui/x-internals/warning';
import { isNumber } from '../../utils/utils';
import type { DataGridProcessedProps } from '../../models/props/DataGridProps';
import { GridSignature } from '../../constants/signature';

export type PropValidator<TProps> = (props: TProps) => string | undefined;

export const propValidatorsDataGrid: PropValidator<DataGridProcessedProps>[] = [
  (props) =>
    { throw new Error("STUB"); },
  (props) =>
    { throw new Error("STUB"); },
  (props) =>
    { throw new Error("STUB"); },
  (props) =>
    { throw new Error("STUB"); },
];

export function validateProps<TProps>(props: TProps, validators: PropValidator<TProps>[]) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  validators.forEach((validator) => {
      throw new Error("STUB");
  });
}
