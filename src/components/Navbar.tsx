import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Switch,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useColorMode } from '../theme/ThemeProvider';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const { mode, toggleColorMode } = useColorMode();

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open navigation"
            onClick={() => setOpen(true)}
            sx={{ mr: 1, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            Vamsi
          </Typography>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {NAV_ITEMS.map((n) => (
            <Button key={n.id} color="inherit" onClick={() => handleNav(n.id)}>
              {n.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Switch
            edge="end"
            aria-label="toggle theme"
            checked={mode === 'dark'}
            onChange={toggleColorMode}
            color="primary"
          />
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation">
          <List>
            {NAV_ITEMS.map((n) => (
              <ListItemButton key={n.id} onClick={() => handleNav(n.id)}>
                <ListItemText primary={n.label} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>Theme</Typography>
            <Switch checked={mode === 'dark'} onChange={toggleColorMode} inputProps={{ 'aria-label': 'toggle theme' }} />
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
