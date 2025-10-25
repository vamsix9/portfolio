import { Box, Typography, Container, Avatar, IconButton, Button, Chip } from '@mui/material';
import { GitHub, LinkedIn, Email, Phone, LocationOn } from '@mui/icons-material';

export default function Hero() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6, alignItems: 'center' }}>
          {/* Left Column - Profile */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Avatar
              src="/profile.jpg"
              alt="Vamsi B"
              sx={{
                width: 200,
                height: 200,
                mb: 4,
                mx: { xs: 'auto', md: 0 },
                border: '4px solid rgba(255,255,255,0.3)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
            />
            
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Vamsi B
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem' },
                fontWeight: 300,
                mb: 3,
                opacity: 0.9,
              }}
            >
              Software Engineer
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <LocationOn sx={{ fontSize: '1.2rem' }} />
              <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                Bengaluru, Karnataka
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <IconButton
                href="https://github.com/vamsix9"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/vamsi"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href="mailto:bramhanapalli.vamsi@gmail.com"
                sx={{ 
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Email />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              href="#contact"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                px: 4,
                py: 1.5,
                borderRadius: 3,
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get In Touch
            </Button>
          </Box>

          {/* Right Column - Info Cards */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              p: 3,
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                About Me
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.6, opacity: 0.9 }}>
                Passionate Full Stack Developer with expertise in React, Node.js, and cloud technologies. 
                I build scalable applications and love solving complex problems through clean, maintainable code.
              </Typography>
            </Box>

            <Box sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              p: 3,
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Quick Stats
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="3+ Years Experience" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                <Chip label="Full Stack" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                <Chip label="AWS Certified" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
                <Chip label="Open Source" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
              </Box>
            </Box>

            <Box sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              p: 3,
              border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Contact Info
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ fontSize: '1rem' }} />
                  <Typography variant="body2">bramhanapalli.vamsi@gmail.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ fontSize: '1rem' }} />
                  <Typography variant="body2">+91 91107 46866</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}