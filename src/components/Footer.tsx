//Footer
import React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        background: "linear-gradient(to right, #ec4899, #9333ea)",
        color: "white",
        padding: 4,
        textAlign: "center",
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Footer Title */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Connect with Me
        </Typography>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
          {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
            <IconButton
              key={index}
              component={motion.a}
              href="#"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              sx={{ color: "white" }}
            >
              <Icon fontSize="large" />
            </IconButton>
          ))}
        </Box>

        {/* Copyright */}
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          &copy; {new Date().getFullYear()} Ruth - Social Media Manager. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
