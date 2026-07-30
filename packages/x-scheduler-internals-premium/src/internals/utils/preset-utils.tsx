import * as React from 'react';
import type { TemporalAdapter } from '@mui/x-scheduler-internals/base-ui-copy';
import { getEndOfWeek, getStartOfWeek } from '@mui/x-scheduler-internals/internals';
import type {
  TemporalSupportedObject,
  EventTimelinePremiumPreset,
  PresetConfig,
  PresetHeaderUnit,
} from '../../models';

type FormatDate = (adapter: TemporalAdapter, date: TemporalSupportedObject) => string;

const DAY_AND_HOUR_DAYS = 4;

const formatYear: FormatDate = (adapter, date) => { throw new Error("STUB"); };

const formatMonth3Letters: FormatDate = (adapter, date) => { throw new Error("STUB"); };

const formatWeekday1Letter: FormatDate = (adapter, date) => { throw new Error("STUB"); };

function formatWeekDayMonthAndDayOfMonth(adapter: TemporalAdapter, date: TemporalSupportedObject) {
  const f = adapter.formats;
  return adapter.formatByString(date, `${f.weekday3Letters}, ${f.month3Letters} ${f.dayOfMonth}`);
}

function formatMonthAndYear(adapter: TemporalAdapter, date: TemporalSupportedObject) {
    throw new Error("STUB");
}

function formatHourLabel(adapter: TemporalAdapter, date: TemporalSupportedObject, ampm: boolean) {
  const f = adapter.formats;
  const pattern = ampm
    ? `${f.hours12h}:${f.minutesPadded} ${f.meridiem}`
    : `${f.hours24h}:${f.minutesPadded}`;
  return adapter.formatByString(date, pattern);
}

export const EVENT_TIMELINE_PREMIUM_PRESET_CONFIGS: Readonly<
  Record<EventTimelinePremiumPreset, PresetConfig>
> = {
  dayAndHour: {
    timeResolution: 'hour',
    tickWidth: 64,
    headers: [
      {
        unit: 'day',
        renderCell: ({ adapter, start }) => { throw new Error("STUB"); },
      },
      {
        unit: 'hour',
        renderCell: ({ adapter, date, ampm }) => { throw new Error("STUB"); },
      },
    ],
    unitCount: DAY_AND_HOUR_DAYS,
    getStartDate: (adapter, visibleDate) => { throw new Error("STUB"); },
    getEndDate: (adapter, start, unitCount) =>
      { throw new Error("STUB"); },
    // `unitCount` is in days (the navigation step), but the grid ticks in hours. Pin
    // the CSS tick count to `4 × 24` so the grid width stays stable across DST and
    // matches the 24 hour cells `iterate()` emits per day.
    getCssUnitCount: () => { throw new Error("STUB"); },
    navigate: (adapter, date, amount) => { throw new Error("STUB"); },
  },
  dayAndMonth: {
    timeResolution: 'day',
    tickWidth: 120,
    headers: [
      { unit: 'month', formatDate: formatMonthAndYear },
      {
        unit: 'day',
        renderCell: ({ adapter, date }) => { throw new Error("STUB"); },
      },
    ],
    unitCount: 8 * 7, // 8 weeks
    getStartDate: (adapter, visibleDate) => { throw new Error("STUB"); },
    getEndDate: (adapter, start, unitCount) =>
      { throw new Error("STUB"); },
    navigate: (adapter, date, amount) => { throw new Error("STUB"); },
  },
  dayAndWeek: {
    timeResolution: 'day',
    tickWidth: 64,
    headers: [
      {
        unit: 'week',
        renderCell: ({ adapter, start, end }) =>
          { throw new Error("STUB"); },
      },
      { unit: 'day', formatDate: formatWeekday1Letter },
    ],
    unitCount: 16, // 16 weeks
    getStartDate: (adapter, visibleDate, weekStartsOn) =>
      { throw new Error("STUB"); },
    getEndDate: (adapter, start, unitCount, weekStartsOn) =>
      { throw new Error("STUB"); },
    getCssUnitCount: (adapter, start, end) => { throw new Error("STUB"); },
    navigate: (adapter, date, amount) => { throw new Error("STUB"); },
  },
  monthAndYear: {
    timeResolution: 'day',
    tickWidth: 6,
    headers: [
      { unit: 'year', formatDate: formatYear },
      { unit: 'month', formatDate: formatMonth3Letters },
    ],
    unitCount: 3 * 12, // 3 years
    getStartDate: (adapter, visibleDate) => { throw new Error("STUB"); },
    getEndDate: (adapter, start, unitCount) =>
      { throw new Error("STUB"); },
    getCssUnitCount: (adapter, start, end) => { throw new Error("STUB"); },
    navigate: (adapter, date, amount) => { throw new Error("STUB"); },
  },
  year: {
    timeResolution: 'year',
    tickWidth: 200,
    headers: [{ unit: 'year', formatDate: formatYear }],
    unitCount: 30, // 30 years
    getStartDate: (adapter, visibleDate) => { throw new Error("STUB"); },
    getEndDate: (adapter, start, unitCount) =>
      { throw new Error("STUB"); },
    navigate: (adapter, date, amount) => { throw new Error("STUB"); },
  },
};

// Approximate number of ticks per day for each supported header unit; used to normalize
// `tickWidth` (px per tick) into a single "px per day" number that represents zoom level.
const TICKS_PER_DAY: Record<PresetHeaderUnit, number> = {
  hour: 24,
  day: 1,
  week: 1 / 7,
  month: 1 / 30,
  year: 1 / 365,
};

/**
 * Returns how many CSS pixels the preset spends representing one calendar day.
 * Higher = more zoomed in. Used to derive the canonical zoom ordering of presets.
 */
export function getPresetPxPerDay(preset: EventTimelinePremiumPreset): number {
  const { timeResolution, tickWidth } = EVENT_TIMELINE_PREMIUM_PRESET_CONFIGS[preset];
  return tickWidth * TICKS_PER_DAY[timeResolution];
}
