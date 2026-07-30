import type {
  EventDialogLocaleText,
  EventCalendarLocaleText,
  EventTimelineLocaleText,
} from '../models/translations';
import { getSchedulerLocalization } from '../utils/getSchedulerLocalization';
import type { SchedulerLocalization } from '../utils/getSchedulerLocalization';

const deDEDialog: Partial<EventDialogLocaleText> = {
  // EventDialog
  colorPickerLabel: 'Ereignisfarbe',
  dateTimeSectionLabel: 'Datum und Uhrzeit',
  resourceColorSectionLabel: 'Ressource und Farbe',
  allDayLabel: 'Ganztägig',
  closeButtonAriaLabel: 'Schließen',
  closeButtonLabel: 'Schließen',
  deleteEvent: 'Ereignis löschen',
  descriptionLabel: 'Beschreibung',
  endDateLabel: 'Enddatum',
  endTimeLabel: 'Endzeit',
  eventTitleAriaLabel: 'Ereignistitel',
  generalTabLabel: 'Allgemein',
  labelNoResource: 'Keine Ressource',
  labelInvalidResource: 'Ungültige Ressource',
  recurrenceLabel: 'Wiederholung',
  recurrenceNoRepeat: 'Nicht wiederholen',
  recurrenceCustomRepeat: 'Benutzerdefinierte Wiederholungsregel',
  recurrenceDailyPresetLabel: 'Wird täglich wiederholt',
  recurrenceDailyFrequencyLabel: 'Tage',
  recurrenceEndsLabel: 'Endet',
  recurrenceEndsAfterLabel: 'Nach',
  recurrenceEndsNeverLabel: 'Nie',
  recurrenceEndsUntilLabel: 'Bis',
  recurrenceEndsTimesLabel: 'Mal',
  recurrenceEveryLabel: 'Jede',
  recurrenceRepeatLabel: 'Wiederholen',
  recurrenceTabLabel: 'Wiederholung',
  recurrenceMainSelectCustomLabel: 'Wiederholung',
  recurrenceWeeklyFrequencyLabel: 'Wochen',
  recurrenceWeeklyPresetLabel: ({ weekdayName }) => { throw new Error("STUB"); },
  recurrenceMonthlyFrequencyLabel: 'Monate',
  recurrenceMonthlyDayOfMonthLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekAriaLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyPresetLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberAriaLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceWeeklyMonthlySpecificInputsLabel: 'Am',
  recurrenceYearlyFrequencyLabel: 'Jahre',
  recurrenceYearlyPresetLabel: (date) => { throw new Error("STUB"); },
  noResourceAriaLabel: 'Keine Ressource',
  // selectColorAriaLabel: color => `Select ${color} as event color`,
  resourceLabel: 'Ressource',
  // requiredResourceError: 'A resource is required.',
  saveChanges: 'Speichern',
  startDateAfterEndDateError: 'Startdatum/-zeit muss vor dem Enddatum/-zeit liegen.',
  startDateLabel: 'Startdatum',
  startTimeLabel: 'Startzeit',

  // RecurringScopeDialog
  all: 'Alle Ereignisse',
  cancel: 'Abbrechen',
  confirm: 'Bestätigen',
  onlyThis: 'Nur dieses Ereignis',
  radioGroupAriaLabel: 'Bearbeitungsbereich für wiederkehrende Ereignisse',
  thisAndFollowing: 'Dieses und folgende Ereignisse',
  title: 'Diese Änderung anwenden auf:',
};

const deDECalendar: Partial<Omit<EventCalendarLocaleText, keyof EventDialogLocaleText>> = {
  // ResourcesTree
  resourcesLabel: 'Ressourcen',

  // ViewSwitcher
  agenda: 'Agenda',
  day: 'Tag',
  month: 'Monat',
  other: 'Andere',
  today: 'Heute',
  week: 'Woche',
  time: 'Zeit',
  days: 'Tage',
  months: 'Monate',
  weeks: 'Wochen',
  years: 'Jahre',

  // DateNavigator
  closeSidePanel: 'Seitenpanel schließen',
  openSidePanel: 'Seitenpanel öffnen',

  // SidePanelDrawer (small screens)
  // openMenu: 'Open menu',

  // Preferences menu
  amPm12h: '12-Stunden (1:00PM)',
  hour24h: '24-Stunden (13:00)',
  preferencesMenu: 'Einstellungen',
  showWeekends: 'Wochenenden anzeigen',
  showEmptyDaysInAgenda: 'Leere Tage anzeigen',
  showWeekNumber: 'Kalenderwoche anzeigen',
  timeFormat: 'Zeitformat',
  viewSpecificOptions: (view) => { throw new Error("STUB"); },
  // startWeekOn: 'Start week on',
  // weekdaySunday: 'Sunday',
  // weekdayMonday: 'Monday',
  // weekdaySaturday: 'Saturday',

  // WeekView
  allDay: 'Ganztägig',
  hiddenEvents: (hiddenEventsCount) => { throw new Error("STUB"); },
  nextTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  previousTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  resourceAriaLabel: (resourceName) => { throw new Error("STUB"); },
  weekAbbreviation: 'W',
  weekNumberAriaLabel: (weekNumber) => { throw new Error("STUB"); },

  // EventItem
  eventItemMultiDayLabel: (endDate) => { throw new Error("STUB"); },

  // MiniCalendar
  miniCalendarLabel: 'Kalender',
  miniCalendarGoToPreviousMonth: 'Vorherigen Monat im Kalender anzeigen',
  miniCalendarGoToNextMonth: 'Nächsten Monat im Kalender anzeigen',

  // Main calendar region
  // calendarContentAriaLabel: 'Calendar content',

  // Timeline title sub grid
  timelineResourceTitleHeader: 'Ressourcentitel',
};

const deDETimeline: Partial<Omit<EventTimelineLocaleText, keyof EventDialogLocaleText>> = {
  // Timeline title sub grid
  timelineResourceTitleHeader: 'Ressourcentitel',
};

export const deDE: SchedulerLocalization = getSchedulerLocalization({
  dialog: deDEDialog,
  calendar: deDECalendar,
  timeline: deDETimeline,
});
