import type {
  EventDialogLocaleText,
  EventCalendarLocaleText,
  EventTimelineLocaleText,
} from '../models/translations';
import { getSchedulerLocalization } from '../utils/getSchedulerLocalization';
import type { SchedulerLocalization } from '../utils/getSchedulerLocalization';

const ptBRDialog: Partial<EventDialogLocaleText> = {
  // EventDialog
  colorPickerLabel: 'Cor do evento',
  dateTimeSectionLabel: 'Data e hora',
  resourceColorSectionLabel: 'Recurso e cor',
  allDayLabel: 'O dia todo',
  closeButtonAriaLabel: 'Fechar',
  closeButtonLabel: 'Fechar',
  deleteEvent: 'Excluir evento',
  descriptionLabel: 'Descrição',
  endDateLabel: 'Data de término',
  endTimeLabel: 'Hora de término',
  eventTitleAriaLabel: 'Título do evento',
  generalTabLabel: 'Geral',
  labelNoResource: 'Sem recurso',
  labelInvalidResource: 'Recurso inválido',
  recurrenceLabel: 'Recorrência',
  recurrenceNoRepeat: 'Não repetir',
  recurrenceCustomRepeat: 'Regra de repetição personalizada',
  recurrenceDailyPresetLabel: 'Repete diariamente',
  recurrenceDailyFrequencyLabel: 'dias',
  recurrenceEndsLabel: 'Termina',
  recurrenceEndsAfterLabel: 'Após',
  recurrenceEndsNeverLabel: 'Nunca',
  recurrenceEndsUntilLabel: 'Até',
  recurrenceEndsTimesLabel: 'vezes',
  recurrenceEveryLabel: 'A cada',
  recurrenceRepeatLabel: 'Repetir',
  recurrenceTabLabel: 'Recorrência',
  recurrenceMainSelectCustomLabel: 'Recorrência',
  recurrenceWeeklyFrequencyLabel: 'semanas',
  recurrenceWeeklyPresetLabel: ({ weekdayName }) => { throw new Error("STUB"); },
  recurrenceMonthlyFrequencyLabel: 'meses',
  recurrenceMonthlyDayOfMonthLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekAriaLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyLastWeekLabel: (weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyPresetLabel: (dayNumber) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberAriaLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceMonthlyWeekNumberLabel: (ord, weekDay) => { throw new Error("STUB"); },
  recurrenceWeeklyMonthlySpecificInputsLabel: 'Em',
  recurrenceYearlyFrequencyLabel: 'anos',
  recurrenceYearlyPresetLabel: (date) => { throw new Error("STUB"); },
  noResourceAriaLabel: 'Sem recurso',
  // selectColorAriaLabel: color => `Select ${color} as event color`,
  resourceLabel: 'Recurso',
  // requiredResourceError: 'A resource is required.',
  saveChanges: 'Salvar',
  startDateAfterEndDateError: 'A data/hora de início deve ser anterior à data/hora de término.',
  startDateLabel: 'Data de início',
  startTimeLabel: 'Hora de início',

  // RecurringScopeDialog
  all: 'Todos os eventos',
  cancel: 'Cancelar',
  confirm: 'Confirmar',
  onlyThis: 'Apenas este evento',
  radioGroupAriaLabel: 'Escopo de edição de eventos recorrentes',
  thisAndFollowing: 'Este evento e seguintes',
  title: 'Aplicar esta alteração a:',
};

const ptBRCalendar: Partial<Omit<EventCalendarLocaleText, keyof EventDialogLocaleText>> = {
  // ResourcesTree
  resourcesLabel: 'Recursos',

  // ViewSwitcher
  agenda: 'Agenda',
  day: 'Dia',
  month: 'Mês',
  other: 'Outro',
  today: 'Hoje',
  week: 'Semana',
  time: 'Hora',
  days: 'Dias',
  months: 'Meses',
  weeks: 'Semanas',
  years: 'Anos',

  // DateNavigator
  closeSidePanel: 'Fechar painel lateral',
  openSidePanel: 'Abrir painel lateral',

  // SidePanelDrawer (small screens)
  // openMenu: 'Open menu',

  // Preferences menu
  amPm12h: '12 horas (1:00PM)',
  hour24h: '24 horas (13:00)',
  preferencesMenu: 'Configurações',
  showWeekends: 'Mostrar fins de semana',
  showEmptyDaysInAgenda: 'Mostrar dias vazios',
  showWeekNumber: 'Mostrar número da semana',
  timeFormat: 'Formato da hora',
  viewSpecificOptions: (view) => { throw new Error("STUB"); },
  // startWeekOn: 'Start week on',
  // weekdaySunday: 'Sunday',
  // weekdayMonday: 'Monday',
  // weekdaySaturday: 'Saturday',

  // WeekView
  allDay: 'O dia todo',
  hiddenEvents: (hiddenEventsCount) => { throw new Error("STUB"); },
  nextTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  previousTimeSpan: (timeSpan) => { throw new Error("STUB"); },
  resourceAriaLabel: (resourceName) => { throw new Error("STUB"); },
  weekAbbreviation: 'S',
  weekNumberAriaLabel: (weekNumber) => { throw new Error("STUB"); },

  // EventItem
  eventItemMultiDayLabel: (endDate) => { throw new Error("STUB"); },

  // MiniCalendar
  miniCalendarLabel: 'Calendário',
  miniCalendarGoToPreviousMonth: 'Mostrar mês anterior no calendário',
  miniCalendarGoToNextMonth: 'Mostrar próximo mês no calendário',

  // Main calendar region
  // calendarContentAriaLabel: 'Calendar content',

  // Timeline title sub grid
  timelineResourceTitleHeader: 'Título do recurso',
};

const ptBRTimeline: Partial<Omit<EventTimelineLocaleText, keyof EventDialogLocaleText>> = {
  // Timeline title sub grid
  timelineResourceTitleHeader: 'Título do recurso',
};

export const ptBR: SchedulerLocalization = getSchedulerLocalization({
  dialog: ptBRDialog,
  calendar: ptBRCalendar,
  timeline: ptBRTimeline,
});
