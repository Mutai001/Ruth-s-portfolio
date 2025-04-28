import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Typography, Container, Box, Grid, Card, CardMedia, CardContent, useMediaQuery, useTheme, Divider } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';

export default function WorkHighlightsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50,
        damping: 15
      }
    }
  };

  // Sample projects data
  const projects = [
    {
      id: 1,
      image: "/api/placeholder/600/400",
      result: "Increased engagement by 45% for Luxe Beauty within 3 months",
      icon: <TrendingUpIcon sx={{ color: '#f50057' }} />,
      color: "rgba(245, 0, 87, 0.8)"
    },
    {
      id: 2,
      image: "/api/placeholder/600/400",
      result: "Created a viral post that reached 1.2M users organically",
      icon: <VisibilityIcon sx={{ color: '#673ab7' }} />,
      color: "rgba(103, 58, 183, 0.8)"
    },
    {
      id: 3,
      image: "/api/placeholder/600/400",
      result: "Generated 15K+ new followers for TechStart through targeted campaigns",
      icon: <PeopleIcon sx={{ color: '#2196f3' }} />,
      color: "rgba(33, 150, 243, 0.8)"
    },
    {
      id: 4,
      image: "/api/placeholder/600/400",
      result: "Achieved 300% higher engagement rate than industry average for FitLife",
      icon: <FavoriteIcon sx={{ color: '#ff4081' }} />,
      color: "rgba(255, 64, 129, 0.8)"
    }
  ];

  // Animated background elements
  const backgroundElements = [
    {
      color: "rgba(103, 58, 183, 0.03)",
      position: { top: "10%", right: "5%" },
      size: "350px",
      animation: {
        rotate: [0, 360],
        transition: { duration: 45, repeat: Infinity, ease: "linear" }
      }
    },
    {
      color: "rgba(245, 0, 87, 0.03)",
      position: { bottom: "15%", left: "10%" },
      size: "250px",
      animation: {
        rotate: [360, 0],
        transition: { duration: 40, repeat: Infinity, ease: "linear" }
      }
    }
  ];

  return (
    <Box 
      sx={{ 
        background: "#1e1e1e",
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
      ref={ref}
    >
      {/* Animated background shapes */}
      {backgroundElements.map((element, index) => (
        <motion.div
          key={index}
          animate={element.animation}
          style={{
            position: 'absolute',
            width: element.size,
            height: element.size,
            borderRadius: '20%',
            background: element.color,
            ...element.position,
            filter: 'blur(60px)',
            zIndex: 1
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 8 }}>
              <Divider sx={{ 
                flexGrow: 0.05, 
                borderColor: '#f50057',
                borderWidth: 2,
                borderRadius: 1
              }} />
              <Typography 
                variant={isMobile ? "h4" : "h3"} 
                component="h2"
                sx={{ 
                  color: '#ffffff',
                  fontWeight: 700,
                  mx: 2,
                  textAlign: 'center'
                }}
              >
                Selected Work Highlights
              </Typography>
              <Divider sx={{ 
                flexGrow: 0.95, 
                borderColor: '#f50057',
                opacity: 0.5,
                borderWidth: 2, 
                borderRadius: 1
              }} />
            </Box>
          </motion.div>

          {/* Work Grid */}
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={6} key={project.id}>
                <motion.div
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card
                    sx={{ 
                      bgcolor: 'rgba(18, 18, 18, 0.7)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      height: '100%',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        boxShadow: `0 15px 40px rgba(${index % 2 === 0 ? '245, 0, 87' : '103, 58, 183'}, 0.2)`,
                      }
                    }}
                  >
                    {/* Project Image with Overlay */}
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="230"
                        image={project.image}
                        alt={`Project ${project.id}`}
                        sx={{ 
                          objectFit: 'cover'
                        }}
                      />
                      
                      {/* Animated overlay on hover */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: `linear-gradient(to top, ${project.color}, transparent)`,
                          opacity: 0.7,
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </Box>
                    
                    {/* Result Text */}
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box 
                          sx={{ 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            background: 'rgba(45, 27, 76, 0.5)',
                            backdropFilter: 'blur(5px)'
                          }}
                        >
                          {project.icon}
                        </Box>
                        <Typography 
                          variant="body1" 
                          component="p"
                          sx={{ 
                            color: '#ffffff',
                            fontWeight: 500,
                            fontSize: '1rem',
                            lineHeight: 1.5
                          }}
                        >
                          {project.result}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          {/* Bottom Accent Element */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { 
              scale: 1, 
              opacity: [0, 0.8, 0.4],
              transition: { 
                delay: 1,
                duration: 1.5,
                ease: "easeOut"
              }
            } : { scale: 0, opacity: 0 }}
          >
            <Box 
              sx={{ 
                width: '100px', 
                height: '4px', 
                borderRadius: '2px',
                background: 'linear-gradient(90deg, #f50057, #673ab7)',
                margin: '60px auto 0',
                opacity: 0.8
              }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}