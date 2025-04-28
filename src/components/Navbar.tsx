import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  Button, 
  IconButton, 
  useMediaQuery, 
  useTheme, 
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Navigation items
  const navItems = [
    { title: 'About Me', id: 'about' },
    { title: 'Selected Work', id: 'work' },
    { title: 'Testimonials', id: 'testimonials' },
    { title: 'Contact', id: 'contact' }
  ];

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, delay: 0.2 }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3 + (i * 0.1)
      }
    })
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Custom animated logo component
  const AnimatedLogo = () => (
    <motion.div
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Animated logo background */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: 40,
            height: 40,
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'linear-gradient(45deg, #673ab7 30%, #f50057 90%)',
            opacity: 0.8,
            zIndex: 0,
          }}
        />
        
        {/* Logo text */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: 800,
            fontSize: isMobile ? '1.2rem' : '1.5rem',
            ml: 5,
            zIndex: 1,
            background: 'linear-gradient(to right, #ffffff, #b39ddb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          RK
        </Typography>
      </Box>
    </motion.div>
  );

  // Header component
  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 0} 
      sx={{
        background: scrolled 
          ? 'rgba(18, 18, 18, 0.9)' 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        py: scrolled ? 0.5 : 1.5
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <AnimatedLogo />
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    color="inherit"
                    sx={{
                      mx: 1,
                      color: '#e0e0e0',
                      position: 'relative',
                      fontWeight: 500,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -2,
                        left: '50%',
                        width: '0%',
                        height: '2px',
                        backgroundColor: '#f50057',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)'
                      },
                      '&:hover::after': {
                        width: '80%'
                      }
                    }}
                    href={`#${item.id}`}
                  >
                    {item.title}
                  </Button>
                </motion.div>
              ))}
              
              <motion.div
                custom={navItems.length}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="contained" 
                  startIcon={<EmailIcon />}
                  sx={{ 
                    ml: 3,
                    background: 'linear-gradient(45deg, #673ab7 30%, #9c27b0 90%)',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: 'none'
                  }}
                  href="#contact"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </Box>
          )}
          
          {/* Mobile Menu Toggle */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <IconButton 
                color="inherit" 
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: '#e0e0e0',
                  background: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)'
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            </motion.div>
          )}
        </Toolbar>
      </Container>
      
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: '75%',
            maxWidth: 300,
            background: 'linear-gradient(135deg, #121212 0%, #2d1b4c 100%)',
            boxSizing: 'border-box',
            p: 2
          }
        }}
      >
        <Box sx={{ textAlign: 'right', mb: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#e0e0e0' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h5"
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(to right, #ffffff, #b39ddb)', 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Ruth Kimeli
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#f50057',
              fontWeight: 500
            }}
          >
            Social Media Manager
          </Typography>
        </Box>
        
        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.1)', mb: 2 }} />
        
        <List>
          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.3 + (index * 0.1) }
                }}
                exit={{ opacity: 0, x: -20 }}
              >
                <ListItem 
                  onClick={handleDrawerToggle}
                  component="a"
                  href={`#${item.id}`}
                  sx={{
                    mb: 1,
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  <ListItemText 
                    primary={item.title} 
                    sx={{ 
                      color: '#e0e0e0',
                      '& .MuiTypography-root': {
                        fontWeight: 500
                      }
                    }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </List>
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button 
            variant="contained" 
            fullWidth
            startIcon={<EmailIcon />}
            sx={{ 
              background: 'linear-gradient(45deg, #673ab7 30%, #9c27b0 90%)',
              color: 'white',
              fontWeight: 600,
              borderRadius: 2,
              py: 1.2,
              textTransform: 'none'
            }}
            href="#contact"
            onClick={handleDrawerToggle}
          >
            Get in Touch
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}