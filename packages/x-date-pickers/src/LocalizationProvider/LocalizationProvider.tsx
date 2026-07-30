'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import { useThemeProps } from '@mui/material/styles';
import type { AdapterFormats, MuiPickersAdapter, PickerValidDate } from '../models';
import type { PickersInputLocaleText } from '../locales';

export interface PickersAdapterContextValue {
  defaultDates: {
    minDate: PickerValidDate;
    maxDate: PickerValidDate;
  };

  adapter: MuiPickersAdapter;
  localeText: PickersInputLocaleText | undefined;
}

export type PickerAdapterContextNullableValue = {
  [K in keyof PickersAdapterContextValue]: PickersAdapterContextValue[K] | null;
};

export const PickerAdapterContext = React.createContext<PickerAdapterContextNullableValue | null>(
  null,
);

export interface LocalizationProviderProps<TLocale> {
  children?: React.ReactNode;
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/quickstart/#integrate-provider-and-adapter date adapter setup section} for more details.
   */
  dateAdapter?: new (...args: any) => MuiPickersAdapter<TLocale>;
  /** Formats that are used for any child pickers */
  dateFormats?: Partial<AdapterFormats>;
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance?: any;
  /**
   * Locale for the date library you are using
   */
  adapterLocale?: TLocale;
  /**
   * Locale for components texts
   */
  localeText?: PickersInputLocaleText;
}

type LocalizationProviderComponent = (<TLocale>(
  props: LocalizationProviderProps<TLocale>,
) => React.JSX.Element) & { propTypes?: any };

/**
 * Demos:
 *
 * - [Date format and localization](https://mui.com/x/react-date-pickers/adapters-locale/)
 * - [Calendar systems](https://mui.com/x/react-date-pickers/calendar-systems/)
 * - [Translated components](https://mui.com/x/react-date-pickers/localization/)
 * - [UTC and timezones](https://mui.com/x/react-date-pickers/timezone/)
 *
 * API:
 *
 * - [LocalizationProvider API](https://mui.com/x/api/date-pickers/localization-provider/)
 */
export const LocalizationProvider = function LocalizationProvider<TLocale>(
  inProps: LocalizationProviderProps<TLocale>,
) {
    throw new Error("STUB");
} as LocalizationProviderComponent;

LocalizationProvider.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: PropTypes.any,
  children: PropTypes.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/quickstart/#integrate-provider-and-adapter date adapter setup section} for more details.
   */
  dateAdapter: PropTypes.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: PropTypes.shape({
    dayOfMonth: PropTypes.string,
    dayOfMonthFull: PropTypes.string,
    fullDate: PropTypes.string,
    fullTime12h: PropTypes.string,
    fullTime24h: PropTypes.string,
    hours12h: PropTypes.string,
    hours24h: PropTypes.string,
    keyboardDate: PropTypes.string,
    keyboardDateTime12h: PropTypes.string,
    keyboardDateTime24h: PropTypes.string,
    meridiem: PropTypes.string,
    minutes: PropTypes.string,
    month: PropTypes.string,
    monthShort: PropTypes.string,
    normalDate: PropTypes.string,
    normalDateWithWeekday: PropTypes.string,
    seconds: PropTypes.string,
    shortDate: PropTypes.string,
    weekday: PropTypes.string,
    weekdayShort: PropTypes.string,
    year: PropTypes.string,
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: PropTypes.any,
  /**
   * Locale for components texts
   */
  localeText: PropTypes.object,
} as any;
