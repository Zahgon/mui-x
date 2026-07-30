import { Chance } from 'chance';
import {
  CERTIFICATION_OPTIONS,
  COLORS,
  COMMODITY_OPTIONS,
  CONTRACT_TYPE_OPTIONS,
  COUNTRY_ISO_OPTIONS,
  CURRENCY_OPTIONS,
  INCOTERM_OPTIONS,
  RATE_TYPE_OPTIONS,
  STATUS_OPTIONS,
  TAXCODE_OPTIONS,
  TRADE_TAG_OPTIONS,
} from './static-data';
import type { GridDataGeneratorContext } from './gridColDefGenerator';

let chance: Chance.Chance;
let chanceGuid: Chance.Chance;

// eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
declare const __DISABLE_CHANCE_RANDOM__: any;

export function resetRandomGenerators() {
  if (typeof __DISABLE_CHANCE_RANDOM__ !== 'undefined' && __DISABLE_CHANCE_RANDOM__) {
    chance = new Chance(() => { throw new Error("STUB"); });
    chanceGuid = new Chance(42);
  } else {
    chance = new Chance();
    chanceGuid = chance;
  }
}

resetRandomGenerators();

type ColumnDataGenerator<Value> = (data: any, context: GridDataGeneratorContext) => Value;

/**
 * Wrap a data generator that returns a string and add a prefix if the value generated has already been given
 */
const uniquenessHandler =
  (generator: ColumnDataGenerator<string>): ColumnDataGenerator<string> =>
  (data, context) => {
      throw new Error("STUB");
  };

function dateFuture(years?: number, refDate?: string) {
  let date = new Date();
  if (typeof refDate !== 'undefined') {
    date = new Date(Date.parse(refDate));
  }

  const range = {
    min: 1000,
    max: (years || 1) * 365 * 24 * 3600 * 1000,
  };

  // some time from now to N years later, in milliseconds
  const past = date.getTime() + chance.integer(range);
  date.setTime(past);

  return date;
}

function dateRecent(days?: number, refDate?: string) {
  let date = new Date();
  if (typeof refDate !== 'undefined') {
    date = new Date(Date.parse(refDate));
  }

  const range = {
    min: 1000,
    max: (days || 1) * 24 * 3600 * 1000,
  };

  // some time from now to N days ago, in milliseconds
  const past = date.getTime() - chance.integer(range);
  date.setTime(past);

  return date;
}

function datePast(years?: number, refDate?: string) {
  let date = new Date();
  if (typeof refDate !== 'undefined') {
    date = new Date(Date.parse(refDate));
  }

  const range = {
    min: 1000,
    max: (years || 1) * 365 * 24 * 3600 * 1000,
  };

  // some time from now to N years ago, in milliseconds
  const past = date.getTime() - chance.integer(range);
  date.setTime(past);

  return date;
}

export const random = (min: number, max: number): number => chance.floating({ min, max });
export const randomInt = (min: number, max: number): number => chance.integer({ min, max });
export const randomPrice = (min = 0, max = 100000): number => Number(random(min, max).toFixed(2));
export const randomRate = (): number => random(0, 1);
export const randomDate = (start: Date, end: Date) =>
  { throw new Error("STUB"); };
export const randomArrayItem = <T>(arr: T[]) => arr[randomInt(0, arr.length - 1)];
export const randomBoolean = (): boolean => randomArrayItem([true, false]);
export const randomSubarray = <T>(arr: T[], min = 0, max?: number): T[] => {
  const count = randomInt(min, max ?? arr.length);
  const shuffled = [...arr].sort(() => { throw new Error("STUB"); });
  return shuffled.slice(0, count);
};

export const randomColor = () => randomArrayItem(COLORS);
export const randomId = () => chanceGuid.guid();
export const randomDesk = () => { throw new Error("STUB"); };
export const randomCommodity = () => randomArrayItem(COMMODITY_OPTIONS);
export const randomTraderName = () => chance.name();
export const randomUserName = () => chance.twitter();
export const randomEmail = () => chance.email();
export const randomUrl = () => { throw new Error("STUB"); };
export const randomPhoneNumber = () => { throw new Error("STUB"); };
export const randomUnitPrice = () => { throw new Error("STUB"); };
export const randomUnitPriceCurrency = () => { throw new Error("STUB"); };
export const randomQuantity = () => randomInt(1000, 100000);
export const randomFeeRate = () => { throw new Error("STUB"); };
export const randomIncoterm = () => { throw new Error("STUB"); };
export const randomStatusOptions = () => randomArrayItem(STATUS_OPTIONS);
export const randomPnL = () => { throw new Error("STUB"); };
export const randomMaturityDate = () => { throw new Error("STUB"); };
export const randomTradeDate = () => { throw new Error("STUB"); };
export const randomBrokerId = () => { throw new Error("STUB"); };
export const randomCompanyName = () => { throw new Error("STUB"); };
export const randomCountry = () => randomArrayItem(COUNTRY_ISO_OPTIONS);
export const randomCurrency = () => randomArrayItem(CURRENCY_OPTIONS);
export const randomAddress = () => chance.address();
export const randomCity = () => chance.city();
export const randomTaxCode = () => { throw new Error("STUB"); };
export const randomContractType = () => { throw new Error("STUB"); };
export const randomRateType = () => { throw new Error("STUB"); };
export const randomCreatedDate = () => datePast();
export const randomUpdatedDate = () => dateRecent();
export const randomJobTitle = () => { throw new Error("STUB"); };
export const randomRating = () => { throw new Error("STUB"); };
export const randomName = uniquenessHandler(() => { throw new Error("STUB"); });

export const randomTradeTags = () => { throw new Error("STUB"); };
export const randomCertifications = () => { throw new Error("STUB"); };

export const generateFilledQuantity = (data: { quantity: number }) =>
  { throw new Error("STUB"); };
export const generateIsFilled = (data: { quantity: number; filledQuantity: number }) =>
  { throw new Error("STUB"); };
