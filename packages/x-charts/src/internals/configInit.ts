import type { CartesianChartSeriesType, PolarChartSeriesType } from '../models/seriesType/config';

let cartesianInstance: undefined | Set<CartesianChartSeriesType>;
let polarInstance: undefined | Set<PolarChartSeriesType>;

class CartesianSeriesTypes {
  types: Set<CartesianChartSeriesType> = new Set();

  constructor() {
      throw new Error("STUB");
  }

  addType(value: CartesianChartSeriesType) {
    this.types.add(value);
  }

  getTypes() {
    return this.types;
  }
}

class PolarSeriesTypes {
  types: Set<PolarChartSeriesType> = new Set();

  constructor() {
      throw new Error("STUB");
  }

  addType(value: PolarChartSeriesType) {
    this.types.add(value);
  }

  getTypes() {
    return this.types;
  }
}

export const cartesianSeriesTypes = new CartesianSeriesTypes();

cartesianSeriesTypes.addType('bar');
cartesianSeriesTypes.addType('line');
cartesianSeriesTypes.addType('scatter');

export const polarSeriesTypes = new PolarSeriesTypes();

polarSeriesTypes.addType('radar');
