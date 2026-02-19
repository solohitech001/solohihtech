"use client";

import { Box, Typography, Container, TextField, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

export default function ContactSection() {
  return (
    <Box sx={{ position: "relative", py: { xs: 10, md: 16 }, overflow: "hidden" }}>

      {/* BACKGROUND SHAPES */}
      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(70,81,227,0.08)",
          top: -120,
          left: -120
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(124,139,255,0.15)",
          bottom: -80,
          right: -80
        }}
      />

      <Container maxWidth="lg">

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            alignItems: "stretch"
          }}
        >
          {/* LEFT SIDE */}
          <Box flex="1 1 360px">
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Let’s Stay Connected
            </Typography>

            <Typography sx={{ color: "#6b7280", mb: 4, lineHeight: 1.7 }}>
              We’re always ready to discuss new projects, creative ideas,
              or opportunities to be part of your vision.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Info icon={<EmailIcon />} title="Email Address" text="solohitechnology09@gmail.com" />
              <Info icon={<LocationOnIcon />} title="Office Location" text=" 4th Ave, Gwarinpa, Abuja 900001, Federal Capital Territory." />
              <Info icon={<PhoneIcon />} title="Phone Number" text="+234 9150242622" />
              <Info icon={<LanguageIcon />} title="Skype Email" text="solohitechnology09@gmail.com" />
            </Box>
          </Box>

          {/* FORM CARD */}
          <Box
            flex="1 1 420px"
            sx={{
              background: "white",
              p: 5,
              borderRadius: "26px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.08)"
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: 3 }}>
              Send Message
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField label="Full Name" fullWidth />
              <TextField label="Email Address" fullWidth />
              <TextField label="Phone Number" fullWidth />
              <TextField label="Subject" fullWidth />
              <TextField label="Message" multiline rows={4} fullWidth />

              <Button
                variant="contained"
                sx={{
                  py: 1.6,
                  borderRadius: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  background: "linear-gradient(135deg,#4651E3,#7C8BFF)"
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}


/* CONTACT INFO ITEM */
function Info({ icon, title, text }: any) {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#4651E3,#7C8BFF)",
          color: "white"
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography fontWeight={700}>{title}</Typography>
        <Typography fontSize={14} color="#6b7280">
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
