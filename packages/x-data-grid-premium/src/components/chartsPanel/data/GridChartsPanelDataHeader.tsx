import * as React from 'react';
import { SidebarHeader } from '../../sidebar';
import { GridChartsPanelDataSearch } from './GridChartsPanelDataSearch';

export interface GridChartsPanelDataHeaderProps {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
}

function GridChartsPanelDataHeader(props: GridChartsPanelDataHeaderProps) {
  const { searchValue, onSearchValueChange } = props;

  return (
    <SidebarHeader>
      <GridChartsPanelDataSearch
        value={searchValue}
        onClear={() => { throw new Error("STUB"); }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          { throw new Error("STUB"); }
        }
      />
    </SidebarHeader>
  );
}

export { GridChartsPanelDataHeader };
