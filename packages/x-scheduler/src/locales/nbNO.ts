import type {
  EventDialogLocaleText,
  EventCalendarLocaleText,
  EventTimelineLocaleText,
} from '../models/translations';
import { getSchedulerLocalization } from '../utils/getSchedulerLocalization';
import type { SchedulerLocalization } from '../utils/getSchedulerLocalization';

const nbNODialog: Partial<EventDialogLocaleText> = {
  // EventDialog
  colorPickerLabel: 'Hendelsesfarge',
  dateTimeSectionLabel: 'Dato og tid',
  resourceColorSectionLabel: 'Ressurs og farge',
  allDayLabel: 'Hele dagen',
  closeButtonAriaLabel: 'Lukk',
  closeButtonLabel: 'Lukk',
  deleteEvent: 'Slett hendelse',
  descriptionLabel: 'Beskrivelse',
  endDateLabel: 'Sluttdato',
  endTimeLabel: 'Slutttidspunkt',
  eventTitleAriaLabel: 'Hendelsestittel',
  generalTabLabel: 'Generelt',
  labelNoResource: 'Ingen ressurs',
  labelInvalidResource: 'Ugyldig ressurs',
  recurrenceLabel: 'Gjentakelse',
  recurrenceNoRepeat: 'Ingen gjentakelse',
  recurrenceCustomRepeat: 'Egendefinert gjentakelsesregel',
  recurrenceDailyPresetLabel: 'Gjentas daglig',
  recurrenceDailyFrequencyLabel: 'dager',
  recurrenceEndsLabel: 'Slutter',
  recurrenceEndsAfterLabel: 'Etter',
  recurrenceEndsNeverLabel: 'Aldri',
  recurrenceEndsUntilLabel: 'Til',
  recurrenceEndsTimesLabel: 'ganger',
  recurrenceEveryLabel: 'Hver',
  recurrenceRepeatLabel: 'Gjenta',
  recurrenceTabLabel: 'Gjentakelse',
  recurrenceMainSelectCustomLabel: 'Gjentakelse',
  recurrenceWeeklyFrequencyLabel: 'uker',
  recurrenceWeeklyPresetLabel: ({ weekdayName }) => { throw new Error("STUB"); },
  recurrenceMonthlyFrequencyLabel: 'måneder',
  recurrenceMonthlyDayOfMonthLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekAriaLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyPresetLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberAriaLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceWeeklyMonthlySpecificInputsLabel: 'På',
  recurrenceYearlyFrequencyLabel: 'år',
  recurrenceYearlyPresetLabel: (date) => { throw new Error("STUB"); },
  noResourceAriaLabel: 'Ingen spesifikk ressurs',
  // selectColorAriaLabel: color => `Select ${color} as event color`,
  resourceLabel: 'Ressurs',
  // requiredResourceError: 'A resource is required.',
  saveChanges: 'Lagre',
  startDateAfterEndDateError: 'Startdato/-tid må være før sluttdato/-tid.',
  startDateLabel: 'Startdato',
  startTimeLabel: 'Starttidspunkt',

  // RecurringScopeDialog
  all: 'Alle hendelser',
  cancel: 'Avbryt',
  confirm: 'Bekreft',
  onlyThis: 'Bare denne hendelsen',
  radioGroupAriaLabel: 'Rediger omfang for gjentakende hendelser',
  thisAndFollowing: 'Denne og etterfølgende hendelser',
  title: 'Bruk denne endringen på:',
};

const nbNOCalendar: Partial<Omit<EventCalendarLocaleText, keyof EventDialogLocaleText>> = {
  // ResourcesTree
  resourcesLabel: 'Ressurser',

  // ViewSwitcher
  agenda: 'Agenda',
  day: 'Dag',
  month: 'Måned',
  other: 'Annet',
  today: 'I dag',
  week: 'Uke',
  time: 'Tid',
  days: 'Dager',
  months: 'Måneder',
  weeks: 'Uker',
  years: 'År',

  // DateNavigator
  closeSidePanel: 'Lukk sidepanel',
  openSidePanel: 'Åpne sidepanel',

  // SidePanelDrawer (small screens)
  // openMenu: 'Open menu',

  // Preferences menu
  amPm12h: '12-timer (1:00PM)',
  hour24h: '24-timer (13:00)',
  preferencesMenu: 'Innstillinger',
  showWeekends: 'Vis helger',
  showEmptyDaysInAgenda: 'Vis tomme dager',
  showWeekNumber: 'Vis ukenummer',
  timeFormat: 'Tidsformat',
  viewSpecificOptions: (view) => { throw new Error("STUB"); },
  // startWeekOn: 'Start week on',
  // weekdaySunday: 'Sunday',
  // weekdayMonday: 'Monday',
  // weekdaySaturday: 'Saturday',

  // WeekView
  allDay: 'Hele dagen',
  hiddenEvents: (hiddenEventsCount) => { throw new Error("STUB"); },
  nextTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  previousTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  resourceAriaLabel: (resourceName) => { throw new Error("STUB"); },
  weekAbbreviation: 'U',
  weekNumberAriaLabel: (weekNumber) => { throw new Error("STUB"); },

  // EventItem
  eventItemMultiDayLabel: (endDate) => { throw new Error("STUB"); },

  // MiniCalendar
  miniCalendarLabel: 'Kalender',
  miniCalendarGoToPreviousMonth: 'Vis forrige måned i kalender',
  miniCalendarGoToNextMonth: 'Vis neste måned i kalender',

  // Main calendar region
  // calendarContentAriaLabel: 'Calendar content',

  // Timeline title sub grid
  timelineResourceTitleHeader: 'Ressurstittel',
};

const nbNOTimeline: Partial<Omit<EventTimelineLocaleText, keyof EventDialogLocaleText>> = {
  // Timeline title sub grid
  timelineResourceTitleHeader: 'Ressurstittel',
};

export const nbNO: SchedulerLocalization = getSchedulerLocalization({
  dialog: nbNODialog,
  calendar: nbNOCalendar,
  timeline: nbNOTimeline,
});
