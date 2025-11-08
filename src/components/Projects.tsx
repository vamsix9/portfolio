import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Button,
  CardActions,
} from '@mui/material';
import { Project } from '../types/types';



const PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Self-hosted Notes',
    description: 'A personal notes app that I build and self-host, with sync and offline support.',
    tech: ['Node.js', 'React', 'Postgres', 'Docker'],
    repo: 'https://github.com/ted/notes',
    demo: '#',
  },
  {
    id: 'p2',
    name: 'Metrics Pipeline',
    description: 'A lightweight metrics pipeline for ingesting and processing telemetry with minimal infra cost.',
    tech: ['Go', 'Kafka', 'Prometheus'],
    repo: 'https://github.com/ted/metrics-pipeline',
  },
];

export default function Projects(): JSX.Element {
  return (
    <Box component="section" id="projects" aria-label="projects" sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Projects
      </Typography>

      <Stack spacing={2}>
        {PROJECTS.map((p) => (
          <Card key={p.id} variant="outlined">
            <CardContent>
              <Typography variant="h6">{p.name}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {p.description}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
                {p.tech.map((t) => (
                  <Chip key={t} label={t} variant="outlined" sx={{ mr: 1, mb: 1 }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              {p.repo && (
                <Button size="small" component="a" href={p.repo} target="_blank" rel="noopener noreferrer">
                  View Repo
                </Button>
              )}
              {p.demo && (
                <Button size="small" component="a" href={p.demo} target="_blank" rel="noopener noreferrer">
                  Demo
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
