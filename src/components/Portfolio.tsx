// Portfolio component 
import React from "react";
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Brand Growth Strategy",
    description: "Developed data-driven strategies to increase social media engagement by 300%.",
    image: "/src/assets/brandgrowth.jpg",
  },
  {
    title: "Content Marketing Campaigns",
    description: "Created viral content strategies that boosted audience reach and customer retention.",
    image: "/src/assets/content marketing.jpg",
  },
  {
    title: "Social Media Advertising",
    description: "Managed ad campaigns across Facebook, Instagram, and LinkedIn, delivering high ROI.",
    image: "/src/assets/social meadia.jpg",
  },
];

const Portfolio: React.FC = () => {
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
        My Work as a Social Media Manager
      </Typography>

      <Typography
        variant="h5"
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{ mt: 2, maxWidth: "800px" }}
      >
        Showcasing innovative campaigns and impactful digital strategies that drive engagement and brand growth.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 4, maxWidth: "1000px" }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{ background: "rgba(255, 255, 255, 0.1)", borderRadius: 2, overflow: "hidden" }}
            >
              <CardMedia component="img" height="200" image={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>{project.title}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

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
        Let's Collaborate
      </Button>
    </Box>
  );
};

export default Portfolio;
