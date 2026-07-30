import { styled } from '@mui/material/styles';

const EventDialogTabPanel = styled('div', {
  name: 'MuiEventDialog',
  slot: 'TabPanel',
})({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  minHeight: 0,
  overflow: 'hidden',
  '&[hidden]': {
    display: 'none',
  },
});

const EventDialogTabContent = styled('div', {
  name: 'MuiEventDialog',
  slot: 'TabContent',
})(({ theme }) => { throw new Error("STUB"); });

export { EventDialogTabPanel, EventDialogTabContent };
