"use client";

import { Box, Typography, Container, Chip } from "@mui/material";

const projects = [
    {
        title: "Real-Time Logistics Tracking API",
        category: "Enterprise Infrastructure",
        img: "/api.png"
    }
    ,
    {
        title: "E-Commerce Marketplace",
        category: "Full Stack Platform",
        img: "/Ecom.png"
    },
    {
        title: "Hotel Management system with Booking and CRM",
        category: "Web Application",
        img: "/hotel.png"
    },
    {
        title: "Job Portal with AI Resume Screening",
        category: "Job Portal System",
        img: "/mafservice.png"
    },
    {
        title: "Gift and Subscription E-Commerce Platform",
        category: "Enterprise Software",
        img: "/gift.png"
    },
    {
        title: "School Management System with Parent Portal",
        category: "Cloud Infrastructure",
        img: "/school.png"
    }
];

export default function ProjectsSection() {
    return (
        <Box sx={{ py: { xs: 10, md: 16 }, background: "#f9fbff" }}>
            <Container maxWidth="lg">

                {/* HEADER */}
                <Box textAlign="center" mb={10}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                        Solutions We’ve Built for Clients
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 650,
                            mx: "auto",
                            color: "#6b7280",
                            lineHeight: 1.8
                        }}
                    >
                        Explore some of the powerful systems and digital solutions we’ve
                        designed, developed, and deployed for businesses across industries.
                    </Typography>
                </Box>

                {/* PROJECT GRID */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 4,
                        justifyContent: "center"
                    }}
                >
                    {projects.map((project, i) => (
                        <Box
                            key={i}
                            sx={{
                                position: "relative",
                                flex: "1 1 300px",
                                maxWidth: 360,
                                height: 260,
                                borderRadius: "24px",
                                overflow: "hidden",
                                cursor: "pointer",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",

                                "&:hover .overlay": {
                                    opacity: 1
                                },

                                "& img": {
                                    transition: "0.5s"
                                },

                                "&:hover img": {
                                    transform: "scale(1.08)"
                                }
                            }}
                        >
                            {/* IMAGE */}
                            <Box
                                component="img"
                                src={project.img}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            />

                            {/* OVERLAY */}
                            <Box
                                className="overlay"
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                                    opacity: 0,
                                    transition: "0.4s",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    p: 3
                                }}
                            >
                                <Chip
                                    label={project.category}
                                    size="small"
                                    sx={{
                                        mb: 1,
                                        background: "#4651E3",
                                        color: "white",
                                        fontWeight: 600,
                                        width: "fit-content"
                                    }}
                                />

                                <Typography
                                    sx={{
                                        color: "white",
                                        fontWeight: 700,
                                        fontSize: 18
                                    }}
                                >
                                    {project.title}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

            </Container>
        </Box>
    );
}
