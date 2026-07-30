import type { TickFrequency, TickFrequencyDefinition } from '../models/timeTicks';

function yearNumber(from: Date, to: Date) {
    throw new Error("STUB");
}
function monthNumber(from: Date, to: Date) {
  return Math.abs(
    to.getFullYear() * 12 + to.getMonth() - 12 * from.getFullYear() - from.getMonth(),
  );
}
function dayNumber(from: Date, to: Date) {
  return Math.abs(to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24);
}
function hourNumber(from: Date, to: Date) {
    throw new Error("STUB");
}

export const tickFrequencies: Record<TickFrequency, TickFrequencyDefinition> = {
  years: {
    getTickNumber: yearNumber,
    isTick: (prev: Date, value: Date) => { throw new Error("STUB"); },
    format: (d: Date) => { throw new Error("STUB"); },
  },
  quarterly: {
    getTickNumber: (from: Date, to: Date) => { throw new Error("STUB"); },
    isTick: (prev: Date, value: Date) =>
      { throw new Error("STUB"); },
    format: new Intl.DateTimeFormat('default', { month: 'short' }).format,
  },
  months: {
    getTickNumber: monthNumber,
    isTick: (prev: Date, value: Date) => { throw new Error("STUB"); },
    format: new Intl.DateTimeFormat('default', { month: 'short' }).format,
  },
  biweekly: {
    getTickNumber: (from: Date, to: Date) => { throw new Error("STUB"); },
    isTick: (prev: Date, value: Date) =>
      { throw new Error("STUB"); },
    format: new Intl.DateTimeFormat('default', { day: 'numeric' }).format,
  },
  weeks: {
    getTickNumber: (from: Date, to: Date) => { throw new Error("STUB"); },
    isTick: (prev: Date, value: Date) =>
      { throw new Error("STUB"); },
    format: new Intl.DateTimeFormat('default', { day: 'numeric' }).format,
  },
  days: {
    getTickNumber: dayNumber,
    isTick: (prev: Date, value: Date) => { throw new Error("STUB"); },
    format: new Intl.DateTimeFormat('default', { day: 'numeric' }).format,
  },
  hours: {
    getTickNumber: hourNumber,
    isTick: (prev: Date, value: Date) => { throw new Error("STUB"); },
    format: new Intl.DateTimeFormat('default', { hour: '2-digit', minute: '2-digit' }).format,
  },
};
