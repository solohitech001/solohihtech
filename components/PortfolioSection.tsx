"use client";

import { Box, Typography, Container, Chip, Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";

const projects = [
    {
        title: "Global Multi-Vendor E-Commerce Platform",
        desc: "A scalable marketplace system supporting vendors, payments, real-time orders, analytics dashboard, and secure transactions.",
        tech: ["Next.js", "Node.js", "Nest.js", "MongoDB", "Stripe", "Redux"],
        image: "/Ecom.png",
        live: "https://ahiaglobal.vercel.app",
        code: "#"
    },
    {
        title: "Real-Time Logistics Tracking API",
        desc: "Enterprise infrastructure API for shipment tracking, route monitoring, delivery analytics, and fleet management systems.",
        tech: ["Express", "PostgreSQL", "Redis", "Docker", "JWT"],
        image: "/api.png",
        live: "#",
        code: "#"
    },
    {
        title: "School Management System with Parent Portal",
        desc: "Comprehensive education platform featuring student records, attendance tracking, result management, parent access portal, and administrative dashboard.",
        tech: ["React", "Node.js", "MySQL", "Chart.js"],
        image: "/school.png",
        live: "http://cruzedu.online/",
        code: "#"
    },
    {
        title: "Gift & Subscription Commerce Platform",
        desc: "Scalable e-commerce system supporting gift purchases, recurring subscriptions, payment integration, user accounts, and order management.",
        tech: ["Next.js", "Express", "MongoDB", "Stripe", "Tailwind"],
        image: "/gift.png",
        live: "https://magikworldgifts.com",
        code: "#"
    }

];

export default function PortfolioSection() {
    return (
        <Box sx={{ py: { xs: 10, md: 16 }, background: "#f9fbff" }}>
            <Container maxWidth="lg">

                {/* HEADER */}
                <Box textAlign="center" mb={10}>
                    <Typography variant="h4" sx={{ fontWeight: 0, mb: 2 }}>
                        Software Solutions we’ve Built
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 700,
                            mx: "auto",
                            color: "#6b7280",
                            lineHeight: 1.8
                        }}
                    >
                        A collection of real-world systems, platforms, and applications we’ve
                        designed and developed  built with scalability, performance, and
                        production reliability in mind.
                    </Typography>
                </Box>

                {/* PROJECT GRID */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 5,
                        justifyContent: "center"
                    }}
                >
                    {projects.map((project, i) => (
                        <Box
                            key={i}
                            sx={{
                                flex: "1 1 420px",
                                maxWidth: 520,
                                borderRadius: "26px",
                                overflow: "hidden",
                                background: "white",
                                border: "1px solid #eef2ff",
                                transition: "0.35s",

                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: "0 30px 80px rgba(0,0,0,0.1)"
                                }
                            }}
                        >
                            {/* IMAGE */}
                            <Box
                                component="img"
                                src={project.image}
                                sx={{
                                    width: "100%",
                                    height: 260,
                                    objectFit: "cover"
                                }}
                            />

                            {/* CONTENT */}
                            <Box p={4}>

                                {/* TITLE */}
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: 20,
                                        mb: 1
                                    }}
                                >
                                    {project.title}
                                </Typography>

                                {/* DESC */}
                                <Typography
                                    sx={{
                                        color: "#6b7280",
                                        fontSize: 15,
                                        lineHeight: 1.7,
                                        mb: 3
                                    }}
                                >
                                    {project.desc}
                                </Typography>

                                {/* TECH STACK */}
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.2, mb: 3 }}>
                                    {project.tech.map((t, idx) => (
                                        <Chip
                                            key={idx}
                                            label={t}
                                            size="small"
                                            sx={{
                                                background: "#eef2ff",
                                                fontWeight: 600
                                            }}
                                        />
                                    ))}
                                </Box>

                                {/* BUTTONS */}
                                <Box sx={{ display: "flex", gap: 2 }}>
                                    <Button
                                        startIcon={<LaunchIcon />}
                                        href={project.live}
                                        target="_blank"
                                        sx={{
                                            textTransform: "none",
                                            fontWeight: 600
                                        }}
                                    >
                                        Live Preview
                                    </Button>

                                    <Button
                                        startIcon={<CodeIcon />}
                                        href={project.code}
                                        target="_blank"
                                        sx={{
                                            textTransform: "none",
                                            fontWeight: 600
                                        }}
                                    >
                                        Private Repo
                                    </Button>
                                </Box>

                            </Box>
                        </Box>
                    ))}
                </Box>

            </Container>
        </Box>
    );
}
