import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  Typography, 
  Container, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  useMediaQuery, 
  useTheme, 
  Divider, 
  IconButton, 
  InputAdornment,
  Paper,
  Snackbar,
  Alert
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';

export default function ContactSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'warning' | 'info';
  }>({
    open: false,
    message: '',
    severity: 'success'
  });

  // Contact information
  const contactInfo = {
    email: 'Kimeliruthj@gmail.com',
    phone: '+254746421346',
    linkedin: 'linkedin.com/in/ruth-kimeli'
  };

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Spree form submission
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('message', formState.message);
      formData.append('_to', contactInfo.email);
      
      // Replace with your actual Spree form endpoint
      await fetch('https://spreeform.com/to/your-spree-form-id', {
        method: 'POST',
        body: formData,
      });
      
      setSnackbar({
        open: true,
        message: 'Thanks for reaching out! I\'ll get back to you soon.',
        severity: 'success'
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    } catch {
      setSnackbar({
        open: true,
        message: 'Something went wrong. Please try again later.',
        severity: 'error'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };

  // Animated background elements
  const backgroundShapes = [
    {
      color: "linear-gradient(135deg, rgba(103, 58, 183, 0.05), rgba(255, 64, 129, 0.05))",
      size: { width: "300px", height: "300px" },
      position: { top: "15%", right: "-5%" },
      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
      animation: {
        rotate: [0, 180],
        scale: [1, 1.1, 1],
        transition: { duration: 25, repeat: Infinity, ease: "linear" }
      }
    },
    {
      color: "linear-gradient(45deg, rgba(255, 64, 129, 0.03), rgba(103, 58, 183, 0.03))",
      size: { width: "250px", height: "250px" },
      position: { bottom: "10%", left: "-8%" },
      borderRadius: "50% 50% 70% 30% / 30% 50% 50% 70%",
      animation: {
        rotate: [180, 0],
        scale: [1, 1.2, 1],
        transition: { duration: 20, repeat: Infinity, ease: "linear" }
      }
    }
  ];

  // Social media links
  const socialLinks = [
    { 
      icon: <WhatsAppIcon />, 
      label: 'WhatsApp', 
      url: `https://wa.me/${contactInfo.phone.replace(/\+|\s/g, '')}`, 
      color: '#25D366',
      display: contactInfo.phone
    },
    { 
      icon: <EmailIcon />, 
      label: 'Email', 
      url: `mailto:${contactInfo.email}`, 
      color: '#f50057',
      display: contactInfo.email
    },
    { 
      icon: <LinkedInIcon />, 
      label: 'LinkedIn', 
      url: `https://${contactInfo.linkedin}`, 
      color: '#0077B5',
      display: contactInfo.linkedin
    }
  ];

  return (
    <Box 
      sx={{ 
        background: "linear-gradient(180deg, #1e1e1e 0%, #2d1b4c 100%)",
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
      ref={ref}
      id="contact"
    >
      {/* Animated background shapes */}
      {backgroundShapes.map((shape, index) => (
        <motion.div
          key={index}
          animate={shape.animation}
          style={{
            position: 'absolute',
            ...shape.size,
            borderRadius: shape.borderRadius,
            background: shape.color,
            ...shape.position,
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
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
              <Divider sx={{ 
                flexGrow: 0.05, 
                borderColor: '#ff4081',
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
                Let's Connect
              </Typography>
              <Divider sx={{ 
                flexGrow: 0.95, 
                borderColor: '#ff4081',
                opacity: 0.5,
                borderWidth: 2, 
                borderRadius: 1
              }} />
            </Box>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Typography 
              variant="h5" 
              component="h3" 
              sx={{ 
                color: '#ffffff',
                textAlign: 'center',
                fontWeight: 500,
                mb: 6,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Let's grow your brand together — <Box component="span" sx={{ color: '#ff4081', fontWeight: 600 }}>reach out!</Box>
            </Typography>
          </motion.div>

          <Grid container spacing={6} alignItems="flex-start">
            {/* Contact Info & Social Links */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    background: 'rgba(45, 27, 76, 0.3)',
                    backdropFilter: 'blur(10px)',
                    p: 4,
                    borderRadius: '20px',
                    border: '1px solid rgba(179, 157, 219, 0.1)',
                    height: '100%'
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      color: '#b39ddb',
                      fontWeight: 600,
                      mb: 3
                    }}
                  >
                    Get In Touch
                  </Typography>

                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: '#e0e0e0',
                      mb: 4,
                      lineHeight: 1.7
                    }}
                  >
                    Ready to transform your social media presence? I'm just a message away. Whether you have a project in mind or just want to chat about possibilities, I'd love to hear from you.
                  </Typography>

                  {/* Social Media Links */}
                  <Box sx={{ mb: 4 }}>
                    {socialLinks.map((link, index) => (
                      <motion.div 
                        key={link.label}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Box 
                          component="a"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            mb: 2,
                            py: 1,
                            borderBottom: index !== socialLinks.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                            textDecoration: 'none',
                            color: 'inherit'
                          }}
                        >
                          <Box 
                            sx={{ 
                              mr: 2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 40,
                              height: 40,
                              borderRadius: '12px',
                              backgroundColor: 'rgba(18, 18, 18, 0.3)',
                              color: link.color
                            }}
                          >
                            {link.icon}
                          </Box>
                          <Box>
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: '#b39ddb',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                mb: 0.5
                              }}
                            >
                              {link.label}
                            </Typography>
                            
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                color: '#ffffff',
                                fontWeight: 500,
                                '&:hover': {
                                  color: link.color,
                                  textDecoration: 'underline'
                                }
                              }}
                            >
                              {link.display}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>

                  {/* Action buttons */}
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      gap: 2,
                      flexWrap: 'wrap',
                      justifyContent: { xs: 'center', md: 'flex-start' }
                    }}
                  >
                    {socialLinks.map((link) => (
                      <motion.div
                        key={`icon-${link.label}`}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton
                          component="a"
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                          sx={{ 
                            color: '#ffffff',
                            backgroundColor: 'rgba(18, 18, 18, 0.3)',
                            border: `1px solid ${link.color}`,
                            '&:hover': {
                              backgroundColor: link.color,
                              color: '#ffffff'
                            },
                            transition: 'all 0.3s ease'
                          }}
                          size="large"
                        >
                          {link.icon}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Paper 
                  elevation={0}
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ 
                    background: 'rgba(18, 18, 18, 0.5)',
                    backdropFilter: 'blur(10px)',
                    p: 4,
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      color: '#ff4081',
                      fontWeight: 600,
                      mb: 3
                    }}
                  >
                    Send a Message
                  </Typography>

                  <Grid container spacing={3}>
                    {/* Name field */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="name"
                        label="Your Name"
                        value={formState.name}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon sx={{ color: '#673ab7' }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(179, 157, 219, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#673ab7',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#673ab7',
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: '#b39ddb',
                            '&.Mui-focused': {
                              color: '#673ab7'
                            }
                          }
                        }}
                      />
                    </Grid>
                    
                    {/* Email field */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        name="email"
                        label="Your Email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon sx={{ color: '#f50057' }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(245, 0, 87, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#f50057',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#f50057',
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: '#ff4081',
                            '&.Mui-focused': {
                              color: '#f50057'
                            }
                          }
                        }}
                      />
                    </Grid>
                    
                    {/* Message field */}
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="message"
                        label="Your Message"
                        value={formState.message}
                        onChange={handleChange}
                        variant="outlined"
                        required
                        multiline
                        rows={5}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start" sx={{ mt: 2 }}>
                              <SubjectIcon sx={{ color: '#2196f3' }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(33, 150, 243, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: '#2196f3',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#2196f3',
                            }
                          },
                          '& .MuiInputLabel-root': {
                            color: '#2196f3',
                            '&.Mui-focused': {
                              color: '#2196f3'
                            }
                          }
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{
                            background: 'linear-gradient(45deg, #673ab7 0%, #f50057 100%)',
                            color: 'white',
                            py: 1.5,
                            borderRadius: '10px',
                            fontWeight: 600,
                            textTransform: 'none',
                            fontSize: '1rem',
                            boxShadow: '0 4px 20px rgba(245, 0, 87, 0.3)'
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
          
          {/* Footer Element */}
          <motion.div
            variants={itemVariants}
            style={{ marginTop: '60px', textAlign: 'center' }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 500
              }}
            >
              © {new Date().getFullYear()} Ruth Kimeli • Social Media Manager
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
      
      {/* Success Notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}