"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const plans = [
  {
    name: "Starter",
    price: "$199",
    desc: "Perfect for startups and small businesses getting started.",
    features: [
      "Basic Website",
      "Responsive Design",
      "SEO Optimization",
      "Email Support",
      "1 Month Support"
    ]
  },
  {
    name: "Professional",
    price: "$499",
    highlight: true,
    desc: "Best for growing businesses that need powerful solutions.",
    features: [
      "Full Website or Web App",
      "Premium UI/UX Design",
      "Performance Optimization",
      "Priority Support",
      "3 Months Support",
      "Analytics Integration"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Advanced solutions tailored for large organizations.",
    features: [
      "Custom Software System",
      "Cloud Infrastructure",
      "Security Integration",
      "Dedicated Team",
      "Unlimited Revisions",
      "12 Months Support"
    ]
  }
];

export default function PricingSection() {
  return (
    <Box sx={{ py: { xs: 10, md: 16 }, background: "#ffffff" }}>
      <Container maxWidth="lg">

        {/* HEADER */}
        <Box textAlign="center" mb={10}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
            Flexible Pricing Plans
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              mx: "auto",
              color: "#6b7280",
              lineHeight: 1.8
            }}
          >
            Choose a plan that fits your business needs. Our pricing is designed
            to scale with your growth and deliver maximum value.
          </Typography>
        </Box>

        {/* PLANS */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {plans.map((plan, i) => (
            <Box
              key={i}
              sx={{
                flex: "1 1 300px",
                maxWidth: 360,
                p: 5,
                borderRadius: "26px",
                background: plan.highlight
                  ? "linear-gradient(180deg,#4651E3,#7C8BFF)"
                  : "white",
                color: plan.highlight ? "white" : "inherit",
                border: plan.highlight
                  ? "none"
                  : "1px solid #eef2ff",
                transition: "0.35s",

                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 30px 70px rgba(0,0,0,0.12)"
                }
              }}
            >
              {/* PLAN NAME */}
              <Typography sx={{ fontWeight: 700, mb: 1 }}>
                {plan.name}
              </Typography>

              {/* PRICE */}
              <Typography
                sx={{
                  fontSize: 40,
                  fontWeight: 800,
                  mb: 1
                }}
              >
                {plan.price}
              </Typography>

              {/* DESC */}
              <Typography
                sx={{
                  opacity: 0.85,
                  mb: 4
                }}
              >
                {plan.desc}
              </Typography>

              {/* FEATURES */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 5 }}>
                {plan.features.map((f, index) => (
                  <Box key={index} sx={{ display: "flex", gap: 1.5 }}>
                    <CheckIcon sx={{ fontSize: 18 }} />
                    <Typography sx={{ fontSize: 15 }}>{f}</Typography>
                  </Box>
                ))}
              </Box>

              {/* BUTTON */}
              <Button
                fullWidth
                sx={{
                  py: 1.6,
                  borderRadius: "14px",
                  fontWeight: 700,
                  textTransform: "none",
                  background: plan.highlight ? "white" : "#4651E3",
                  color: plan.highlight ? "#4651E3" : "white",
                  "&:hover": {
                    background: plan.highlight ? "#f3f4ff" : "#3643d9"
                  }
                }}
              >
                Get Started
              </Button>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}
