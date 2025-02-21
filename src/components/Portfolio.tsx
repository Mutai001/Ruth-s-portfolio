import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
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
        variant="h2"
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ fontWeight: "bold", letterSpacing: 2 }}
      >
        Ruth - Social Media Manager
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h5"
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{ mt: 2, maxWidth: "800px" }}
      >
        Elevating brands with powerful digital strategies, creative content, and impactful online presence.
      </Typography>

      {/* Call to Action */}
      <Button
        component={motion.a}
        href="#contact"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        sx={{
          mt: 4,
          padding: "12px 24px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#fbbf24",
          borderRadius: "8px",
          textDecoration: "none",
          "&:hover": { backgroundColor: "#f59e0b" },
        }}
      >
        Let's Connect
      </Button>
    </Box>
  );
};

export default Portfolio;
