"use client";

import { Box, Typography, Container } from "@mui/material";

const team = [
    {
        name: "Solomon John",
        role: "Chief Technology Officer",
        img: "/solomon.jpg"
    },
    {
        name: "Esther Joachim",
        role: "Product Designer",
        img: "/designer.jpg"
    },
    {
        name: "Mr Uzoma",
        role: "Project Manager",
        img: "/uzoma.jpg"
    },
    {
        name: "Barrister Opuama",
        role: "Legal Advisor",
        img: "/barrister.jpg"
    },
    {
        name: "Hassan Abubakar",
        role: "Cybersecurity Specialist",
        img: "/cyber.jpg"
    },
    {
        name: "Ikenna Joseph",
        role: "Hardware Engineer",
        img: "/hardware.png"
    },
    {
        name: "Mr Timothy",
        role: "Data Analyst",
        img: "/data-analyst.jpg"
    },
];

export default function TeamSection() {
    return (
        <Box 
        id="team"
        sx={{ position: "relative", py: { xs: 10, md: 16 }, overflow: "hidden" }}>

            {/* BACKGROUND SHAPES */}
            <Box
                sx={{
                    position: "absolute",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "rgba(70,81,227,0.08)",
                    top: -100,
                    left: -100
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: "rgba(124,139,255,0.12)",
                    bottom: -80,
                    right: -80
                }}
            />

            <Container maxWidth="lg">

                {/* HEADING */}
                <Box textAlign="center" mb={10}>
                    <Typography
                        sx={{
                            color: "#4651E3",
                            fontWeight: 700,
                            letterSpacing: 1,
                            mb: 2
                        }}
                    >
                        OUR TEAM
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 0, mb: 2 }}
                    >
                        Meet With Some Of Our Team
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 650,
                            mx: "auto",
                            color: "#6b7280",
                            lineHeight: 1.8
                        }}
                    >
                        We bring together talented professionals driven by innovation,
                        creativity, and excellence to deliver exceptional digital solutions.
                    </Typography>
                </Box>

                {/* TEAM CARDS */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 4,
                        flexWrap: "wrap",
                        justifyContent: "center"
                    }}
                >
                    {team.map((member, i) => (
                        <Box
                            key={i}
                            sx={{
                                width: 220,
                                borderRadius: "26px",
                                overflow: "hidden",
                                background: "white",
                                textAlign: "center",
                                transition: "0.35s",
                                border: "1px solid #eef2ff",

                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: "0 30px 70px rgba(0,0,0,0.1)"
                                }
                            }}
                        >
                            {/* IMAGE */}
                            <Box
                                component="img"
                                src={member.img}
                                sx={{
                                    width: "100%",
                                    height: 280,
                                    objectFit: "cover"
                                }}
                            />

                            {/* INFO */}
                            <Box sx={{ p: 3 }}>
                                <Typography sx={{ fontWeight: 0, fontSize: 18, fontFamily: "Poppins", mb: 1 }}>
                                    {member.name}
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        color: "#6b7280",
                                        mt: 1
                                    }}
                                >
                                    {member.role}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

            </Container>
        </Box>
    );
}
