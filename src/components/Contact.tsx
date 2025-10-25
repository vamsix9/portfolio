import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { Email, Phone, LocationOn, GitHub, LinkedIn, Send } from '@mui/icons-material';

const contactMethods = [
  {
    icon: <Email />,
    title: "Email",
    value: "bramhanapalli.vamsi@gmail.com",
    href: "mailto:bramhanapalli.vamsi@gmail.com",
    color: "#dc2626"
  },
  {
    icon: <Phone />,
    title: "Phone",
    value: "+91 91107 46866",
    href: "tel:+919110746866",
    color: "#059669"
  },
  {
    icon: <LocationOn />,
    title: "Location",
    value: "Bengaluru, Karnataka",
    href: "#",
    color: "#2563eb"
  }
];

const socialLinks = [
  {
    icon: <GitHub />,
    title: "GitHub",
    href: "https://github.com/vamsix9",
    color: "#1f2937"
  },
  {
    icon: <LinkedIn />,
    title: "LinkedIn",
    href: "https://linkedin.com/in/vamsi",
    color: "#0077b5"
  }
];

export default function Contact() {
  return (
    <Box component="section" id="contact" sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" sx={{ 
            fontSize: { xs: '2.5rem', sm: '3rem' }, 
            fontWeight: 700, 
            mb: 2,
            background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Let's Connect
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            Ready to work together? Let's discuss your next project
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Methods */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: 'text.primary' }}>
              Get In Touch
            </Typography>
            <Grid container spacing={3}>
              {contactMethods.map((method) => (
                <Grid item xs={12} sm={6} key={method.title}>
                  <Card sx={{ 
                    borderRadius: 3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    }
                  }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          backgroundColor: method.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}>
                          <Box sx={{ color: 'white' }}>
                            {method.icon}
                          </Box>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                          {method.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" color="text.secondary">
                        {method.value}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                href="mailto:bramhanapalli.vamsi@gmail.com"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 3,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1d4ed8, #6d28d9)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Send sx={{ mr: 1 }} />
                Send Email
              </Button>
            </Box>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%',
              borderRadius: 3,
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
            }}>
              <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, textAlign: 'center' }}>
                  Follow Me
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {socialLinks.map((social) => (
                    <Button
                      key={social.title}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        borderRadius: 2,
                        py: 1.5,
                        textTransform: 'none',
                        justifyContent: 'flex-start',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          transform: 'translateX(4px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <Box sx={{ mr: 2, color: social.color }}>
                        {social.icon}
                      </Box>
                      {social.title}
                    </Button>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}