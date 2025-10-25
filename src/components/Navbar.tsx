import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from './ThemeToggle';

const sections = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleNavClick = (href: string) => {
    setOpen(false);
    setActiveSection(href.replace('#', ''));
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'background.paper',
          color: 'text.primary',
          boxShadow: 'none',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ maxWidth: '1200px', mx: 'auto', width: '100%', px: 3 }}>
          <Typography
            variant="h6"
            component="a"
            href="#about"
            sx={{
              fontWeight: 600,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            Vamsi
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
            {sections.map((section) => (
              <Button
                key={section.href}
                href={section.href}
                onClick={() => handleNavClick(section.href)}
                sx={{
                  color: activeSection === section.href.replace('#', '') ? 'background.paper' : 'text.primary',
                  backgroundColor: activeSection === section.href.replace('#', '') ? 'text.primary' : 'transparent',
                  textTransform: 'none',
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: activeSection === section.href.replace('#', '') ? 'text.primary' : 'action.hover',
                  },
                }}
              >
                {section.label}
              </Button>
            ))}
            <ThemeToggle />
          </Box>
          
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center', gap: 1 }}>
            <ThemeToggle />
            <IconButton
              color="inherit"
              aria-label="toggle menu"
              onClick={handleDrawerToggle}
              sx={{ border: 1, borderColor: 'divider' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="top"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
            mt: 7,
          },
        }}
      >
        <List>
          {sections.map((section) => (
            <ListItem key={section.href} disablePadding>
              <ListItemButton
                href={section.href}
                onClick={() => handleNavClick(section.href)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemText primary={section.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}