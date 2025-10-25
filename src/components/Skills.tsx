import { Box, Typography, Container, Grid, Card, CardContent, Chip } from '@mui/material';
import { Code, Storage, Cloud, Settings } from '@mui/icons-material';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code />,
    skills: ["TypeScript", "JavaScript", "Python"],
    color: "#2563eb"
  },
  {
    title: "Frontend",
    icon: <Code />,
    skills: ["React", "Material-UI", "Context API", "React-Redux", "Flutter"],
    color: "#7c3aed"
  },
  {
    title: "Backend",
    icon: <Settings />,
    skills: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
    color: "#059669"
  },
  {
    title: "Database",
    icon: <Storage />,
    skills: ["MongoDB", "PostgreSQL", "Redis", "GraphQL"],
    color: "#dc2626"
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud />,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    color: "#ea580c"
  },
  {
    title: "Tools & Others",
    icon: <Settings />,
    skills: ["Git", "Postman", "OpenAPI 3.0", "Google FCM", "Razorpay"],
    color: "#0891b2"
  }
];

export default function Skills() {
  return (
    <Box component="section" id="skills" sx={{ py: 12, backgroundColor: '#f8fafc' }}>
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
            Technical Skills
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            Technologies and tools I work with
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {skillCategories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.title}>
              <Card sx={{ 
                height: '100%',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                }
              }}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      backgroundColor: category.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                    }}>
                      <Box sx={{ color: 'white' }}>
                        {category.icon}
                      </Box>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: `${category.color}20`,
                          color: category.color,
                          border: `1px solid ${category.color}40`,
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: category.color,
                            color: 'white',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
            Always Learning
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}>
            I'm constantly exploring new technologies and frameworks to stay up-to-date with the latest trends in software development. 
            Currently learning about microservices architecture and advanced cloud deployment strategies.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}