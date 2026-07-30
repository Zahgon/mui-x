import type {
  EventDialogLocaleText,
  EventCalendarLocaleText,
  EventTimelineLocaleText,
} from '../models/translations';
import { getSchedulerLocalization } from '../utils/getSchedulerLocalization';
import type { SchedulerLocalization } from '../utils/getSchedulerLocalization';

const itITDialog: Partial<EventDialogLocaleText> = {
  // EventDialog
  colorPickerLabel: 'Colore evento',
  dateTimeSectionLabel: 'Data e ora',
  resourceColorSectionLabel: 'Risorsa e colore',
  allDayLabel: 'Tutto il giorno',
  closeButtonAriaLabel: 'Chiudi',
  closeButtonLabel: 'Chiudi',
  deleteEvent: 'Elimina evento',
  descriptionLabel: 'Descrizione',
  endDateLabel: 'Data di fine',
  endTimeLabel: 'Ora di fine',
  eventTitleAriaLabel: 'Titolo evento',
  generalTabLabel: 'Generale',
  labelNoResource: 'Nessuna risorsa',
  labelInvalidResource: 'Risorsa non valida',
  recurrenceLabel: 'Ricorrenza',
  recurrenceNoRepeat: 'Non ripetere',
  recurrenceCustomRepeat: 'Regola di ripetizione personalizzata',
  recurrenceDailyPresetLabel: 'Si ripete ogni giorno',
  recurrenceDailyFrequencyLabel: 'giorni',
  recurrenceEndsLabel: 'Termina',
  recurrenceEndsAfterLabel: 'Dopo',
  recurrenceEndsNeverLabel: 'Mai',
  recurrenceEndsUntilLabel: 'Fino al',
  recurrenceEndsTimesLabel: 'volte',
  recurrenceEveryLabel: 'Ogni',
  recurrenceRepeatLabel: 'Ripeti',
  recurrenceTabLabel: 'Ricorrenza',
  recurrenceMainSelectCustomLabel: 'Ricorrenza',
  recurrenceWeeklyFrequencyLabel: 'settimane',
  recurrenceWeeklyPresetLabel: ({ weekdayName }) => { throw new Error("STUB"); },
  recurrenceMonthlyFrequencyLabel: 'mesi',
  recurrenceMonthlyDayOfMonthLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekAriaLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyPresetLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberAriaLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceWeeklyMonthlySpecificInputsLabel: 'Il',
  recurrenceYearlyFrequencyLabel: 'anni',
  recurrenceYearlyPresetLabel: (date) => { throw new Error("STUB"); },
  noResourceAriaLabel: 'Nessuna risorsa specifica',
  // selectColorAriaLabel: color => `Select ${color} as event color`,
  resourceLabel: 'Risorsa',
  // requiredResourceError: 'A resource is required.',
  saveChanges: 'Salva',
  startDateAfterEndDateError: 'La data/ora di inizio deve essere precedente alla data/ora di fine.',
  startDateLabel: 'Data di inizio',
  startTimeLabel: 'Ora di inizio',

  // RecurringScopeDialog
  all: 'Tutti gli eventi',
  cancel: 'Annulla',
  confirm: 'Conferma',
  onlyThis: 'Solo questo evento',
  radioGroupAriaLabel: 'Ambito di modifica eventi ricorrenti',
  thisAndFollowing: 'Questo e gli eventi successivi',
  title: 'Applica questa modifica a:',
};

const itITCalendar: Partial<Omit<EventCalendarLocaleText, keyof EventDialogLocaleText>> = {
  // ResourcesTree
  resourcesLabel: 'Risorse',

  // ViewSwitcher
  agenda: 'Agenda',
  day: 'Giorno',
  month: 'Mese',
  other: 'Altro',
  today: 'Oggi',
  week: 'Settimana',
  time: 'Ora',
  days: 'Giorni',
  months: 'Mesi',
  weeks: 'Settimane',
  years: 'Anni',

  // DateNavigator
  closeSidePanel: 'Chiudi pannello laterale',
  openSidePanel: 'Apri pannello laterale',

  // SidePanelDrawer (small screens)
  // openMenu: 'Open menu',

  // Preferences menu
  amPm12h: '12 ore (1:00 PM)',
  hour24h: '24 ore (13:00)',
  preferencesMenu: 'Impostazioni',
  showWeekends: 'Mostra fine settimana',
  showEmptyDaysInAgenda: 'Mostra giorni vuoti',
  showWeekNumber: 'Mostra numero della settimana',
  timeFormat: 'Formato ora',
  viewSpecificOptions: (view) => { throw new Error("STUB"); },
  // startWeekOn: 'Start week on',
  // weekdaySunday: 'Sunday',
  // weekdayMonday: 'Monday',
  // weekdaySaturday: 'Saturday',

  // WeekView
  allDay: 'Tutto il giorno',
  hiddenEvents: (hiddenEventsCount) => { throw new Error("STUB"); },
  nextTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  previousTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  resourceAriaLabel: (resourceName) => { throw new Error("STUB"); },
  weekAbbreviation: 'S',
  weekNumberAriaLabel: (weekNumber) => { throw new Error("STUB"); },

  // EventItem
  eventItemMultiDayLabel: (endDate) => { throw new Error("STUB"); },

  // MiniCalendar
  miniCalendarLabel: 'Calendario',
  miniCalendarGoToPreviousMonth: 'Mostra il mese precedente nel calendario',
  miniCalendarGoToNextMonth: 'Mostra il mese successivo nel calendario',

  // Main calendar region
  // calendarContentAriaLabel: 'Calendar content',

  // Timeline title sub grid
  timelineResourceTitleHeader: 'Titolo risorsa',
};

const itITTimeline: Partial<Omit<EventTimelineLocaleText, keyof EventDialogLocaleText>> = {
  // Timeline title sub grid
  timelineResourceTitleHeader: 'Titolo risorsa',
};

export const itIT: SchedulerLocalization = getSchedulerLocalization({
  dialog: itITDialog,
  calendar: itITCalendar,
  timeline: itITTimeline,
});
