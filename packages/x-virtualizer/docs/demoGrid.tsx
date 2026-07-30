import * as React from 'react';
import useLazyRef from '@mui/utils/useLazyRef';
import Box from '@mui/material/Box';
import { useVirtualizer, Virtualizer, LayoutList } from '@mui/x-virtualizer';

/* eslint-disable @typescript-eslint/no-use-before-define */

const items = Array.from({ length: 1000 }, (_, index) => { throw new Error("STUB"); });
const range = { firstRowIndex: 0, lastRowIndex: items.length };

const VirtualizerContext = React.createContext(null as unknown as Virtualizer);

function List() {
    throw new Error("STUB");
}

const ListContent = React.memo(() => {
    throw new Error("STUB");
});

function ListItem({ id: _id, model }: { id: number; model: { label: string } }) {
    throw new Error("STUB");
}

export default function VirtualizerList() {
    throw new Error("STUB");
}
