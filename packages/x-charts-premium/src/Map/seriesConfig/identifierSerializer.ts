import { typeSerializer, seriesIdSerializer } from '@mui/x-charts/internals';
import type { IdentifierSerializer } from '@mui/x-charts/internals';

const identifierSerializer: IdentifierSerializer<'mapShape'> = (identifier) => {
    throw new Error("STUB");
};

export default identifierSerializer;
