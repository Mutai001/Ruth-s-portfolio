import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          background: "linear-gradient(to right, #ec4899, #9333ea)",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h2"
          component={motion.h1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          sx={{ fontWeight: "bold", letterSpacing: 2 }}
        >
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" sx={{ mt: 2, maxWidth: "600px" }}>
          Showcasing my skills, projects, and experiences with vibrant design and smooth animations.
        </Typography>
        <Button
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          variant="contained"
          sx={{ mt: 3, background: "#fbbf24", color: "black", fontWeight: "bold" }}
        >
          Explore My Work
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
