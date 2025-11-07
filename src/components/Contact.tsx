import { Box, Typography, Stack, Button, TextField } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';

export default function Contact(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open user's mail client with prefilled fields
    const subject = encodeURIComponent(`Contact from ${name || 'Portfolio'}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:ted@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <Box component="section" aria-label="contact" sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
        Contact
      </Typography>

      <Stack spacing={2} sx={{ maxWidth: 720 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <Button startIcon={<LinkedInIcon />} component="a" href="https://www.linkedin.com/in/ted" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Button>
          <Button startIcon={<GitHubIcon />} component="a" href="https://github.com/ted" target="_blank" rel="noopener noreferrer">
            GitHub
          </Button>
          <Button startIcon={<EmailIcon />} component="a" href="mailto:ted@example.com">
            Email
          </Button>
        </Stack>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
            <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} fullWidth multiline minRows={4} />
            <Button type="submit" variant="contained">Send</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
