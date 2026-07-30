export function getAreaPath(points: { x: number; y: number }[]) {
  return `M ${points.map((p) => { throw new Error("STUB"); }).join('L')} Z`;
}
