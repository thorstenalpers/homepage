import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import SurfingIcon from '@mui/icons-material/Surfing';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const metadata = {
  title: 'Thorsten Alpers',
  description: 'Homepage of Thorsten Alpers',
};

const DRAWER_WIDTH = 180;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper' }}>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Typography color="text.primary" fontWeight="bold" fontSize="21px" >
                  Thorsten Alpers
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                top: ['48px', '56px', '64px'],
                height: 'auto',
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Divider />
            <List>
              <ListItem key='/' disablePadding>
                <ListItemButton component={Link} href='/'>
                  <ListItemIcon>
                    <HomeOutlinedIcon fontSize='large' sx={{ color: '#000' }} />
                  </ListItemIcon>
                  <ListItemText primary='Home' />
                </ListItemButton>
              </ListItem>
              <ListItem key='/cv' disablePadding>
                <ListItemButton component={Link} href='/cv'>
                  <ListItemIcon>
                    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
                      <linearGradient id="gradientCv" gradientTransform="rotate(90)">
                        <stop offset="0" stopColor="#000" />
                        <stop offset="1" stopColor="#28170b" />
                      </linearGradient>
                      <WorkIcon sx={{ fill: 'url(#gradientCv)' }} />
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary='CV' />
                </ListItemButton>
              </ListItem>
              <ListItem key='/skills' disablePadding>
                <ListItemButton component={Link} href='/skills'>
                  <ListItemIcon>
                    <svg viewBox="0 0 32 32" width="32" height="32" fill="none">
                      <linearGradient id="gradientSkills" gradientTransform="rotate(90)">
                        <stop offset="0.05" stopColor="#c68642" />
                        <stop offset="0.4" stopColor="#000" />
                        <stop offset="1" stopColor="#0080fe" />
                      </linearGradient>
                      <SurfingIcon sx={{ fill: 'url(#gradientSkills)' }} />
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary='Skills' />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>
              <ListItem key='https://de.linkedin.com/in/thorsten-alpers-6952a0126' disablePadding>
                <ListItemButton component={Link} href='https://de.linkedin.com/in/thorsten-alpers-6952a0126' target="_blank">
                  <ListItemIcon>
                    <LinkedInIcon style={{ color: '#0072b1' }} />
                  </ListItemIcon>
                  <ListItemText primary='LinkedIn' />
                </ListItemButton>
              </ListItem>
              <ListItem key='https://github.com/thorstenalpers' disablePadding>
                <ListItemButton component={Link} href='https://github.com/thorstenalpers' target="_blank">
                  <ListItemIcon>
                    <GitHubIcon style={{ color: '#000' }} />
                  </ListItemIcon>
                  <ListItemText primary='GitHub' />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: `${DRAWER_WIDTH}px`,
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
