import { Box, Typography, Container, Card, CardContent, Chip, Grid } from '@mui/material';
import { Work, CalendarToday, LocationOn } from '@mui/icons-material';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "YellowOwl",
    role: "Full-Stack Developer",
    period: "Aug 2024 – Jan 2025",
    location: "Coimbatore",
    tech: ["React", "Node.js", "MongoDB", "FCM", "Razorpay"],
    points: [
      "Integrated Firebase Cloud Messaging (FCM) for real-time push notifications",
      "Developed dynamic leaderboard and rewards system with coins, badges, and milestones",
      "Built assessment module with timed tests, auto-scoring, and progress tracking",
      "Designed scalable backend APIs using Node.js and MongoDB with clean architecture",
      "Integrated Razorpay payment gateway for secure in-app transactions"
    ],
  },
  {
    company: "Softworth Solutions",
    role: "Full-Stack Developer",
    period: "Jan 2025 – Aug 2025",
    location: "Coimbatore",
    tech: ["Flutter", "Express.js", "MongoDB", "Google Maps", "Docker", "AWS"],
    points: [
      "Built real-time vehicle monitoring mobile app in Flutter with Google Maps integration",
      "Designed and implemented backend APIs using Express.js and MongoDB",
      "Integrated push notifications (FCM) to alert users based on vehicle state events",
      "Developed vehicle simulators to test real-time data ingestion and system reliability",
      "Created Admin Panel for managing vehicles with single-session login authentication",
      "Generated analytical reports for performance comparison across different vehicle types",
      "Implemented localization in Flutter to support English and Tamil"
    ],
  },
  {
    company: "EPIXS Media",
    role: "Social Media Executive & Content Writer",
    period: "Jan 2021 – Feb 2023",
    location: "Tirupati",
    tech: ["React", "Node.js", "MongoDB", "GraphQL", "Strapi", "AWS"],
    points: [
      "Implemented secure authentication using email and social logins (Google, Facebook)",
      "Designed backend logic for admin and merchant portals with fine-grained authentication",
      "Created flexible schemas to support multiple store types (restaurants, groceries, pharmacies)",
      "Built order delivery flow backend enabling real-time order tracking",
      "Developed admin and merchant panels for store management and operations",
      "Adopted microservices architecture to improve scalability and maintainability"
    ],
  },
];

export default function Experience() {
  return (
    <Box component="section" id="experience" sx={{ py: 12, backgroundColor: '#f8fafc' }}>
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
            Work Experience
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            Building innovative solutions with modern technologies
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {experience.map((item) => (
            <Grid item xs={12} md={6} lg={4} key={item.company}>
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      backgroundColor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                    }}>
                      <Work sx={{ color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {item.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.company}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <CalendarToday sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {item.period}
                    </Typography>
                    <LocationOn sx={{ fontSize: '1rem', color: 'text.secondary', ml: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      {item.location}
                    </Typography>
                  </Box>

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                      {item.points.slice(0, 3).map((point, i) => (
                        <Box key={i} component="span" sx={{ display: 'block', mb: 0.5 }}>
                          • {point}
                        </Box>
                      ))}
                      {item.points.length > 3 && (
                        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                          +{item.points.length - 3} more achievements
                        </Typography>
                      )}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {item.tech.slice(0, 4).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'primary.light',
                            color: 'white',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                      {item.tech.length > 4 && (
                        <Chip
                          label={`+${item.tech.length - 4}`}
                          size="small"
                          sx={{
                            backgroundColor: 'grey.300',
                            color: 'text.secondary',
                            fontSize: '0.75rem',
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}