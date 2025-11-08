import { Box, Typography, Stack, Avatar } from '@mui/material';
import { Skill } from '../types/types';
import typescript from '../assets/logos/typescript-original.svg';
import javascript from '../assets/logos/javascript-original.svg';
import nodejs from '../assets/logos/nodejs-original-wordmark.svg';
import react from '../assets/logos/react-original.svg';
import docker from '../assets/logos/docker-original.svg';
import kubernetes from '../assets/logos/kubernetes-original.svg';
import postgres from '../assets/logos/postgresql-original.svg';
import mongodb from '../assets/logos/mongodb-original.svg';
import redis from '../assets/logos/redis-original.svg';
import graphql from '../assets/logos/graphql-plain.svg';
import git from '../assets/logos/git-original.svg';
import github from '../assets/logos/github-original.svg';
import mui from '../assets/logos/materialui-original.svg';
import redux from '../assets/logos/redux-original.svg';
import openapi from '../assets/logos/openapi-original.svg';
import aws from '../assets/logos/amazonwebservices-original-wordmark.svg';
import expressjs from '../assets/logos/expressjs-removebg-preview.png';

const SKILLS: Skill[] = [
  { name: 'TypeScript', image: typescript },
  { name: 'JavaScript', image: javascript },
  { name: 'Node.js', image: nodejs },
  { name: 'Express.js', image: expressjs },
  { name: 'React', image: react },
  { name: 'Docker', image: docker },
  { name: 'Kubernetes', image: kubernetes },
  { name: 'PostgreSQL', image: postgres },
  { name: 'MongoDB', image: mongodb },
  { name: 'Redis', image: redis },
  { name: 'GraphQL', image: graphql },
  { name: 'Git', image: git },
  { name: 'GitHub', image: github },
  { name: 'Material-UI', image: mui },
  { name: 'Redux', image: redux },
  { name: 'OpenAPI', image: openapi },
  { name: 'AWS', image: aws },
];


export default function Skills(): JSX.Element {
  return (
    <Box component="section" id="skills" aria-label="skills" sx={{ p: 1, bgcolor: "transparent" }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 2, color: "#fff" }}
      >
        Tech Stack
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={2}>
        {SKILLS.map((s) => (
          <Box
            key={s.name}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#fff",
            }}
          >
            <Avatar
              src={s.image}
              alt={s.name}
              variant="square"
              sx={{ width: 22, height: 22, bgcolor: "transparent" }}
            />
            <Typography variant="body2">{s.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
