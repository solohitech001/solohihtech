"use client";

import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" }
    })
};

export default function Hero() {
    // images that will rotate
    const images = [
        "/solohitech.png",
        "/lady.png",
        // "/solohitech3.png",
        // "/solohitech4.png"
    ];

    const [index, setIndex] = useState(0);

    // change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            component={motion.div}
            initial="hidden"
            animate="show"
            sx={{
                position: "relative",
                overflow: "hidden",
                py: { xs: 12, md: 18 },
                background:
                    "radial-gradient(circle at 20% 30%, rgba(70,81,227,0.08), transparent 40%), radial-gradient(circle at 80% 70%, rgba(99,102,241,0.1), transparent 40%), #ffffff",
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={8} alignItems="center">

                    {/* LEFT */}
                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            component={motion.h1}
                            variants={fadeUp}
                            custom={1}
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: 36, md: 60 },
                                lineHeight: 1.1,
                                letterSpacing: "-1.5px",
                                background:
                                    "linear-gradient(90deg,#111827,#4651E3 60%,#7C8BFF)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            We Build Digital Products That Scale Businesses
                        </Typography>

                        <Typography
                            component={motion.p}
                            variants={fadeUp}
                            custom={2}
                            sx={{
                                mt: 3,
                                fontSize: { xs: 16, md: 20 },
                                color: "#4b5563",
                                maxWidth: 560,
                                lineHeight: 1.8,
                            }}
                        >
                            UI/UX, Web Apps, Mobile Apps, Branding, SEO, Cloud Systems,
                            and enterprise-grade digital infrastructure designed for growth.
                        </Typography>

                        {/* BUTTONS */}
                        <Box
                            component={motion.div}
                            variants={fadeUp}
                            custom={3}
                            sx={{ mt: 5, display: "flex", gap: 3 }}
                        >

                            <Box
                                component="a"
                                href="https://wa.me/2349150242622"
                                target="_blank"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    px: 3,
                                    py: 1.5,
                                    borderRadius: "14px",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    color: "white",
                                    background: "linear-gradient(135deg,#25D366,#1ebe5d)",
                                    boxShadow: "0 8px 25px rgba(37,211,102,0.35)",
                                    transition: "0.3s",
                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 12px 30px rgba(37,211,102,0.45)"
                                    }
                                }}
                            >
                                WhatsApp
                            </Box>

                            <Button
                                component={motion.button}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.96 }}
                                sx={{
                                    px: 5,
                                    py: 1.8,
                                    borderRadius: "16px",
                                    textTransform: "none",
                                    fontSize: 17,
                                    fontWeight: 600,
                                    background:
                                        "linear-gradient(135deg,#4651E3 0%, #6D7BFF 100%)",
                                    boxShadow: "0 20px 60px rgba(70,81,227,0.45)",
                                    color: "white",
                                }}
                            >
                                Project
                            </Button>

                            <Button
                                component="a"
                                href="#about"
                                sx={{
                                    px: 5,
                                    py: 1.8,
                                    borderRadius: "16px",
                                    fontSize: 17,
                                    fontWeight: 600,
                                    textTransform: "none",
                                    borderColor: "#e5e7eb",
                                    backdropFilter: "blur(6px)",
                                    background: "rgba(255,255,255,0.6)",
                                }}
                            >
                                About
                            </Button>

                        </Box>

                        {/* TRUST BADGE */}
                        <Box
                            component={motion.div}
                            variants={fadeUp}
                            custom={4}
                            sx={{ mt: 6, display: "flex", gap: 4, opacity: 0.7 }}
                        >
                            <Typography variant="body2">Trusted by startups</Typography>
                            <Typography variant="body2">Enterprise ready</Typography>
                            <Typography variant="body2">Global clients</Typography>
                        </Box>
                    </Grid>

                    {/* RIGHT */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ position: "relative", height: { xs: 420, md: 620 } }}>

                            {/* breathing glow */}
                            <Box
                                component={motion.div}
                                animate={{ opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "radial-gradient(circle at 60% 40%, rgba(70,81,227,0.35), transparent 60%)",
                                    filter: "blur(60px)",
                                }}
                            />

                            {/* main circle */}
                            <Box
                                component={motion.div}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                sx={{
                                    position: "absolute",
                                    width: 620,
                                    height: 620,
                                    right: -140,
                                    borderRadius: "50%",
                                    background:
                                        "linear-gradient(135deg,#4651E3,#3B82F6)",
                                }}
                            />

                            {/* floating image */}
                            <Box
                                component={motion.div}
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                sx={{
                                    position: "absolute",
                                    right: 50,
                                    top: 60,
                                    borderRadius: "30px",
                                    overflow: "hidden",
                                    zIndex: 3,
                                    boxShadow:
                                        "0 60px 120px rgba(0,0,0,0.35)",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={images[index]}
                                    sx={{
                                        width: { xs: 260, md: 420 },
                                        display: "block",
                                    }}
                                />
                            </Box>

                            {/* floating badge */}
                            <Box
                                component={motion.div}
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                sx={{
                                    position: "absolute",
                                    top: 200,
                                    right: 240,
                                    px: 3,
                                    py: 1,
                                    borderRadius: 20,
                                    fontSize: 14,
                                    fontWeight: 600,
                                    backdropFilter: "blur(14px)",
                                    background: "rgba(255,255,255,0.7)",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                                    zIndex: 4,
                                }}
                            >
                                Trusted Digital Engineering

                            </Box>

                            {/* accent orb */}
                            <Box
                                component={motion.div}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 6, repeat: Infinity }}
                                sx={{
                                    position: "absolute",
                                    bottom: 120,
                                    left: 120,
                                    width: 120,
                                    height: 120,
                                    borderRadius: "50%",
                                    background:
                                        "linear-gradient(135deg,#FFD84D,#FFB800)",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
