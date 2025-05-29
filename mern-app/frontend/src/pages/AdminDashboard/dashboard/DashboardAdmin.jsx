import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import { useState } from 'react';
// importing pages
import AdminHome from './Pages/AdminHome';
import AdminAllowance from './Pages/AdminAllowance';
import AdminEquipment from './Pages/AdminEquipment';
import AdminLeave from './Pages/AdminLeave';
// end of importing pages
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from './theme/customizations';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

const pageComponents = {
  'Home': <AdminHome />,
  'Approve Leave': <AdminLeave />,
  'Approve Equipment': <AdminEquipment />,
  'Approve Allowance': <AdminAllowance />,
};

export default function DashboardAdmin(props) {
  const [selectedPage, setSelectedPage] = useState('Home');

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <AppNavbar />

        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            {pageComponents[selectedPage]}
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
