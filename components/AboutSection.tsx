"use client";

import { Box, Typography, Container } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function AboutSection() {
    return (
        <Box sx={{ py: { xs: 10, md: 16 }, background: "#fff" }}>
            <Container maxWidth="lg">

                <Box
                    sx={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                        alignItems: "center"
                    }}
                >

                    {/* LEFT IMAGE GRID */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            flex: "1 1 450px",
                            alignItems: "center"
                        }}
                    >

                        {/* LEFT COLUMN (2 stacked) */}
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            <Box
                                component="img"
                                // src="/solohitech.png"
                                src='tech.jpg'
                                sx={{
                                    width: { xs: 160, md: 220 },
                                    borderRadius: "20px",
                                    boxShadow: "0 20px 50px rgba(0,0,0,0.12)"
                                }}
                            />

                            <Box
                                component="img"
                                src="/lady.png"
                                sx={{
                                    width: { xs: 160, md: 220 },
                                    borderRadius: "20px",
                                    boxShadow: "0 20px 50px rgba(0,0,0,0.12)"
                                }}
                            />
                        </Box>

                        {/* RIGHT TALL IMAGE */}
                        <Box sx={{ position: "relative" }}>
                            <Box
                                component="img"
                                src="/solohitech-office.png"
                                sx={{
                                    width: { xs: 180, md: 260 },
                                    borderRadius: "24px",
                                    boxShadow: "0 30px 80px rgba(0,0,0,0.18)"
                                }}
                            />

                            {/* PLAY BUTTON */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background:
                                            "linear-gradient(135deg,#4651E3,#7C8BFF)",
                                        boxShadow: "0 20px 60px rgba(70,81,227,0.45)",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        "&:hover": { transform: "scale(1.1)" }
                                    }}
                                >
                                    <PlayArrowIcon sx={{ color: "white", fontSize: 40 }} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* RIGHT CONTENT */}
                    <Box sx={{ flex: "1 1 420px" }}>

                        <Typography
                            sx={{
                                color: "#4651E3",
                                fontWeight: 700,
                                mb: 2,
                                letterSpacing: 1
                            }}
                        >
                            WHY CHOOSE US
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                mb: 3,
                                lineHeight: 1.25
                            }}
                        >
                            We Make Our customers happy
                            <br />
                            by giving Best services.
                        </Typography>

                        <Typography
                            sx={{
                                color: "#6b7280",
                                lineHeight: 1.8,
                                mb: 5
                            }}
                        >
                            We specialize in designing and delivering high-performance digital systems that empower
                            businesses to scale efficiently, automate operations, and achieve measurable growth.
                            With over 7+ years of industry experience, our team combines strategic thinking,
                            modern engineering practices, and advanced technologies to build secure, scalable,
                            and user-focused platforms tailored to real-world business demands and enterprise standards.


                            <br /><br />

                            Over the years, we have successfully delivered a wide range of production-grade solutions
                            including multi-vendor e-commerce platforms, enterprise logistics tracking APIs,
                            school management systems with parent portals, hotel booking and CRM platforms,
                            AI-powered recruitment systems, and subscription-based commerce infrastructures
                            each engineered for reliability, performance, security, and long-term scalability.

                            <br /><br />

                            Many of these platforms are architected with fintech-ready infrastructure, secure payment
                            integrations, transaction processing systems, and scalable financial modules, enabling us
                            to confidently design and develop virtually any type of fintech application from digital
                            wallets and payment gateways to banking platforms, billing systems, and financial analytics
                            solutions.
                        </Typography>


                        {/* BUTTON */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Box
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background:
                                        "linear-gradient(135deg,#4651E3,#7C8BFF)",
                                    color: "white",
                                    boxShadow: "0 15px 40px rgba(70,81,227,0.45)",
                                    cursor: "pointer"
                                }}
                            >
                                <PlayArrowIcon />
                            </Box>

                            <Typography sx={{ fontWeight: 600 }}>
                                SEE HOW WE WORK
                            </Typography>
                        </Box>

                    </Box>

                </Box>
            </Container>
        </Box>
    );
}
