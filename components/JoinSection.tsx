"use client";

import { Box, Typography, Container, Button } from "@mui/material";

export default function JoinSection() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        overflow: "hidden",
        background: "linear-gradient(135deg,#4651E3,#7C8BFF)",
        color: "white"
      }}
    >
      {/* BACKGROUND SHAPES */}
      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          top: -120,
          left: -120
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)",
          bottom: -100,
          right: -80
        }}
      />

      <Container maxWidth="md">
        <Box textAlign="center">

          {/* HEADLINE */}
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: 32, md: 48 },
              lineHeight: 1.2,
              mb: 3
            }}
          >
            Join 5000+ Startups Growing with Base.
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              opacity: 0.9,
              fontSize: { xs: 16, md: 18 },
              maxWidth: 650,
              mx: "auto",
              mb: 5,
              lineHeight: 1.7
            }}
          >
            We help businesses scale faster with powerful digital solutions,
            modern technology, and expert engineering support tailored for growth.
          </Typography>

          {/* CTA BUTTON */}
          <Button
            sx={{
              px: 6,
              py: 1.8,
              borderRadius: "14px",
              fontWeight: 700,
              fontSize: 16,
              textTransform: "none",
              background: "white",
              color: "#4651E3",
              "&:hover": {
                background: "#f3f4ff"
              }
            }}
          >
            Get Started Now
          </Button>

        </Box>
      </Container>
    </Box>
  );
}
