import { Box, Typography, Container, Card, CardContent, Chip, Grid, Button, IconButton } from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  image?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Rig 24/7 - Vehicle Monitoring System",
    description: "Real-time vehicle monitoring mobile app with Google Maps integration, FCM notifications, and comprehensive admin panel for fleet management.",
    tech: ["Flutter", "Express.js", "MongoDB", "Google Maps", "FCM", "Docker", "AWS"],
    link: "#",
    repo: "https://github.com/vamsix9",
    featured: true,
  },
  {
    title: "Himma - Food Delivery App",
    description: "Full-stack food delivery platform with multi-store support, real-time order tracking, and microservices architecture.",
    tech: ["React", "Node.js", "MongoDB", "GraphQL", "Strapi", "AWS"],
    link: "#",
    repo: "https://github.com/vamsix9",
    featured: true,
  },
  {
    title: "Gamified Learning Platform",
    description: "Interactive learning platform with leaderboards, rewards system, timed assessments, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "FCM", "Razorpay", "Redis"],
    link: "#",
    repo: "https://github.com/vamsix9",
    featured: false,
  },
];

export default function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: 12, backgroundColor: 'background.default' }}>
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
            Featured Projects
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            Showcasing my best work and technical expertise
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={project.featured ? 6 : 4} key={project.title}>
              <Card sx={{ 
                height: '100%',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                },
                '&::before': project.featured ? {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                  zIndex: 1,
                } : {}
              }}>
                {project.featured && (
                  <Box sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 2,
                  }}>
                    <Chip
                      label="Featured"
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                )}

                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'text.primary' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {project.description}
                    </Typography>
                  </Box>

                  <Box sx={{ flexGrow: 1, mb: 3 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                      Technologies Used:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                              color: 'white',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                    {project.repo && (
                      <IconButton
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'grey.100',
                          '&:hover': {
                            backgroundColor: 'grey.200',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <GitHub />
                      </IconButton>
                    )}
                    {project.link && (
                      <IconButton
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'white',
                          '&:hover': {
                            backgroundColor: 'primary.dark',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <Launch />
                      </IconButton>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            href="https://github.com/vamsix9"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'white',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <Code sx={{ mr: 1 }} />
            View All Projects on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}