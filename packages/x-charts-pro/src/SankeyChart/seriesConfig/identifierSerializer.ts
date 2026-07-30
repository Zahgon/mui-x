import { typeSerializer } from '@mui/x-charts/internals';
import type { IdentifierSerializer } from '@mui/x-charts/internals';

const identifierSerializer: IdentifierSerializer<'sankey'> = (identifier) => {
    throw new Error("STUB");
};

export default identifierSerializer;
