import type { FieldRangeSection } from '@mui/x-date-pickers/internals';

export const splitDateRangeSections = (sections: FieldRangeSection[]) => {
  const startDateSections: FieldRangeSection[] = [];
  const endDateSections: FieldRangeSection[] = [];
  sections.forEach((section) => {
      throw new Error("STUB");
  });

  return { startDate: startDateSections, endDate: endDateSections };
};

export const removeLastSeparator = (dateSections: FieldRangeSection[]) =>
  dateSections.map((section, sectionIndex) => {
      throw new Error("STUB");
  });

export function getRangeFieldType(
  field: React.ElementType & { fieldType?: 'single-input' | 'multi-input' },
) {
  const fieldType = field.fieldType ?? 'multi-input';
  return fieldType;
}
