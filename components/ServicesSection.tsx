"use client";

import { Box, Typography, Container } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LanguageIcon from "@mui/icons-material/Language";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CloudIcon from "@mui/icons-material/Cloud";

const services = [
  {
    title: "Software Development",
    desc: "Custom software solutions built to scale, perform efficiently, and solve real business challenges.",
    icon: <CodeIcon />
  },
  {
    title: "Cyber Security",
    desc: "Advanced security systems designed to protect your data, infrastructure, and users from threats.",
    icon: <SecurityIcon />
  },
  {
    title: "Mobile App Development",
    desc: "High-performance iOS and Android apps engineered for speed, usability, and scalability.",
    icon: <PhoneIphoneIcon />
  },
  {
    title: "Web Application Development",
    desc: "Modern, responsive, and scalable web applications built using the latest technologies.",
    icon: <LanguageIcon />
  },
  {
    title: "Fintech Solutions",
    desc: "Secure financial platforms, payment integrations, wallets, and banking infrastructure systems.",
    icon: <AccountBalanceIcon />
  },
  {
    title: "Cloud Infrastructure",
    desc: "Reliable cloud architecture, deployment, and optimization for enterprise-level performance.",
    icon: <CloudIcon />
  }
];

export default function ServicesSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, background: "#f9fbff" }}>
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box textAlign="center" mb={10}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, mb: 2 }}
          >
            We Offer The Best Quality Service for You
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              color: "#6b7280",
              lineHeight: 1.8
            }}
          >
            We provide powerful digital solutions designed to help businesses grow,
            scale, and succeed with confidence and efficiency.
          </Typography>
        </Box>

        {/* SERVICES GRID */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center"
          }}
        >
          {services.map((service, i) => (
            <Box
              key={i}
              sx={{
                flex: "1 1 300px",
                maxWidth: 340,
                p: 4,
                borderRadius: "22px",
                background: "white",
                border: "1px solid #eef2ff",
                transition: "0.35s",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.08)"
                }
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  background:
                    "linear-gradient(135deg,#4651E3,#7C8BFF)",
                  color: "white"
                }}
              >
                {service.icon}
              </Box>

              {/* TITLE */}
              <Typography sx={{ fontWeight: 700, mb: 1 }}>
                {service.title}
              </Typography>

              {/* TEXT */}
              <Typography
                sx={{
                  color: "#6b7280",
                  fontSize: 15,
                  lineHeight: 1.7
                }}
              >
                {service.desc}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}
