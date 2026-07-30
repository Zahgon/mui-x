import { getLabel } from '@mui/x-charts/internals';
import type { DescriptionGetter } from '@mui/x-charts/internals';

const descriptionGetter: DescriptionGetter<'mapShape'> = ({ identifier, series }) => {
    throw new Error("STUB");
};

export default descriptionGetter;
