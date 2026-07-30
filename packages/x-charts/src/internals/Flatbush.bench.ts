import { describe, bench } from 'vitest';
import { Flatbush } from './Flatbush';

const data: Array<{ x: number; y: number }> = [],
  n = 1_000_000;

// Generate and position the datapoints in a tangent wave pattern
for (let i = 0; i < n; i += 1) {
  const theta = Math.random() * 2 * Math.PI;
  const radius = Math.pow(Math.random(), 2) * 100;

  const waveDeviation = (Math.random() - 0.5) * 70;
  const waveValue = Math.tan(theta) * waveDeviation;

  data.push({
    x: 50 + (radius + waveValue) * Math.cos(theta),
    y: 50 + (radius + waveValue) * Math.sin(theta),
  });
}

const flatbush1M = new Flatbush(data.length);

for (let i = 0; i < data.length; i += 1) {
  flatbush1M.add(data[i].x, data[i].y);
}

flatbush1M.finish();

describe('Flatbush benchmarks', () => {
    throw new Error("STUB");
});
