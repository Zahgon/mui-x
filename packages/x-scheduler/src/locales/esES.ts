import type {
  EventDialogLocaleText,
  EventCalendarLocaleText,
  EventTimelineLocaleText,
} from '../models/translations';
import { getSchedulerLocalization } from '../utils/getSchedulerLocalization';
import type { SchedulerLocalization } from '../utils/getSchedulerLocalization';

const esESDialog: Partial<EventDialogLocaleText> = {
  // EventDialog
  colorPickerLabel: 'Color del evento',
  dateTimeSectionLabel: 'Fecha y hora',
  resourceColorSectionLabel: 'Recurso y color',
  allDayLabel: 'Todo el día',
  closeButtonAriaLabel: 'Cerrar',
  closeButtonLabel: 'Cerrar',
  deleteEvent: 'Eliminar evento',
  descriptionLabel: 'Descripción',
  endDateLabel: 'Fecha de fin',
  endTimeLabel: 'Hora de fin',
  eventTitleAriaLabel: 'Título del evento',
  generalTabLabel: 'General',
  labelNoResource: 'Sin recurso',
  labelInvalidResource: 'Recurso no válido',
  recurrenceLabel: 'Recurrencia',
  recurrenceNoRepeat: 'No repetir',
  recurrenceCustomRepeat: 'Recurrencia personalizada',
  recurrenceDailyPresetLabel: 'Se repite diariamente',
  recurrenceDailyFrequencyLabel: 'días',
  recurrenceEndsLabel: 'Finaliza',
  recurrenceEndsAfterLabel: 'Después de',
  recurrenceEndsNeverLabel: 'Nunca',
  recurrenceEndsUntilLabel: 'Hasta',
  recurrenceEndsTimesLabel: 'veces',
  recurrenceEveryLabel: 'Cada',
  recurrenceRepeatLabel: 'Repetir',
  recurrenceTabLabel: 'Recurrencia',
  recurrenceMainSelectCustomLabel: 'Recurrencia',
  recurrenceWeeklyFrequencyLabel: 'semanas',
  recurrenceWeeklyPresetLabel: ({ weekdayName }) => { throw new Error("STUB"); },
  recurrenceMonthlyFrequencyLabel: 'meses',
  recurrenceMonthlyDayOfMonthLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekAriaLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyPresetLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberAriaLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceWeeklyMonthlySpecificInputsLabel: 'El',
  recurrenceYearlyFrequencyLabel: 'años',
  recurrenceYearlyPresetLabel: (date) => { throw new Error("STUB"); },
  noResourceAriaLabel: 'Sin recurso',
  // selectColorAriaLabel: color => `Select ${color} as event color`,
  resourceLabel: 'Recurso',
  requiredResourceError: 'Debes seleccionar un recurso.',
  saveChanges: 'Guardar',
  startDateAfterEndDateError: 'La fecha/hora de inicio debe ser anterior a la fecha/hora de fin.',
  startDateLabel: 'Fecha de inicio',
  startTimeLabel: 'Hora de inicio',

  // RecurringScopeDialog
  all: 'Todos los eventos',
  cancel: 'Cancelar',
  confirm: 'Confirmar',
  onlyThis: 'Solo este evento',
  radioGroupAriaLabel: 'Alcance de edición de eventos recurrentes',
  thisAndFollowing: 'Este y los eventos siguientes',
  title: 'Aplicar este cambio a:',
};

const esESCalendar: Partial<Omit<EventCalendarLocaleText, keyof EventDialogLocaleText>> = {
  // ResourcesTree
  resourcesLabel: 'Recursos',

  // ViewSwitcher
  agenda: 'Agenda',
  day: 'Día',
  month: 'Mes',
  other: 'Otro',
  today: 'Hoy',
  week: 'Semana',
  time: 'Hora',
  days: 'Días',
  months: 'Meses',
  weeks: 'Semanas',
  years: 'Años',

  // DateNavigator
  closeSidePanel: 'Cerrar panel lateral',
  openSidePanel: 'Abrir panel lateral',

  // SidePanelDrawer (small screens)
  // openMenu: 'Open menu',

  // Preferences menu
  amPm12h: '12 horas (1:00PM)',
  hour24h: '24 horas (13:00)',
  preferencesMenu: 'Configuración',
  showWeekends: 'Mostrar fines de semana',
  showEmptyDaysInAgenda: 'Mostrar días vacíos',
  showWeekNumber: 'Mostrar número de semana',
  timeFormat: 'Formato de hora',
  viewSpecificOptions: (view) => { throw new Error("STUB"); },
  // startWeekOn: 'Start week on',
  // weekdaySunday: 'Sunday',
  // weekdayMonday: 'Monday',
  // weekdaySaturday: 'Saturday',

  // WeekView
  allDay: 'Todo el día',
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
  miniCalendarGoToPreviousMonth: 'Mostrar el mes anterior en el calendario',
  miniCalendarGoToNextMonth: 'Mostrar el mes siguiente en el calendario',

  // Main calendar region
  // calendarContentAriaLabel: 'Calendar content',

  // Timeline title sub grid
  timelineResourceTitleHeader: 'Nombre del recurso',
};

const esESTimeline: Partial<Omit<EventTimelineLocaleText, keyof EventDialogLocaleText>> = {
  // Timeline title sub grid
  timelineResourceTitleHeader: 'Nombre del recurso',
};

export const esES: SchedulerLocalization = getSchedulerLocalization({
  dialog: esESDialog,
  calendar: esESCalendar,
  timeline: esESTimeline,
});
