import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const LANGUAGES = [
  { text: "Welcome", lang: "English" },
  { text: "స్వాగతం", lang: "Telugu" },
  { text: "स्वागत है", lang: "Hindi" },
  { text: "ಸ್ವಾಗತ", lang: "Kannada" },
  { text: "ようこそ", lang: "Japanese" },
];

export default function Loading(): JSX.Element {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % LANGUAGES.length);
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#000",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <Typography
        key={LANGUAGES[index].text}
        variant="h3"
        sx={{
          fontWeight: 400,
          letterSpacing: 1,
          textAlign: "center",
          animation: "fade 1.5s ease-in-out infinite",
          "@keyframes fade": {
            "0%": { opacity: 0, transform: "translateY(10px)" },
            "20%": { opacity: 1, transform: "translateY(0)" },
            "80%": { opacity: 1, transform: "translateY(0)" },
            "100%": { opacity: 0, transform: "translateY(-10px)" },
          },
        }}
      >
        {LANGUAGES[index].text}
      </Typography>
    </Box>
  );
}
