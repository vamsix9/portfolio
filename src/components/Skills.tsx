import { Box, Typography, Stack, Chip, Avatar } from '@mui/material';

type Skill = { name: string; image?: string };

const SKILLS: Skill[] = [
  { name: 'TypeScript', image: '/tech/typescript.png' },
  { name: 'Node.js', image: '/tech/nodejs.png' },
  { name: 'React', image: '/tech/react.png' },
  { name: 'Docker', image: '/tech/docker.png' },
  { name: 'Kubernetes', image: '/tech/kubernetes.png' },
  { name: 'Postgres', image: '/tech/postgres.png' },
  { name: 'Redis', image: '/tech/redis.png' },
  { name: 'GraphQL', image: '/tech/graphql.png' },
];

export default function Skills(): JSX.Element {
  return (
    <Box component="section" aria-label="skills" sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
        Skills
      </Typography>

      <Stack direction="row" flexWrap="wrap" spacing={1}>
        {SKILLS.map((s) => (
          <Chip
            key={s.name}
            label={s.name}
            icon={s.image ? <Avatar src={s.image} alt={s.name} sx={{ width: 20, height: 20 }} /> : undefined}
            sx={{ mr: 1, mb: 1 }}
            variant="outlined"
          />
        ))}
      </Stack>
    </Box>
  );
}
