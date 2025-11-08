import React from "react";
import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import sws from "../assets/logos/sws.png";
import yellowowl from "../assets/logos/yellowl-owl.png";
import epixsmedia from '../assets/logos/epixs-media.png';
import masai from "../assets/logos/masai.png";
import seagi from '../assets/logos/seagi.png';
import { ExperienceType } from "../types/types";

const experiences: ExperienceType[] = [
  {
    date: "Jan 2025 - Aug 2025",
    company: "Softworth Solutions",
    role: "Full-Stack Developer",
    description: "Web Design; Web Development; Wordpress + Elementor.",
    logo: sws,
  },
  {
    date: "Aug 2024 - Jan 2025",
    company: "YellowOwl",
    role: "Full-Stack Developer",
    description:
      "Mobile Development ( Parque D.Carlos I App - Course Final Project [Grade:20/20] ); Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
    logo: yellowowl,
  },
  {
    date: "Jan 2023 - Dec 2023",
    company: "Masai School",
    role: "Full-Stack web development - Student",
    logo: masai,
  },
  {
    date: "Jan 2021 - Feb 2023",
    company: "EPIXS Media",
    role: "Social Media Executive & Content Writer",
    description:
      "Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
    logo: epixsmedia,
  },
  {
    date: "2014 - 2018",
    company: "Siddartha Educational Academy Group of Institutions",
    role: "B.Tech in Mechanical Engineering",
    logo: seagi,
  },
];

const Experience: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{
      p: 1,
    }}>
      {/* Section heading (outside the bordered container) */}
      <Box sx={{ mb: 2 }}
        component="section"
        id="career"
        aria-label="career">
        <Typography
          variant="subtitle2"
          sx={{
            color: "white",
            fontWeight: 100,
            textTransform: "none"
          }}
        >
          so far
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: 700,
            textTransform: "none"
          }}
        >
          Career
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          borderRadius: "12px",
          border: `1px solid ${theme.palette.primary.dark}`,
          p: 4,
        }}
      >
        {/* Vertical line */}
        <Box
          sx={{
            position: "absolute",
            left: "35px", // main timeline axis
            top: 0,
            bottom: 0,
            width: "2px",
            backgroundColor: theme.palette.primary.dark,
            borderRadius: 1,
            zIndex: 0,
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {experiences.map((exp, index) => (
            <Box key={index} sx={{ position: "relative" }}>
              {/* Logo centered directly over the line */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "5px",
                  transform: "translate(-50%, 0)", // centers logo over line
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  boxShadow: "0 0 0 2px #1e2729",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  zIndex: 2,
                }}
              >
                <Box
                  component="img"
                  src={exp.logo}
                  alt={exp.company}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    objectFit: "fill",
                  }}
                />
              </Box>

              {/* Text card aligned to the right of the line */}
              <Card
                sx={{
                  backgroundImage: "none",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  color: "white",
                  ml: "40px",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#b8b8b8",
                      fontSize: "0.85rem",
                      mb: 0.5
                    }}
                  >
                    {exp.date}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 0.5
                    }}
                  >
                    {exp.company}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#9ca3af",
                      mb: 1
                    }}
                  >
                    {exp.role}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#d1d5db",
                      lineHeight: 1.6
                    }}
                  >
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
