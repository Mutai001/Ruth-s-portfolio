import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AutoDidactIcon from '@mui/icons-material/Psychology';

export default function Education() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5
      }
    }
  };
  
  return (
    <Box
      id="education"
      ref={containerRef}
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #121212 0%, #2d1b4c 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 0, 87, 0.1) 0%, transparent 70%)',
          zIndex: 0
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Left Column - Education Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  mb: 4,
                  background: 'linear-gradient(to right, #ffffff, #b39ddb)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textTransform: 'uppercase'
                }}
              >
                EDUCATION
              </Typography>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* University Education */}
              <motion.div variants={itemVariants}>
                <Box 
                  sx={{
                    mb: 4,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: -20,
                      top: 10,
                      height: '85%',
                      width: 4,
                      background: 'linear-gradient(to bottom, #673ab7, #f50057)',
                      borderRadius: 2
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <SchoolIcon 
                      sx={{ 
                        mr: 1, 
                        color: '#673ab7',
                        fontSize: '1.8rem'
                      }} 
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#e0e0e0',
                        textTransform: 'uppercase',
                        fontSize: { xs: '1.3rem', md: '1.5rem' }
                      }}
                    >
                      KCA UNIVERSITY
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#e0e0e0',
                      fontWeight: 500,
                      ml: '2.3rem',
                      fontSize: { xs: '1rem', md: '1.1rem' }
                    }}
                  >
                    Diploma in Journalism and Digital Media
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#f50057',
                      fontWeight: 500,
                      ml: '2.3rem',
                      mb: 2
                    }}
                  >
                    2021-2023
                  </Typography>
                </Box>
              </motion.div>
              
              {/* Self-taught Education */}
              <motion.div variants={itemVariants}>
                <Box 
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: -20,
                      top: 10,
                      height: '85%',
                      width: 4,
                      background: 'linear-gradient(to bottom, #673ab7, #f50057)',
                      borderRadius: 2
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AutoDidactIcon 
                      sx={{ 
                        mr: 1, 
                        color: '#673ab7',
                        fontSize: '1.8rem'
                      }} 
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#e0e0e0',
                        textTransform: 'uppercase',
                        fontSize: { xs: '1.3rem', md: '1.5rem' }
                      }}
                    >
                      SOCIAL MEDIA MANAGEMENT
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#e0e0e0',
                      fontWeight: 500,
                      ml: '2.3rem'
                    }}
                  >
                    Self-taught 2022-2023
                  </Typography>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
          
          {/* Right Column - Images */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Grid container spacing={2}>
                {/* Main graduation image */}
                <Grid item xs={12}>
                  <Paper 
                    elevation={6}
                    sx={{ 
                      borderRadius: 2,
                      overflow: 'hidden',
                      height: { xs: 300, md: 400 },
                      mb: 2,
                      background: '#1a1a1a',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    <img 
                      src="/api/placeholder/400/400" 
                      alt="Graduation at KCA University" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }} 
                    />
                  </Paper>
                </Grid>
                
                {/* Two smaller images */}
                <Grid item xs={6}>
                  <Paper 
                    elevation={6}
                    sx={{ 
                      borderRadius: 2,
                      overflow: 'hidden',
                      height: { xs: 150, md: 180 },
                      background: '#1a1a1a',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    <img 
                      src="/api/placeholder/200/180" 
                      alt="Student studying" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        filter: 'grayscale(100%)'
                      }} 
                    />
                  </Paper>
                </Grid>
                
                <Grid item xs={6}>
                  <Paper 
                    elevation={6}
                    sx={{ 
                      borderRadius: 2,
                      overflow: 'hidden',
                      height: { xs: 150, md: 180 },
                      background: '#1a1a1a',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    <img 
                      src="/api/placeholder/200/180" 
                      alt="Graduation cap" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        filter: 'grayscale(100%)'
                      }} 
                    />
                  </Paper>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}