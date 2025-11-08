import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import masai from "../assets/logos/masai.png";
import seagi from '../assets/logos/seagi.png';
import { EducationType } from "../types/types";

const EducationList: EducationType[] = [
  {
    date: "Jan 2023 - Dec 2023",
    company: "Masai School",
    role: "Full-Stack web development - Student",
    logo: masai,
  },
  {
    date: "2014 - 2018",
    company: "Siddartha Educational Academy Group of Institutions",
    role: "B.Tech in Mechanical Engineering",
    logo: seagi,
  },
];

const Education: React.FC = () => {
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
          Education
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
        {EducationList.map((edu, index) => (
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
                src={edu.logo}
                alt={edu.company}
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
                  {edu.date}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {edu.company}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#9ca3af",
                    fontFamily: "Inter, sans-serif",
                    mb: 1,
                  }}
                >
                  {edu.role}
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

export default Education;
