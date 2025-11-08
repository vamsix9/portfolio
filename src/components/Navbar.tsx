import { Box, Stack, Typography } from "@mui/material";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "career", label: "Career" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

export default function Navbar(): JSX.Element {
  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        bgcolor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "9999px",
        backdropFilter: "blur(10px)",
        px: 4,
        py: 1,
        zIndex: 1000,
      }}
    >
      <Stack direction="row" spacing={4} alignItems="center">
        {NAV_ITEMS.map((item) => (
          <Typography
            key={item.id}
            variant="body1"
            role="button"
            tabIndex={0}
            onClick={() => handleNav(item.id)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNav(item.id); }}
            sx={{
              color: "#fff",
              fontWeight: 400,
              cursor: "pointer",
              transition: "opacity 0.2s ease",
              "&:hover": { opacity: 0.7 },
            }}
          >
            {item.label}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
