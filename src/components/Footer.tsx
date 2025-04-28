import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  IconButton, 
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';

// Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Handle scroll behavior for "scroll to top" button
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      if (isScrolled !== showScrollTop) {
        setShowScrollTop(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll settings
  const scrollSettings = {
    smooth: true,
    duration: 500,
    spy: false,
    offset: -70
  };

  // Footer links - updated to match Navbar and App components
  const footerLinks = [
    { 
      title: 'Navigation', 
      items: [
        { label: 'About Me', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Education', id: 'education' },
        { label: 'Experience', id: 'work' },
        { label: 'Testimonials', id: 'testimonials' },
        { label: 'Contact', id: 'contact' }
      ]
    },
    { 
      title: 'Services', 
      items: [
        { label: 'Social Media Strategy', id: 'skills' },
        { label: 'Content Creation', id: 'skills' },
        { label: 'Community Management', id: 'skills' },
        { label: 'Analytics & Reporting', id: 'skills' }
      ]
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #121212 0%, #2d1b4c 100%)',
        pt: 8,
        pb: 4,
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Intro */}
          <Grid item xs={12} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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
                    width: 40,
                    height: 40,
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    background: 'linear-gradient(45deg, #673ab7 30%, #f50057 90%)',
                    opacity: 0.8,
                  }}
                />
                
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 800,
                    ml: 5,
                    background: 'linear-gradient(to right, #ffffff, #b39ddb)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  RK
                </Typography>
              </Box>
              
              <Typography variant="body1" sx={{ color: '#e0e0e0', mb: 3, maxWidth: 300 }}>
                Crafting strategic social media experiences that connect brands with their audiences.
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {[LinkedInIcon, TwitterIcon, InstagramIcon, EmailIcon].map((Icon, index) => (
                      <IconButton 
                        key={index}
                        sx={{ 
                          color: '#e0e0e0',
                          background: 'rgba(255, 255, 255, 0.1)',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.2)',
                            transform: 'translateY(-3px)',
                            transition: 'all 0.2s ease-in-out'
                          }
                        }}
                      >
                        <Icon />
                      </IconButton>
                    ))}
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <Grid item xs={6} md={2} key={sectionIndex}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={sectionIndex + 1}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#f50057', 
                    mb: 2,
                    fontWeight: 600,
                    fontSize: isMobile ? '1rem' : '1.1rem'
                  }}
                >
                  {section.title}
                </Typography>
                
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {section.items.map((item, itemIndex) => (
                    <Box 
                      component="li" 
                      key={itemIndex}
                      sx={{ mb: 1.5 }}
                    >
                      <Link
                        to={item.id}
                        {...scrollSettings}
                        style={{
                          color: '#e0e0e0',
                          textDecoration: 'none',
                          position: 'relative',
                          cursor: 'pointer',
                          display: 'inline-block'
                        }}
                        className="footer-link"
                      >
                        <Box
                          sx={{
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: -2,
                              left: 0,
                              width: '0%',
                              height: '2px',
                              backgroundColor: '#f50057',
                              transition: 'all 0.3s ease'
                            },
                            '&:hover': {
                              color: '#ffffff',
                              '&::after': {
                                width: '100%'
                              }
                            }
                          }}
                        >
                          {item.label}
                        </Box>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#f50057', 
                  mb: 2,
                  fontWeight: 600,
                  fontSize: isMobile ? '1rem' : '1.1rem'
                }}
              >
                Get In Touch
              </Typography>
              
              <Typography variant="body2" sx={{ color: '#e0e0e0', mb: 2 }}>
                Let's discuss how we can elevate your social media presence.
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 1.5 
              }}>
                <a 
                  href="mailto:Kimeliruthj@gmail.com"
                  style={{ 
                    color: '#e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#e0e0e0'}
                >
                  <EmailIcon fontSize="small" />
                  <Typography variant="body2">
                    Kimeliruthj@gmail.com
                  </Typography>
                </a>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255,255,255,0.1)' }} />
        
        {/* Bottom bar */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row', 
            justifyContent: 'space-between',
            alignItems: isMobile ? 'center' : 'flex-start',
            gap: 2
          }}
        >
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255,255,255,0.6)',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            © {new Date().getFullYear()} Ruth Kimeli. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link 
              to="about"
              {...scrollSettings}
              style={{ 
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.875rem',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              Privacy Policy
            </Link>
            <Link 
              to="about"
              {...scrollSettings} 
              style={{ 
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.875rem',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
      
      {/* Scroll to top button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0.5,
          y: showScrollTop ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          right: 30,
          bottom: 30,
          zIndex: 10
        }}
      >
        <IconButton
          onClick={scrollToTop}
          sx={{
            backgroundColor: '#f50057',
            color: 'white',
            width: 45,
            height: 45,
            boxShadow: '0 4px 20px rgba(245, 0, 87, 0.5)',
            '&:hover': {
              backgroundColor: '#c51162',
              transform: 'translateY(-3px)'
            }
          }}
          aria-label="scroll to top"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
}