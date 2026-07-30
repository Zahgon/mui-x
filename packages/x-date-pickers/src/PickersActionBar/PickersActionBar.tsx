'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import type { DialogActionsProps } from '@mui/material/DialogActions';
import DialogActions from '@mui/material/DialogActions';
import { usePickerTranslations } from '../hooks/usePickerTranslations';
import { usePickerContext } from '../hooks';

export type PickersActionBarAction =
  'clear' | 'cancel' | 'accept' | 'today' | 'next' | 'nextOrAccept';

export interface PickersActionBarProps extends DialogActionsProps {
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default
   * - `[]` for Pickers with one selection step which `closeOnSelect`.
   * - `['cancel', 'nextOrAccept']` for all other Pickers.
   */
  actions?: PickersActionBarAction[];
}

const PickersActionBarRoot = styled(DialogActions, {
  name: 'MuiPickersLayout',
  slot: 'ActionBar',
})({});

/**
 * Demos:
 *
 * - [Custom slots and subcomponents](https://mui.com/x/react-date-pickers/custom-components/)
 * - [Custom layout](https://mui.com/x/react-date-pickers/custom-layout/)
 *
 * API:
 *
 * - [PickersActionBar API](https://mui.com/x/api/date-pickers/pickers-action-bar/)
 */
function PickersActionBarComponent(props: PickersActionBarProps) {
    throw new Error("STUB");
}

PickersActionBarComponent.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default
   * - `[]` for Pickers with one selection step which `closeOnSelect`.
   * - `['cancel', 'nextOrAccept']` for all other Pickers.
   */
  actions: PropTypes.arrayOf(
    PropTypes.oneOf(['accept', 'cancel', 'clear', 'next', 'nextOrAccept', 'today']).isRequired,
  ),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

const PickersActionBar = React.memo(PickersActionBarComponent);

export { PickersActionBar };
