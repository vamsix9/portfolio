import {
	Box,
	Typography,
	IconButton,
	Stack,
	Tooltip,
	Button,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Social } from '../types/types';

const SOCIALS: Social[] = [
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/vamsi-brahmanapalli',
		icon: <LinkedInIcon />,
	},
	{
		name: 'X',
		href: 'https://x.com/vamsi_brmhnplli',
		icon: <TwitterIcon />,
	},
	{
		name: 'GitHub',
		href: 'https://github.com/vamsix9',
		icon: <GitHubIcon />,
	},
	{
		name: 'Email',
		href: 'mailto:bramhanapalli.vamsi@gmail.com',
		icon: <EmailIcon />,
	},
];

export default function Home(): JSX.Element {
	return (
		<Box
			component="section"
			id="home"
			aria-label="home"
			sx={{
				minHeight: '60vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				p: 1,
			}}
		>
			<Box sx={{ maxWidth: 900, width: '100%' }}>
				<Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
					hi, vamsi here.. 👋
				</Typography>

				<Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
					software engineer based in India 🇮🇳
				</Typography>

				<Typography variant="body1" sx={{ mt: 3, lineHeight: 1.6 }}>
					Backend by trade, full-stack by passion. I build and self-host the lot.
				</Typography>

				<Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 3 }}>
					<Button variant="outlined" endIcon={<DownloadRoundedIcon />}>
						Resume
					</Button>

					{SOCIALS.map((s) => (
						<Tooltip key={s.name} title={s.name} arrow>
							<IconButton
								aria-label={s.name}
								component="a"
								href={s.href}
								target="_blank"
								rel="noopener noreferrer"
								color="primary"
							>
								{s.icon}
							</IconButton>
						</Tooltip>
					))}

					<Box sx={{ flex: '1 1 auto' }} />
				</Stack>
			</Box>
		</Box>
	);
}
