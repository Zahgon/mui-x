import type { DateLocale } from '@mui/x-scheduler-internals/use-adapter';

export interface DateLocaleTheme {
  components: {
    MuiEventCalendar: {
      defaultProps: {
        dateLocale: DateLocale;
      };
    };
    MuiEventTimeline: {
      defaultProps: {
        dateLocale: DateLocale;
      };
    };
  };
}

export const createDateLocaleTheme = (dateFnsLocale: DateLocale): DateLocaleTheme => { throw new Error("STUB"); };
