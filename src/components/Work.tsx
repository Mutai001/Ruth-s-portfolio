import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Typography, Container, Box, Grid, Card, CardContent, useMediaQuery, useTheme, Divider, Chip } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleIcon from '@mui/icons-material/People';
import CampaignIcon from '@mui/icons-material/Campaign';
import MovieIcon from '@mui/icons-material/Movie';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';

// You would need to replace these with actual images
import celsirImage from '../assets/brandgrowth.jpg';
import osonaImage from '../assets/content marketing.jpg';
import calvaryImage from '../assets/social meadia.jpg';

export default function WorkHighlightsSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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

  // Updated work experience data
  const experiences = [
    {
      id: 1,
      company: "CELSIR Africa",
      location: "Eldoret, Kenya",
      period: "Nov 2024 – Feb 2025",
      position: "Social Media Manager",
      image: celsirImage,
      achievements: [
        "Increased social media engagement through structured content strategy & storytelling techniques",
        "Boosted platform growth across Instagram, X, and LinkedIn with visually appealing content",
        "Produced high-impact videos highlighting success stories and advocacy efforts",
        "Developed compelling content strategy aligned with CELSIR's mission",
        "Launched employee & beneficiary spotlight features enhancing brand credibility",
        "Facilitated prison visits supporting rehabilitation efforts"
      ],
      primaryIcon: <CampaignIcon sx={{ color: '#f50057' }} />,
      secondaryIcon: <ShareIcon sx={{ color: '#f50057' }} />,
      color: "rgba(245, 0, 87, 0.8)",
      tags: ["Social Media", "Content Strategy", "Legal Aid"]
    },
    {
      id: 2,
      company: "Osona Yarns",
      location: "Nairobi",
      period: "Jan 2024 – May 2024",
      position: "Digital Marketer",
      image: osonaImage,
      achievements: [
        "Created engaging content across Facebook, Instagram, WhatsApp, and TikTok",
        "Boosted engagement within two months through Reels and targeted campaigns",
        "Strengthened community engagement by encouraging user-generated content",
        "Leveraged analytics to optimize content strategy and drive higher conversions",
        "Managed multiple content streams ensuring timely and consistent delivery"
      ],
      primaryIcon: <VisibilityIcon sx={{ color: '#673ab7' }} />,
      secondaryIcon: <ThumbUpIcon sx={{ color: '#673ab7' }} />,
      color: "rgba(103, 58, 183, 0.8)",
      tags: ["Digital Marketing", "Content Creation", "Analytics"]
    },
    {
      id: 3,
      company: "Calvary Chapel",
      location: "Eldoret, Kenya",
      period: "Oct 2021 – Dec 2023",
      position: "TikTok Content Creator",
      image: calvaryImage,
      achievements: [
        "Increased TikTok and Instagram Reels followers through strategic content planning",
        "Produced engaging short-form videos communicating the church's message effectively",
        "Boosted content visibility using trending audio and storytelling techniques",
        "Strengthened digital influence with consistent, impactful content curation"
      ],
      primaryIcon: <MovieIcon sx={{ color: '#2196f3' }} />,
      secondaryIcon: <PeopleIcon sx={{ color: '#2196f3' }} />,
      color: "rgba(33, 150, 243, 0.8)",
      tags: ["TikTok", "Short-form Video", "Community Building"]
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
                Professional Experience
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

          {/* Experience Cards */}
          <Grid container spacing={4}>
            {experiences.map((experience, index) => (
              <Grid item xs={12} md={12} key={experience.id}>
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
                        boxShadow: `0 15px 40px ${experience.color.replace('0.8', '0.2')}`,
                      }
                    }}
                  >
                    <Grid container>
                      {/* Company Image (Left Side) */}
                      <Grid item xs={12} md={4} sx={{ position: 'relative' }}>
                        <Box sx={{ 
                          background: `linear-gradient(135deg, ${experience.color}, rgba(18, 18, 18, 0.9))`,
                          height: '100%',
                          minHeight: { xs: '200px', md: '100%' },
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          p: 4,
                          position: 'relative',
                          overflow: 'hidden'
                        }}>
                          {/* Animated Background Element */}
                          <Box sx={{
                            position: 'absolute',
                            width: '150%',
                            height: '150%',
                            background: `radial-gradient(circle, ${experience.color.replace('0.8', '0.2')}, transparent)`,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            opacity: 0.3,
                            zIndex: 0
                          }} />

                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={inView ? { 
                              scale: 1, 
                              opacity: 1,
                              transition: { 
                                delay: 0.2 + index * 0.1,
                                duration: 0.8,
                                ease: "easeOut"
                              }
                            } : { scale: 0.9, opacity: 0 }}
                            style={{ zIndex: 1 }}
                          >
                            <Box sx={{ 
                              width: '80px', 
                              height: '80px', 
                              borderRadius: '50%',
                              background: 'rgba(18, 18, 18, 0.7)',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                              mb: 3
                            }}>
                              {experience.primaryIcon}
                            </Box>
                          </motion.div>

                          <Typography 
                            variant="h5" 
                            component="h3" 
                            sx={{ 
                              color: '#ffffff',
                              fontWeight: 700,
                              textAlign: 'center',
                              mb: 1,
                              zIndex: 1
                            }}
                          >
                            {experience.company}
                          </Typography>
                          
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'rgba(255, 255, 255, 0.8)',
                              mb: 1,
                              textAlign: 'center',
                              zIndex: 1
                            }}
                          >
                            {experience.location}
                          </Typography>
                          
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'rgba(255, 255, 255, 0.7)',
                              mb: 2,
                              textAlign: 'center',
                              zIndex: 1
                            }}
                          >
                            {experience.period}
                          </Typography>
                          
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: '#ffffff',
                              fontWeight: 600,
                              background: 'rgba(0, 0, 0, 0.3)',
                              borderRadius: '4px',
                              px: 2,
                              py: 0.5,
                              textAlign: 'center',
                              zIndex: 1
                            }}
                          >
                            {experience.position}
                          </Typography>

                          <Box sx={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            justifyContent: 'center',
                            gap: 1,
                            mt: 3,
                            zIndex: 1
                          }}>
                            {experience.tags.map((tag, tagIndex) => (
                              <Chip 
                                key={tagIndex}
                                label={tag}
                                size="small"
                                sx={{ 
                                  background: 'rgba(255, 255, 255, 0.1)',
                                  color: 'rgba(255, 255, 255, 0.85)',
                                  fontWeight: 500,
                                  borderRadius: '4px',
                                  '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.2)',
                                  }
                                }}
                              />
                            ))}
                          </Box>
                        </Box>
                      </Grid>

                      {/* Achievements (Right Side) */}
                      <Grid item xs={12} md={8}>
                        <CardContent sx={{ p: 4 }}>
                          <Typography 
                            variant="h6" 
                            component="h4"
                            sx={{ 
                              color: '#ffffff',
                              fontWeight: 600,
                              mb: 2,
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1
                            }}
                          >
                            {experience.secondaryIcon}
                            Key Achievements
                          </Typography>

                          <Box component="ul" sx={{ 
                            pl: 3,
                            mt: 2,
                            mb: 0,
                            '& li': {
                              color: 'rgba(255, 255, 255, 0.85)',
                              fontSize: '0.95rem',
                              mb: 1.5,
                              position: 'relative',
                              '&::marker': {
                                color: experience.color.replace('0.8', '1'),
                              }
                            }
                          }}>
                            {experience.achievements.map((achievement, i) => (
                              <motion.li 
                                key={i}
                                initial={{ x: 20, opacity: 0 }}
                                animate={inView ? { 
                                  x: 0, 
                                  opacity: 1,
                                  transition: { 
                                    delay: 0.4 + i * 0.1,
                                    duration: 0.5,
                                    ease: "easeOut"
                                  }
                                } : { x: 20, opacity: 0 }}
                              >
                                {achievement}
                              </motion.li>
                            ))}
                          </Box>
                        </CardContent>
                      </Grid>
                    </Grid>
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