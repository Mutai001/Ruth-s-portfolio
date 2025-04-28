import { motion } from 'framer-motion';
import { Button, Typography, Container, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import WorkIcon from '@mui/icons-material/Work';
import HomePageImage from '../images/anime heros (1).jpg'; // Replace with your image path

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50,
        duration: 0.8
      }
    }
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const scaleAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const glowingBorder = {
    boxShadow: [
      "0 0 10px rgba(179, 157, 219, 0.5)",
      "0 0 20px rgba(179, 157, 219, 0.7)",
      "0 0 10px rgba(179, 157, 219, 0.5)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <Box 
      sx={{ 
        background: `linear-gradient(135deg, #121212 0%, #2d1b4c 50%, #1e1e1e 100%)`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Animated background elements */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 0.2, x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [0.2, 0.4, 0.2],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              position: 'absolute',
              width: 100 + Math.random() * 150,
              height: 100 + Math.random() * 150,
              borderRadius: '50%',
              background: i % 2 === 0 
                ? `rgba(103, 58, 183, 0.05)`
                : `rgba(245, 0, 87, 0.05)`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </Box>
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          {/* Text content */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Typography 
                  variant="overline" 
                  component="div" 
                  sx={{ 
                    color: '#f50057',
                    letterSpacing: 4,
                    fontWeight: 600 
                  }}
                >
                  Social Media Manager
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography 
                  variant={isMobile ? "h3" : "h1"} 
                  component="h1" 
                  sx={{ 
                    color: '#ffffff',
                    fontWeight: 800,
                    mb: 1,
                    background: 'linear-gradient(to right, #ffffff, #b39ddb)', 
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Ruth Kimeli
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography 
                  variant={isMobile ? "h5" : "h4"} 
                  sx={{ 
                    color: '#e0e0e0',
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.4
                  }}
                >
                  Driving Brands Forward Through <Box component="span" sx={{ color: '#ff4081', fontWeight: 600 }}>
                    Powerful Social Media.
                  </Box>
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4 }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="contained" 
                      size="large"
                      startIcon={<WorkIcon />}
                      sx={{ 
                        background: 'linear-gradient(45deg, #673ab7 30%, #9c27b0 90%)',
                        color: 'white',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem'
                      }}
                    >
                      Hire Me
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outlined" 
                      size="large"
                      startIcon={<DownloadIcon />}
                      sx={{ 
                        borderColor: '#b39ddb',
                        color: '#b39ddb',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': {
                          borderColor: '#f50057',
                          color: '#f50057',
                        }
                      }}
                    >
                      Download CV
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
          
          {/* Profile image */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              style={{ 
                position: 'relative',
                width: isMobile ? '280px' : isMedium ? '320px' : '380px',
                height: isMobile ? '280px' : isMedium ? '320px' : '380px'
              }}
            >
              {/* Background shapes */}
              <motion.div 
                animate={floatingAnimation} 
                style={{ 
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  background: 'rgba(103, 58, 183, 0.15)',
                  top: '10%',
                  left: '5%',
                  zIndex: 1
                }}
              />
              
              <motion.div 
                animate={scaleAnimation} 
                style={{ 
                  position: 'absolute',
                  width: '90%',
                  height: '90%',
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  background: 'rgba(245, 0, 87, 0.1)',
                  top: '5%',
                  left: '10%',
                  zIndex: 1
                }}
              />
              
              {/* Placeholder for profile photo */}
              <motion.div
                animate={glowingBorder}
                style={{
                  position: 'relative',
                  width: '85%',
                  height: '85%',
                  margin: '0 auto',
                  borderRadius: '60% 40% 50% 50% / 50% 40% 60% 50%',
                  overflow: 'hidden',
                  zIndex: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <img 
                  src={HomePageImage} 
                  alt="Ruth Kimeli" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </motion.div>
              
              {/* Floating elements */}
              {['#f50057', '#673ab7', '#2196f3'].map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: [0, 10, 0, -10, 0],
                    y: [0, -10, 0, 10, 0]
                  }}
                  transition={{
                    delay: 1 + (index * 0.2),
                    x: {
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    y: {
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                  style={{
                    position: 'absolute',
                    width: 20 + (index * 10),
                    height: 20 + (index * 10),
                    borderRadius: '50%',
                    background: color,
                    boxShadow: `0 0 15px ${color}`,
                    top: `${20 + (index * 30)}%`,
                    left: index % 2 === 0 ? '0%' : '90%',
                    zIndex: 3
                  }}
                />
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}