import {
  Box,
  Card,
  CardContent,
  Grid,
  Avatar,
  Typography,
  Stack,
  Chip,
  Divider,
  useTheme,
} from '@mui/material';

type Tech = {
  name: string;
  image?: string; // path to image or public URL
};

type ExperienceItem = {
  id: string;
  company: {
    name: string;
    website?: string;
    linkedin?: string;
    logo?: string; // path to logo
  };
  designation: string;
  duration: string;
  location?: string;
  technologies: Tech[];
  summary: string; // rich text or markdown could be supported later
};

const SAMPLE_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp1',
    company: {
      name: 'Acme Systems',
      website: 'https://acme.example',
      linkedin: 'https://www.linkedin.com/company/acme-systems',
      logo: '/logos/acme.png',
    },
    designation: 'Senior Software Engineer',
    duration: 'Jan 2022 - Present',
    location: 'Singapore',
    technologies: [
      { name: 'Node.js', image: '/tech/nodejs.png' },
      { name: 'TypeScript', image: '/tech/typescript.png' },
      { name: 'Postgres', image: '/tech/postgres.png' },
      { name: 'Docker', image: '/tech/docker.png' },
    ],
    summary:
      'Built scalable backend services, owned CI/CD pipelines, and migrated legacy services to a containerised platform. Worked closely with product to deliver features end-to-end.',
  },
  {
    id: 'exp2',
    company: {
      name: 'Beta Labs',
      website: 'https://beta.example',
      linkedin: 'https://www.linkedin.com/company/beta-labs',
      logo: '/logos/beta.png',
    },
    designation: 'Software Engineer',
    duration: 'Jun 2019 - Dec 2021',
    location: 'Remote',
    technologies: [
      { name: 'React', image: '/tech/react.png' },
      { name: 'GraphQL', image: '/tech/graphql.png' },
      { name: 'Redis', image: '/tech/redis.png' },
    ],
    summary:
      'Implemented customer-facing features, improved frontend performance, and led several cross-team integrations.',
  },
];

// Timeline-style company block: left column contains avatar over a vertical connector,
// right column contains duration, company name, role and summary.
function TimelineItem({ item, isFirst, isLast }: { item: ExperienceItem; isFirst: boolean; isLast: boolean }) {
  const theme = useTheme();
  return (
    <Grid container spacing={2} alignItems="flex-start">
      {/* Left: avatar + connector */}
      <Grid item sx={{ width: 96, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ position: 'relative', width: 24 }}>
          {/* vertical line spanning the card except optional caps */}
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              left: '50%',
              top: isFirst ? '50%' : 0,
              bottom: isLast ? '50%' : 0,
              transform: 'translateX(-50%)',
              width: 2,
              bgcolor: 'divider',
            }}
          />

          <Avatar
            src={item.company.logo}
            alt={item.company.name}
            sx={{
              width: 64,
              height: 64,
              border: `3px solid ${theme.palette.background.paper}`,
              boxShadow: 1,
              position: 'relative',
              left: -20,
            }}
          />
        </Box>
      </Grid>

      {/* Right: content */}
      <Grid item xs>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600 }} color="text.secondary">
            {item.duration}
          </Typography>

          <Typography variant="h6" component="div" sx={{ fontWeight: 700, mt: 0.5 }}>
            {item.company.name}
          </Typography>

          <Typography variant="subtitle2" color="text.secondary">
            {item.designation}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }}>
            {item.summary}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

function TechList({ techs }: { techs: Tech[] }) {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
      {techs.map((t) => (
        <Chip
          key={t.name}
          icon={
            t.image ? (
              <Avatar src={t.image} alt={t.name} sx={{ width: 20, height: 20 }} />
            ) : undefined
          }
          label={t.name}
          variant="outlined"
          sx={{ mr: 1, mb: 1 }}
        />
      ))}
    </Stack>
  );
}

// WorkSummary was inlined into TimelineItem; helper removed.

export default function Experience(): JSX.Element {
  return (
    <Box component="section" aria-label="experience" sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
        Experience
      </Typography>

      <Stack spacing={3}>
        {SAMPLE_EXPERIENCES.map((item, idx) => (
          <Card key={item.id} variant="outlined">
            <CardContent>
              <TimelineItem item={item} isFirst={idx === 0} isLast={idx === SAMPLE_EXPERIENCES.length - 1} />

              <Divider sx={{ my: 2 }} />

              <Typography variant="subtitle2">Technologies & Tools</Typography>
              <TechList techs={item.technologies} />
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
