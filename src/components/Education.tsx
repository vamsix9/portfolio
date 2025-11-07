import { Box, Card, CardContent, Grid, Avatar, Typography, Stack } from '@mui/material';

type EducationItem = {
  id: string;
  institution: string;
  logo?: string;
  degree: string;
  field?: string;
  duration: string;
  location?: string;
  summary?: string;
};

const SAMPLE_EDUCATION: EducationItem[] = [
  {
    id: 'edu1',
    institution: 'National University of Singapore',
    logo: '/logos/nus.png',
    degree: 'B.Sc. Computer Science',
    field: 'Software Engineering',
    duration: '2014 — 2018',
    location: 'Singapore',
    summary: 'Focused on systems, distributed computing and web development. Graduated with honours.',
  },
  {
    id: 'edu2',
    institution: 'Coursera / Various',
    logo: '/logos/coursera.png',
    degree: 'Professional Certificates',
    field: 'Cloud & DevOps',
    duration: '2019 — 2021',
    location: 'Online',
    summary: 'Completed several industry courses on cloud infrastructure, CI/CD and container orchestration.',
  },
];

export default function Education(): JSX.Element {
  return (
    <Box component="section" aria-label="education" sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
        Education
      </Typography>

      <Stack spacing={3}>
        {SAMPLE_EDUCATION.map((e) => (
          <Card key={e.id} variant="outlined">
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar src={e.logo} alt={e.institution} sx={{ width: 56, height: 56 }} />
                </Grid>

                <Grid item xs>
                  <Typography variant="h6">{e.institution}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.degree} {e.field ? ` — ${e.field}` : ''}
                  </Typography>
                </Grid>

                <Grid item>
                  <Box textAlign="right">
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {e.duration}
                    </Typography>
                    {e.location && (
                      <Typography variant="caption" color="text.secondary">
                        {e.location}
                      </Typography>
                    )}
                  </Box>
                </Grid>
              </Grid>

              {e.summary && (
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {e.summary}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
