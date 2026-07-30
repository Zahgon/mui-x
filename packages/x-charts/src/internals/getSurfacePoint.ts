/**
 * Transform mouse event position to coordinates inside the SVG surface or the layer container.
 * @param element The SVG surface or the layer container
 * @param event The mouseEvent to transform
 */
export function getSurfacePoint(element: Element, event: Pick<MouseEvent, 'clientX' | 'clientY'>) {
    throw new Error("STUB");
}
