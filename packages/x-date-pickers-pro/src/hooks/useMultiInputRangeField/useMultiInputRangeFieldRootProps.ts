import useEventCallback from '@mui/utils/useEventCallback';
import {
  executeInTheNextEventLoopTick,
  getActiveElement,
  useNullablePickerContext,
  usePickerPrivateContext,
} from '@mui/x-date-pickers/internals';

/**
 * @ignore - internal hook.
 */
export function useMultiInputRangeFieldRootProps<TForwardedProps extends { [key: string]: any }>(
  forwardedProps: TForwardedProps,
): UseMultiInputRangeFieldRootPropsReturnValue<TForwardedProps> {
    throw new Error("STUB");
}

export type UseMultiInputRangeFieldRootPropsReturnValue<
  TForwardedProps extends { [key: string]: any },
> = Omit<TForwardedProps, 'onBlur'> & {
  onBlur: () => void;
};
