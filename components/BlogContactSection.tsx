"use client";

import { Box, Typography, Container, TextField, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

const blogs = [
  {
    title: "9 simple ways to improve your design skills",
    img: "/blog1.jpg"
  },
  {
    title: "Tips to quickly improve your coding speed",
    img: "/blog2.jpg"
  }
];

export default function BlogContactSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, background: "#f9fbff" }}>
      <Container maxWidth="lg">

        {/* BLOG HEADER */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Latest Insights & Articles
          </Typography>
        </Box>

        {/* BLOG CARDS */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 14
          }}
        >
          {blogs.map((blog, i) => (
            <Box
              key={i}
              sx={{
                flex: "1 1 320px",
                maxWidth: 420,
                borderRadius: "24px",
                overflow: "hidden",
                background: "white",
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-10px)"
                }
              }}
            >
              <Box
                component="img"
                src={blog.img}
                sx={{ width: "100%", height: 220, objectFit: "cover" }}
              />

              <Box p={4}>
                <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 2 }}>
                  {blog.title}
                </Typography>

                <Box sx={{ display: "flex", gap: 3, mb: 3, color: "#6b7280" }}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <PersonIcon sx={{ fontSize: 18 }} />
                    <Typography fontSize={14}>Musharof Chy</Typography>
                  </Box>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    <CalendarTodayIcon sx={{ fontSize: 18 }} />
                    <Typography fontSize={14}>25 Dec, 2025</Typography>
                  </Box>
                </Box>

                <Button sx={{ textTransform: "none", fontWeight: 600 }}>
                  Read More →
                </Button>
              </Box>
            </Box>
          ))}
        </Box>

        {/* CONTACT SECTION */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            alignItems: "stretch"
          }}
        >
          {/* LEFT INFO */}
          <Box flex="1 1 360px">
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Let’s Stay Connected
            </Typography>

            <Typography sx={{ color: "#6b7280", mb: 4, lineHeight: 1.7 }}>
              Reach out to us anytime for inquiries, project discussions, or
              collaboration opportunities. We’re always ready to help.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

              <Info icon={<EmailIcon />} title="Email Address" text="support@startup.com" />
              <Info icon={<LocationOnIcon />} title="Office Location" text="76/A, Green Valley, California USA." />
              <Info icon={<PhoneIcon />} title="Phone Number" text="+009 8754 3433 223" />
              <Info icon={<LanguageIcon />} title="Skype Email" text="example@yourmail.com" />

            </Box>
          </Box>

          {/* FORM */}
          <Box
            flex="1 1 420px"
            sx={{
              background: "white",
              p: 5,
              borderRadius: "24px",
              boxShadow: "0 25px 70px rgba(0,0,0,0.08)"
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
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


/* INFO ITEM COMPONENT */
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
