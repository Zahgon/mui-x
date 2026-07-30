import type { EventCalendarState } from '@mui/x-scheduler-internals/use-event-calendar';
import { SchedulerLazyLoadingPlugin } from '../../internals/plugins/SchedulerLazyLoadingPlugin';
import type {
  EventCalendarPremiumState,
  EventCalendarPremiumParameters,
} from '../EventCalendarPremiumStore.types';
import type { EventCalendarPremiumStore } from '../EventCalendarPremiumStore';

export class EventCalendarPremiumLazyLoadingPlugin<
  TEvent extends object,
> extends SchedulerLazyLoadingPlugin<
  TEvent,
  EventCalendarPremiumState,
  EventCalendarPremiumParameters<TEvent, any>
> {
  constructor(store: EventCalendarPremiumStore<TEvent, any>) {
      throw new Error("STUB");
  }
}
