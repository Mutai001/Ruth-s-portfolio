import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Typography, Container, Box, Grid, useMediaQuery, useTheme, Divider, Avatar } from '@mui/material';
import { useInView } from 'react-intersection-observer';

export default function Portfolio() {
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
        stiffness: 60,
        damping: 20
      }
    }
  };

  const glowAnimation = {
    boxShadow: [
      "0 0 5px rgba(245, 0, 87, 0.3)",
      "0 0 15px rgba(245, 0, 87, 0.5)",
      "0 0 5px rgba(245, 0, 87, 0.3)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingCircleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { 
      opacity: 0.7, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const backgroundShapes = [
    {
      color: "rgba(103, 58, 183, 0.08)",
      size: "200px",
      position: { top: "-5%", right: "10%" },
      animation: {
        y: [0, -20, 0],
        rotate: [0, 10, 0],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      }
    },
    {
      color: "rgba(245, 0, 87, 0.05)",
      size: "150px",
      position: { bottom: "10%", left: "5%" },
      animation: {
        y: [0, 15, 0],
        rotate: [0, -5, 0],
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }
    },
    {
      color: "rgba(33, 150, 243, 0.08)",
      size: "100px",
      position: { top: "30%", left: "15%" },
      animation: {
        scale: [1, 1.1, 1],
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
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
      {/* Background animated shapes */}
      {backgroundShapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1, ...shape.animation } : { opacity: 0 }}
          style={{
            position: 'absolute',
            width: shape.size,
            height: shape.size,
            borderRadius: '50%',
            background: shape.color,
            ...shape.position,
            filter: 'blur(40px)',
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
          <Grid container spacing={4} alignItems="center" justifyContent="space-between">
            {/* Section Title */}
            <Grid item xs={12}>
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
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
                      position: 'relative',
                      display: 'inline-block'
                    }}
                  >
                    About Me
                    <motion.div
                      animate={{
                        width: ['0%', '95%', '0%'],
                        x: ['0%', '5%', '100%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      style={{
                        position: 'absolute',
                        height: '8px',
                        background: 'linear-gradient(90deg, #673ab7, #f50057)',
                        bottom: '-4px',
                        left: '0',
                        borderRadius: '4px'
                      }}
                    />
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
            </Grid>

            {/* Profile picture */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div variants={itemVariants}>
                <Box sx={{ position: 'relative' }}>
                  {/* Decorative circles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      variants={floatingCircleVariants}
                      initial="initial"
                      animate="animate"
                      custom={i}
                      style={{
                        position: 'absolute',
                        width: 100 + i * 30,
                        height: 100 + i * 30,
                        borderRadius: '50%',
                        border: `2px solid ${i % 2 === 0 ? '#673ab7' : '#f50057'}`,
                        opacity: 0.2,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1
                      }}
                    />
                  ))}
                  
                  {/* Profile image */}
                  <motion.div
                    animate={glowAnimation}
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    <Avatar
                      src="/api/placeholder/300/300"
                      alt="Ruth Kimeli"
                      sx={{
                        width: { xs: 200, md: 300 },
                        height: { xs: 200, md: 300 },
                        border: '4px solid #2d1b4c',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                      }}
                    />
                  </motion.div>
                  
                  {/* Animated accent elements */}
                  {['#f50057', '#673ab7', '#2196f3'].map((color, index) => (
                    <motion.div
                      key={`accent-${index}`}
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: 1,
                        x: [(index-1)*20, (index-1)*20 + 10, (index-1)*20],
                        y: [-20, -30, -20]
                      }}
                      transition={{
                        delay: 0.5 + (index * 0.2),
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        position: 'absolute',
                        width: 15,
                        height: 15,
                        borderRadius: '50%',
                        background: color,
                        top: '70%',
                        left: `${40 + (index * 15)}%`,
                        boxShadow: `0 0 10px ${color}`,
                        zIndex: 3
                      }}
                    />
                  ))}
                </Box>
              </motion.div>
            </Grid>
            
            {/* About Me Content */}
            <Grid item xs={12} md={8}>
              <Box sx={{ 
                backgroundColor: 'rgba(45, 27, 76, 0.3)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                p: { xs: 3, md: 5 },
                border: '1px solid rgba(103, 58, 183, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}>
                <motion.div variants={itemVariants}>
                  <Typography variant="h5" component="h3" sx={{ 
                    color: '#f50057',
                    fontWeight: 700,
                    mb: 2
                  }}>
                    Social Media Strategist & Community Builder
                  </Typography>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Typography variant="body1" sx={{ 
                    color: '#e0e0e0',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    mb: 3
                  }}>
                    I'm a social media strategist with 3+ years of experience helping brands grow through creative storytelling, data-driven campaigns, and meaningful community building.
                  </Typography>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Typography variant="body1" sx={{ 
                    color: '#b39ddb',
                    lineHeight: 1.8,
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}>
                    My approach combines analytical thinking with creative execution, transforming social platforms into powerful channels that drive engagement, build brand loyalty, and generate measurable results for businesses of all sizes.
                  </Typography>
                </motion.div>
                
                {/* Skills pills */}
                <motion.div 
                  variants={itemVariants}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginTop: '24px'
                  }}
                >
                  {['Strategy', 'Content Creation', 'Analytics', 'Community Management', 'Campaign Planning'].map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -5 }}
                      style={{
                        background: 'linear-gradient(45deg, rgba(103, 58, 183, 0.1), rgba(245, 0, 87, 0.1))',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        color: '#ffffff',
                        border: '1px solid rgba(179, 157, 219, 0.3)',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        backdropFilter: 'blur(5px)'
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}