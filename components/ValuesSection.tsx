"use client";

import { Box, Typography, Container } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";

const items = [
  {
    title: "24/7 Support",
    desc: "We provide round-the-clock technical assistance to ensure your systems run smoothly without interruptions.",
    icon: <SupportAgentIcon sx={{ fontSize: 34 }} />
  },
  {
    title: "Take Ownership",
    desc: "We take full responsibility for every project, delivering results with accountability, precision, and excellence.",
    icon: <WorkspacePremiumIcon sx={{ fontSize: 34 }} />
  },
  {
    title: "Team Work",
    desc: "Our collaborative approach ensures every solution is built with expertise, communication, and shared success.",
    icon: <GroupsIcon sx={{ fontSize: 34 }} />
  }
];

export default function ValuesSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, background: "#f9fbff" }}>
      <Container maxWidth="lg">

        {/* FLEX WRAPPER */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {items.map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: "1 1 300px",
                maxWidth: 360,
                p: 5,
                borderRadius: "24px",
                background: "white",
                transition: "0.35s",
                border: "1px solid #eef2ff",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.08)"
                }
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  background:
                    "linear-gradient(135deg,#4651E3,#7C8BFF)",
                  color: "white"
                }}
              >
                {item.icon}
              </Box>

              {/* TITLE */}
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, mb: 1 }}
              >
                {item.title}
              </Typography>

              {/* TEXT */}
              <Typography
                sx={{
                  color: "#6b7280",
                  lineHeight: 1.7,
                  fontSize: 15
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}
