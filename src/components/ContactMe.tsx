// Project: social-media-manager-website
import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

const ContactMe: React.FC = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to left, #ec4899, #9333ea)",
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
      <Typography
        variant="h2"
        component={motion.div}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ fontWeight: "bold", letterSpacing: 2 }}
      >
        Contact Me
      </Typography>

      <Typography
        variant="h5"
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{ mt: 2, maxWidth: "800px" }}
      >
        Let's collaborate! Reach out to me for any inquiries or social media management needs.
      </Typography>

      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box
          component={motion.form}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            background: "rgba(255, 255, 255, 0.1)",
            padding: 4,
            borderRadius: 4,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
          <Button
            component={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              mt: 2,
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
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;
