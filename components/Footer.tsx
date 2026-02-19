"use client";

import { Box, Typography, Container, TextField, Button } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ background: "#0f172a", color: "#cbd5e1", pt: 12, pb: 6 }}>
            <Container maxWidth="lg">

                {/* TOP GRID */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        justifyContent: "space-between",
                        mb: 10
                    }}
                >

                    {/* LOGO + ABOUT */}
                    <Box sx={{ maxWidth: 320 }}>
                        <img src="/solohitech-Logo.png" style={{ height: 48 }} />

                        <Typography sx={{ mt: 3, lineHeight: 1.8 }}>
                            We build scalable digital solutions that help businesses innovate,
                            automate processes, and grow faster using modern technology and
                            proven engineering strategies.
                        </Typography>
                    </Box>

                    {/* QUICK LINKS */}
                    <FooterCol
                        title="Quick Links"
                        items={[
                            "Home",
                            "Product",
                            "Careers Hiring",
                            "Pricing"
                        ]}
                    />

                    {/* SERVICES */}
                    <FooterCol
                        title="Services"
                        items={[
                            "Web & Application Development",
                            "Cybersecurity Solutions",
                            "DevOps & Cloud Infrastructure",
                            "UI/UX Engineering",
                            "Digital Marketing",
                            "Web Analytics & Optimization"
                        ]}
                    />


                    {/* COMPANY */}
                    <FooterCol
                        title="Company"
                        items={[
                            "Press Media",
                            "Our Blog",
                            "Contact Us"
                        ]}
                    />

                    {/* NEWSLETTER */}
                    <Box sx={{ minWidth: 240 }}>
                        <Typography fontWeight={700} mb={2}>
                            Newsletter
                        </Typography>

                        <Typography fontSize={14} mb={3}>
                            Subscribe to receive future updates
                        </Typography>

                        <Box sx={{ display: "flex", gap: 1 }}>
                            <TextField
                                size="small"
                                placeholder="Email address"
                                sx={{
                                    input: { color: "white" },
                                    fieldset: { borderColor: "#334155" }
                                }}
                            />

                            <Button
                                variant="contained"
                                sx={{
                                    background: "linear-gradient(135deg,#4651E3,#7C8BFF)",
                                    textTransform: "none",
                                    fontWeight: 600
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Box>

                </Box>

                {/* BOTTOM BAR */}
                <Box
                    sx={{
                        borderTop: "1px solid #1e293b",
                        pt: 4,
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 2
                    }}
                >
                    <Typography fontSize={14}>
                        © {new Date().getFullYear()} Solohitech. All rights reserved.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 4, fontSize: 14 }}>
                        <span>English</span>
                        <span>Privacy Policy</span>
                        <span>Support</span>
                    </Box>
                </Box>

            </Container>
        </Box>
    );
}


/* REUSABLE COLUMN */
function FooterCol({ title, items }: any) {
    return (
        <Box>
            <Typography fontWeight={700} mb={2}>
                {title}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {items.map((item: string, i: number) => (
                    <Typography
                        key={i}
                        sx={{
                            fontSize: 14,
                            cursor: "pointer",
                            transition: "0.2s",
                            "&:hover": { color: "white" }
                        }}
                    >
                        {item}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
}
