import React from "react";
import { Box, Typography, Card, CardContent, Container } from "@mui/material";
import { motion } from "framer-motion";

const certifications = [
  { title: "Digital Marketing Expert", provider: "Google", year: "2023" },
  { title: "Social Media Strategy", provider: "HubSpot Academy", year: "2022" },
  { title: "Content Marketing Certification", provider: "Coursera", year: "2021" },
];

const Certifications: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #ec4899, #9333ea)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        padding: 4,
      }}
    >
      {/* Title */}
      <Typography
        variant="h3"
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ fontWeight: "bold", letterSpacing: 2, mb: 3 }}
      >
        Certifications
      </Typography>

      <Container maxWidth="md">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              marginBottom: 2,
              borderRadius: "8px",
              backdropFilter: "blur(10px)",
              padding: 2,
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                {cert.title}
              </Typography>
              <Typography variant="subtitle1" color="yellow">
                {cert.provider} - {cert.year}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default Certifications;
