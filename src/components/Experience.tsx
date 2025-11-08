import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import sws from "../assets/logos/sws.png";
import yellowowl from "../assets/logos/yellowl-owl.png";
import epixsmedia from '../assets/logos/epixs-media.png'
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
    company: "EPIXS Media",
    role: "Social Media Executive & Content Writer",
    description:
      "Web Development; Functional testing some company's apps (Lota Digital, Caldas da Rainha - City Guide).",
    logo: epixsmedia,
  },
];

const Experience: React.FC = () => {
  return (
    <>
      {/* Section heading (outside the bordered container) */}
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: 700,
            textTransform: "none",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Experiences
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          borderRadius: "12px",
          border: "1px solid #1e2729",
          p: 4,
        }}
      >
        {/* Vertical line */}
        <Box
          sx={{
            position: "absolute",
            left: "60px", // main timeline axis
            top: 0,
            bottom: 0,
            width: "2px",
            backgroundColor: "#1e2729",
            borderRadius: 1,
            zIndex: 0,
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {experiences.map((exp, index) => (
            <Box key={index} sx={{ position: "relative", minHeight: 80 }}>
              {/* Logo centered directly over the line */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "30px",
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
                  ml: "70px",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#b8b8b8",
                      fontSize: "0.85rem",
                      mb: 0.5,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {exp.date}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {exp.company}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "#9ca3af",
                      fontFamily: "Inter, sans-serif",
                      mb: 1,
                    }}
                  >
                    {exp.role}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#d1d5db",
                      lineHeight: 1.6,
                      fontFamily: "Inter, sans-serif",
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
    </>
  );
};

export default Experience;
