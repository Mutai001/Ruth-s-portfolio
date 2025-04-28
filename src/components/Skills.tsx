import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PaletteIcon from '@mui/icons-material/Palette';
import CampaignIcon from '@mui/icons-material/Campaign';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupsIcon from '@mui/icons-material/Groups';

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
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
  
  // Skill categories with their respective icons
  const skillCategories = [
    {
      title: "Storytelling & Brand Management",
      icon: <CampaignIcon sx={{ color: '#9c27b0' }} />,
      skills: [
        "Storytelling",
        "Brand Management",
        "SEO",
        "Content Strategy"
      ]
    },
    {
      title: "Digital Advertising",
      icon: <AutoAwesomeIcon sx={{ color: '#9c27b0' }} />,
      skills: [
        "Facebook Ads",
        "TikTok Ads",
        "Instagram Ads",
        "Google Ads"
      ]
    },
    {
      title: "Content Creation",
      icon: <PaletteIcon sx={{ color: '#9c27b0' }} />,
      skills: [
        "Instagram Reels",
        "TikTok videos",
        "Voice-over",
        "Video Editing (CapCut, Adobe Premiere Pro, Da Vinci Resolve)",
        "Canva Design"
      ]
    },
    {
      title: "Stakeholder Management",
      icon: <GroupsIcon sx={{ color: '#9c27b0' }} />,
      skills: [
        "Community Engagement",
        "User Generated Content Marketing"
      ]
    },
    {
      title: "Analytics & Performance Tracking",
      icon: <AnalyticsIcon sx={{ color: '#9c27b0' }} />,
      skills: [
        "Meta Business Suite",
        "TikTok Analytics",
        "Market Research",
        "Competitor Analysis"
      ]
    }
  ];
  
  return (
    <Box
      id="skills"
      ref={containerRef}
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #121212 0%, #2d1b4c 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05,
          background: 'radial-gradient(circle, #673ab7 0%, transparent 70%)',
          zIndex: 0
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 6,
              background: 'linear-gradient(to right, #ffffff, #b39ddb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            CORE SKILLS & PROFICIENCIES
          </Typography>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={4}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={6}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: 'rgba(30, 30, 30, 0.7)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      borderLeft: '4px solid #f50057',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                        borderLeft: '4px solid #9c27b0'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          mr: 2,
                          p: 1,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#e0e0e0'
                        }}
                      >
                        {category.title}
                      </Typography>
                    </Box>
                    
                    <List dense>
                      {category.skills.map((skill, skillIndex) => (
                        <ListItem key={skillIndex} disableGutters>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon 
                              sx={{ 
                                color: '#f50057',
                                fontSize: '1rem'
                              }} 
                            />
                          </ListItemIcon>
                          <ListItemText 
                            primary={skill}
                            sx={{
                              '& .MuiTypography-root': {
                                color: '#e0e0e0',
                                fontSize: '0.95rem'
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Box
            sx={{
              mt: 8,
              p: 3,
              borderRadius: 2,
              background: 'linear-gradient(135deg, rgba(103, 58, 183, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center'
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: '#e0e0e0',
                fontStyle: 'italic'
              }}
            >
              My versatile skill set allows me to create compelling content that engages audiences 
              across multiple platforms while strategically growing brand presence.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}