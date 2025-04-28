import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Typography, Container, Box, Grid, Paper, Avatar, useMediaQuery, useTheme, Divider } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function TestimonialsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50,
        damping: 12
      }
    }
  };

  const testimonials = [
    {
      id: 1,
      quote: "Working with Ruth transformed our Instagram presence. Our followers doubled in just 6 months, and engagement rates increased by 78%. She truly understands how to build community.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechStart",
      avatar: "/api/placeholder/80/80",
      color: "#673ab7"
    },
    {
      id: 2,
      quote: "Ruth's strategic approach to our social campaigns delivered impressive ROI. Her data-driven content creation not only looked beautiful but converted followers into customers.",
      author: "Michael Chen",
      position: "CEO, Luxe Beauty",
      avatar: "/api/placeholder/80/80",
      color: "#f50057"
    }
  ];

  // Background elements
  const backgroundElements = [
    {
      shape: "circle",
      color: "rgba(103, 58, 183, 0.04)",
      size: "300px",
      position: { top: "10%", right: "-5%" },
      animation: {
        y: [0, -30, 0],
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
      }
    },
    {
      shape: "circle",
      color: "rgba(245, 0, 87, 0.04)",
      size: "250px",
      position: { bottom: "15%", left: "-10%" },
      animation: {
        y: [0, 20, 0],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }
    }
  ];

  return (
    <Box 
      sx={{ 
        background: "#121212",
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
      ref={ref}
    >
      {/* Animated background elements */}
      {backgroundElements.map((element, index) => (
        <motion.div
          key={index}
          animate={element.animation}
          style={{
            position: 'absolute',
            width: element.size,
            height: element.size,
            borderRadius: element.shape === "circle" ? "50%" : "20%",
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
                borderColor: '#673ab7',
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
                Client Testimonials
              </Typography>
              <Divider sx={{ 
                flexGrow: 0.95, 
                borderColor: '#673ab7',
                opacity: 0.5,
                borderWidth: 2, 
                borderRadius: 1
              }} />
            </Box>
          </motion.div>

          {/* Testimonials Grid */}
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={testimonial.id}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{ 
                      background: 'rgba(45, 27, 76, 0.25)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      height: '100%',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                      position: 'relative',
                      p: { xs: 3, md: 4 }
                    }}
                  >
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                    >
                      <FormatQuoteIcon 
                        sx={{ 
                          position: 'absolute',
                          top: '15px',
                          right: '20px',
                          fontSize: '3rem',
                          color: testimonial.color,
                          opacity: 0.2
                        }} 
                      />
                    </motion.div>
                    
                    {/* Quote Text */}
                    <Box sx={{ mb: 4, position: 'relative' }}>
                      <Typography 
                        variant="body1" 
                        component="p"
                        sx={{ 
                          color: '#ffffff',
                          fontSize: '1.1rem',
                          lineHeight: 1.6,
                          fontStyle: 'italic',
                          pr: 4
                        }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                    </Box>
                    
                    {/* Author Info */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: `0 0 15px ${testimonial.color}`
                        }}
                      >
                        <Avatar 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          sx={{ 
                            width: 60, 
                            height: 60,
                            border: `2px solid ${testimonial.color}`
                          }}
                        />
                      </motion.div>
                      <Box sx={{ ml: 2 }}>
                        <Typography 
                          variant="subtitle1" 
                          component="h3"
                          sx={{ 
                            color: '#ffffff',
                            fontWeight: 600
                          }}
                        >
                          {testimonial.author}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          component="p"
                          sx={{ 
                            color: testimonial.id % 2 === 0 ? '#ff4081' : '#b39ddb',
                            fontWeight: 500
                          }}
                        >
                          {testimonial.position}
                        </Typography>
                      </Box>
                    </Box>
                    
                    {/* Accent Corner */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '50px',
                        height: '50px',
                        background: `linear-gradient(135deg, ${testimonial.color} 0%, transparent 65%)`
                      }}
                    />
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          
          {/* Accent Element */}
          <motion.div
            variants={itemVariants}
            style={{ marginTop: '60px', textAlign: 'center' }}
          >
            <Box
              sx={{ 
                display: 'inline-flex',
                gap: 1
              }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    width: 8 + (i * 4),
                    height: 8 + (i * 4),
                    borderRadius: '50%',
                    background: i % 2 === 0 ? '#673ab7' : '#f50057'
                  }}
                />
              ))}
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}