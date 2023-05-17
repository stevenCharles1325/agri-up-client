import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import PieChartIcon from '@mui/icons-material/PieChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function BottomAppBar() {
  const pathname = usePathname()
  const router = useRouter();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <Grid container display="flex" justifyContent="space-around">
            <Grid item>
              <IconButton 
                disabled={pathname === '/dashboard'} 
                color="inherit"
                onClick={() => router.push('/dashboard')}
              >
                <HomeIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton 
                disabled={pathname === '/library'} 
                color="inherit"
                onClick={() => router.push('/library')}
              >
                <MenuBookIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton 
                disabled={pathname === '/community'} 
                color="inherit"
                onClick={() => router.push('/community')}
              >
                <GroupsIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton 
                disabled={pathname === '/reports'} 
                color="inherit"
                onClick={() => router.push('/reports')}
              >
                <PieChartIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton 
                disabled={pathname === '/profile'} 
                color="inherit"
                onClick={() => router.push('/profile')}
              >
                <AccountCircleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}