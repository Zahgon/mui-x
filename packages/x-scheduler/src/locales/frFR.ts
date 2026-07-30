import type {
  EventDialogLocaleText,
  EventCalendarLocaleText,
  EventTimelineLocaleText,
} from '../models/translations';
import { getSchedulerLocalization } from '../utils/getSchedulerLocalization';
import type { SchedulerLocalization } from '../utils/getSchedulerLocalization';

const frFRDialog: Partial<EventDialogLocaleText> = {
  // EventDialog
  colorPickerLabel: "Couleur de l'événement",
  dateTimeSectionLabel: 'Date et heure',
  resourceColorSectionLabel: 'Ressource et couleur',
  allDayLabel: 'Toute la journée',
  closeButtonAriaLabel: 'Fermer',
  closeButtonLabel: 'Fermer',
  deleteEvent: "Supprimer l'événement",
  descriptionLabel: 'Description',
  endDateLabel: 'Date de fin',
  endTimeLabel: 'Heure de fin',
  eventTitleAriaLabel: "Titre de l'événement",
  generalTabLabel: 'Général',
  labelNoResource: 'Aucune ressource',
  labelInvalidResource: 'Ressource invalide',
  recurrenceLabel: 'Récurrence',
  recurrenceNoRepeat: 'Ne pas répéter',
  recurrenceCustomRepeat: 'Récurrence personnalisée',
  recurrenceDailyPresetLabel: 'Se répète tous les jours',
  recurrenceDailyFrequencyLabel: 'jours',
  recurrenceEndsLabel: 'Se termine',
  recurrenceEndsAfterLabel: 'Après',
  recurrenceEndsNeverLabel: 'Jamais',
  recurrenceEndsUntilLabel: "Jusqu'à",
  recurrenceEndsTimesLabel: 'fois',
  recurrenceEveryLabel: 'Chaque',
  recurrenceRepeatLabel: 'Répéter',
  recurrenceTabLabel: 'Récurrence',
  recurrenceMainSelectCustomLabel: 'Récurrence',
  recurrenceWeeklyFrequencyLabel: 'semaines',
  recurrenceWeeklyPresetLabel: ({ weekdayName }) => { throw new Error("STUB"); },
  recurrenceMonthlyFrequencyLabel: 'mois',
  recurrenceMonthlyDayOfMonthLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekAriaLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyPresetLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberAriaLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceWeeklyMonthlySpecificInputsLabel: 'Le',
  recurrenceYearlyFrequencyLabel: 'années',
  recurrenceYearlyPresetLabel: (date) => { throw new Error("STUB"); },
  noResourceAriaLabel: 'Aucune ressource',
  // selectColorAriaLabel: color => `Select ${color} as event color`,
  resourceLabel: 'Ressource',
  // requiredResourceError: 'A resource is required.',
  saveChanges: 'Enregistrer',
  startDateAfterEndDateError: 'La date/heure de début doit être antérieure à la date/heure de fin.',
  startDateLabel: 'Date de début',
  startTimeLabel: 'Heure de début',

  // RecurringScopeDialog
  all: 'Tous les évènements',
  cancel: 'Annuler',
  confirm: 'Confirmer',
  onlyThis: 'Seulement cet événement',
  radioGroupAriaLabel: "Modifier l'événement récurrent",
  thisAndFollowing: 'Cet événement et les suivants',
  title: 'Appliquer ce changement à :',
};

const frFRCalendar: Partial<Omit<EventCalendarLocaleText, keyof EventDialogLocaleText>> = {
  // ResourcesTree
  resourcesLabel: 'Ressources',

  // ViewSwitcher
  agenda: 'Agenda',
  day: 'Jour',
  month: 'Mois',
  other: 'Autre',
  today: "Aujourd'hui",
  week: 'Semaine',
  time: 'Heure',
  days: 'Jours',
  months: 'Mois',
  weeks: 'Semaines',
  years: 'Années',

  // DateNavigator
  closeSidePanel: 'Fermer le panneau latéral',
  openSidePanel: 'Ouvrir le panneau latéral',

  // SidePanelDrawer (small screens)
  // openMenu: 'Open menu',

  // Preferences menu
  amPm12h: '12 heures (1:00PM)',
  hour24h: '24 heures (13:00)',
  preferencesMenu: 'Paramètres',
  showWeekends: 'Afficher les week-ends',
  showEmptyDaysInAgenda: 'Afficher les jours vides',
  showWeekNumber: 'Afficher le numéro de semaine',
  timeFormat: "Format de l'heure",
  viewSpecificOptions: (view) => { throw new Error("STUB"); },
  // startWeekOn: 'Start week on',
  // weekdaySunday: 'Sunday',
  // weekdayMonday: 'Monday',
  // weekdaySaturday: 'Saturday',

  // WeekView
  allDay: 'Toute la journée',
  hiddenEvents: (hiddenEventsCount) => { throw new Error("STUB"); },
  nextTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  previousTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  resourceAriaLabel: (resourceName) => { throw new Error("STUB"); },
  weekAbbreviation: 'S',
  weekNumberAriaLabel: (weekNumber) => { throw new Error("STUB"); },

  // EventItem
  eventItemMultiDayLabel: (endDate) => { throw new Error("STUB"); },

  // MiniCalendar
  miniCalendarLabel: 'Calendrier',
  miniCalendarGoToPreviousMonth: 'Afficher le mois précédent dans le calendrier',
  miniCalendarGoToNextMonth: 'Afficher le mois suivant dans le calendrier',

  // Main calendar region
  // calendarContentAriaLabel: 'Calendar content',

  // Timeline title sub grid
  timelineResourceTitleHeader: 'Titre de la ressource',
};

const frFRTimeline: Partial<Omit<EventTimelineLocaleText, keyof EventDialogLocaleText>> = {
  // Timeline title sub grid
  timelineResourceTitleHeader: 'Titre de la ressource',
};

export const frFR: SchedulerLocalization = getSchedulerLocalization({
  dialog: frFRDialog,
  calendar: frFRCalendar,
  timeline: frFRTimeline,
});
