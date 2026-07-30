import type {
  EventDialogLocaleText,
  EventCalendarLocaleText,
  EventTimelineLocaleText,
} from '../models/translations';
import { getSchedulerLocalization } from '../utils/getSchedulerLocalization';
import type { SchedulerLocalization } from '../utils/getSchedulerLocalization';

const roRODialog: Partial<EventDialogLocaleText> = {
  // EventDialog
  colorPickerLabel: 'Culoarea evenimentului',
  dateTimeSectionLabel: 'Dată și oră',
  resourceColorSectionLabel: 'Resursă și culoare',
  allDayLabel: 'Toată ziua',
  closeButtonAriaLabel: 'Închide',
  closeButtonLabel: 'Închide',
  deleteEvent: 'Șterge evenimentul',
  descriptionLabel: 'Descriere',
  endDateLabel: 'Data de sfârșit',
  endTimeLabel: 'Ora de sfârșit',
  eventTitleAriaLabel: 'Titlul evenimentului',
  generalTabLabel: 'General',
  labelNoResource: 'Fără resursă',
  labelInvalidResource: 'Resursă invalidă',
  recurrenceLabel: 'Recurență',
  recurrenceNoRepeat: 'Nu se repetă',
  recurrenceCustomRepeat: 'Regulă de repetare personalizată',
  recurrenceDailyPresetLabel: 'Se repetă zilnic',
  recurrenceDailyFrequencyLabel: 'zile',
  recurrenceEndsLabel: 'Se termină',
  recurrenceEndsAfterLabel: 'După',
  recurrenceEndsNeverLabel: 'Niciodată',
  recurrenceEndsUntilLabel: 'Până la',
  recurrenceEndsTimesLabel: 'ori',
  recurrenceEveryLabel: 'La fiecare',
  recurrenceRepeatLabel: 'Repetă',
  recurrenceTabLabel: 'Recurență',
  recurrenceMainSelectCustomLabel: 'Recurență',
  recurrenceWeeklyFrequencyLabel: 'săptămâni',
  recurrenceWeeklyPresetLabel: ({ weekdayName }) => { throw new Error("STUB"); },
  recurrenceMonthlyFrequencyLabel: 'luni',
  recurrenceMonthlyDayOfMonthLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekAriaLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyPresetLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberAriaLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceWeeklyMonthlySpecificInputsLabel: 'În',
  recurrenceYearlyFrequencyLabel: 'ani',
  recurrenceYearlyPresetLabel: (date) => { throw new Error("STUB"); },
  noResourceAriaLabel: 'Fără resursă',
  // selectColorAriaLabel: color => `Select ${color} as event color`,
  resourceLabel: 'Resursă',
  // requiredResourceError: 'A resource is required.',
  saveChanges: 'Salvează',
  startDateAfterEndDateError: 'Data/ora de început trebuie să fie înainte de data/ora de sfârșit.',
  startDateLabel: 'Data de început',
  startTimeLabel: 'Ora de început',

  // RecurringScopeDialog
  all: 'Toate evenimentele',
  cancel: 'Anulează',
  confirm: 'Confirmă',
  onlyThis: 'Doar acest eveniment',
  radioGroupAriaLabel: 'Aria de aplicare a modificării evenimentelor recurente',
  thisAndFollowing: 'Acest eveniment și următoarele',
  title: 'Aplică această modificare la:',
};

const roROCalendar: Partial<Omit<EventCalendarLocaleText, keyof EventDialogLocaleText>> = {
  // ResourcesTree
  resourcesLabel: 'Resurse',

  // ViewSwitcher
  agenda: 'Agendă',
  day: 'Zi',
  month: 'Lună',
  other: 'Altele',
  today: 'Astăzi',
  week: 'Săptămână',
  time: 'Timp',
  days: 'Zile',
  months: 'Luni',
  weeks: 'Săptămâni',
  years: 'Ani',

  // DateNavigator
  closeSidePanel: 'Închide panoul lateral',
  openSidePanel: 'Deschide panoul lateral',

  // SidePanelDrawer (small screens)
  // openMenu: 'Open menu',

  // Preferences menu
  amPm12h: '12 ore (1:00PM)',
  hour24h: '24 de ore (13:00)',
  preferencesMenu: 'Setări',
  showWeekends: 'Afișează weekendurile',
  showEmptyDaysInAgenda: 'Afișează zilele goale',
  showWeekNumber: 'Afișează numărul săptămânii',
  timeFormat: 'Formatul orei',
  viewSpecificOptions: (view) => { throw new Error("STUB"); },
  // startWeekOn: 'Start week on',
  // weekdaySunday: 'Sunday',
  // weekdayMonday: 'Monday',
  // weekdaySaturday: 'Saturday',

  // WeekView
  allDay: 'Toată ziua',
  hiddenEvents: (hiddenEventsCount) => { throw new Error("STUB"); },
  nextTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  previousTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  resourceAriaLabel: (resourceName) => { throw new Error("STUB"); },
  weekAbbreviation: 'S',
  weekNumberAriaLabel: (weekNumber) => { throw new Error("STUB"); },

  // EventItem
  eventItemMultiDayLabel: (endDate) => { throw new Error("STUB"); },

  // MiniCalendar
  miniCalendarLabel: 'Calendar',
  miniCalendarGoToPreviousMonth: 'Afișează luna anterioară în calendar',
  miniCalendarGoToNextMonth: 'Afișează luna următoare în calendar',

  // Main calendar region
  // calendarContentAriaLabel: 'Calendar content',

  // Timeline title sub grid
  timelineResourceTitleHeader: 'Titlul resursei',
};

const roROTimeline: Partial<Omit<EventTimelineLocaleText, keyof EventDialogLocaleText>> = {
  // Timeline title sub grid
  timelineResourceTitleHeader: 'Titlul resursei',
};

export const roRO: SchedulerLocalization = getSchedulerLocalization({
  dialog: roRODialog,
  calendar: roROCalendar,
  timeline: roROTimeline,
});
