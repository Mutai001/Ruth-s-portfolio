//heros
import { 
  Box,
  Typography,
  Button,
  Chip,
  Avatar,
  Stack,
  IconButton,
  Link,
  useMediaQuery,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { styled } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

// Create a theme
const theme = createTheme();

// Styled components
const GradientBackground = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  background: "linear-gradient(135deg, #121212 0%, #2d1b4c 100%)",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4)
  }
}));

const ProfileImage = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  overflow: "hidden",
  width: 160,
  height: 160,
  position: "relative",
  boxShadow: "0 0 30px #673ab7",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 40px #ff4081"
  },
  [theme.breakpoints.down("sm")]: {
    width: 120,
    height: 120
  }
}));

const ContentSection = styled(Box)(({ theme }) => ({
  background: "rgba(30, 30, 30, 0.7)",
  backdropFilter: "blur(12px)",
  borderRadius: theme.spacing(3),
  padding: theme.spacing(5),
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
  position: "relative",
  zIndex: 10,
  border: "1px solid rgba(255, 255, 255, 0.08)",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3)
  }
}));

const StyledChip = styled(Chip)({
  fontWeight: 600,
  borderRadius: "16px",
  transition: "all 0.3s ease",
  margin: "4px",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
  }
});

const SocialIconButton = styled(IconButton)({
  color: "#b39ddb",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#ff4081",
    transform: "translateY(-3px) scale(1.1)"
  }
});

const AnimatedButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  padding: "10px 24px",
  borderRadius: "12px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 8px 25px rgba(255, 64, 129, 0.5)"
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: theme.spacing(1)
  }
}));

interface BackgroundCircleProps {
  size: string;
  color: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const BackgroundCircle = styled(Box)<BackgroundCircleProps>(({ size, color, top, left, right, bottom }) => ({
  position: "absolute",
  width: size,
  height: size,
  borderRadius: "50%",
  background: color,
  filter: "blur(60px)",
  top,
  left,
  right,
  bottom,
  zIndex: 1,
  animation: "float 15s infinite ease-in-out"
}));

// Main component
function HeroSectionContent() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  // Email handling function
  const handleHireMe = () => {
    window.location.href = "mailto:your-email@example.com?subject=Job%20Opportunity&body=Hi%20Ruth,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project.";
  };

  // Animation backgrounds
  const backgroundCircles = [
    { size: "250px", color: "rgba(103, 58, 183, 0.2)", top: "20%", left: "10%" },
    { size: "400px", color: "rgba(255, 64, 129, 0.15)", bottom: "20%", right: "15%" },
    { size: "200px", color: "rgba(33, 150, 243, 0.15)", top: "70%", left: "25%" },
    { size: "350px", color: "rgba(255, 193, 7, 0.1)", top: "10%", right: "25%" }
  ];

  return (
    <GradientBackground>
      {/* Animated background elements */}
      {backgroundCircles.map((circle, index) => (
        <BackgroundCircle
          key={index}
          size={circle.size}
          color={circle.color}
          top={circle.top}
          left={circle.left}
          right={circle.right}
          bottom={circle.bottom}
          sx={{
            animation: `float${index} 20s infinite ease-in-out`
          }}
        />
      ))}

      <ContentSection>
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          spacing={{ xs: 3, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Profile image column */}
          <Box sx={{ 
            display: "flex", 
            flexDirection: "column",
            alignItems: { xs: "center", md: "center" },
            width: { xs: "100%", md: "auto" }
          }}>
            <ProfileImage>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "radial-gradient(circle, rgba(103, 58, 183, 0.4) 0%, transparent 70%)",
                  zIndex: 1
                }}
              />
              <Avatar
                alt="Ruth Kimeli"
                src="/api/placeholder/160/160"
                sx={{ 
                  width: "100%", 
                  height: "100%"
                }}
              />
            </ProfileImage>
            
            {/* Social Links - Show below image on small screens */}
            <Stack 
              direction="row" 
              spacing={1} 
              sx={{ 
                mt: 3, 
                display: { xs: "flex", md: "none" }
              }}
            >
              {[
                { icon: <FacebookIcon />, label: "Facebook" },
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <LinkedInIcon />, label: "LinkedIn" },
                { icon: <TwitterIcon />, label: "Twitter" }
              ].map((social, index) => (
                <SocialIconButton key={index} size="large" aria-label={social.label}>
                  {social.icon}
                </SocialIconButton>
              ))}
            </Stack>
          </Box>

          {/* Content column */}
          <Stack 
            spacing={3} 
            sx={{ 
              textAlign: { xs: "center", md: "left" },
              flex: 1
            }}
          >
            <Box>
              <Typography variant="h6" color="#b39ddb">
                Hello, I'm
              </Typography>
              <Typography 
                variant="h2" 
                fontWeight="bold"
                sx={{ 
                  background: "linear-gradient(90deg, #9c27b0 0%, #f50057 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" }
                }}
              >
                Ruth Kimeli
              </Typography>
            </Box>

            <Typography 
              variant="body1" 
              color="#e0e0e0" 
              sx={{ 
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: "600px"
              }}
            >
              Social Media Manager crafting engaging digital stories and building 
              meaningful online communities. Turning followers into fans and clicks into customers.
            </Typography>

            {/* Action buttons */}
            <Stack 
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ 
                justifyContent: { xs: "center", md: "flex-start" } 
              }}
            >
              <AnimatedButton
                variant="contained"
                color="secondary"
                size="large"
                onClick={handleHireMe}
                startIcon={<EmailIcon />}
              >
                Hire Me
              </AnimatedButton>

              <Link href="/resume.pdf" target="_blank" download style={{ textDecoration: "none" }}>
                <AnimatedButton
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<DownloadIcon />}
                >
                  Download Resume
                </AnimatedButton>
              </Link>
            </Stack>

            {/* Expertise Badges */}
            <Box>
              <Typography 
                variant="subtitle1" 
                color="#e0e0e0" 
                sx={{ 
                  mt: { xs: 2, md: 4 }, 
                  mb: 2, 
                  textAlign: { xs: "center", md: "left" } 
                }}
              >
                My Expertise
              </Typography>
              <Box 
                sx={{ 
                  display: "flex", 
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mx: -0.5
                }}
              >
                {[
                  { label: "Content Strategy", color: "error" as const },
                  { label: "Community Management", color: "primary" as const },
                  { label: "Analytics", color: "success" as const },
                  { label: "Paid Campaigns", color: "warning" as const },
                  { label: "Brand Development", color: "secondary" as const }
                ].map((expertise) => (
                  <StyledChip 
                    key={expertise.label}
                    label={expertise.label}
                    color={expertise.color}
                    size={isSmallScreen ? "small" : "medium"}
                  />
                ))}
              </Box>
            </Box>

            {/* Social Links - Show beside content on medium/large screens */}
            <Stack 
              direction="row" 
              spacing={1} 
              sx={{ 
                mt: 3, 
                display: { xs: "none", md: "flex" },
                justifyContent: { xs: "center", md: "flex-start" } 
              }}
            >
              {[
                { icon: <FacebookIcon />, label: "Facebook" },
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <LinkedInIcon />, label: "LinkedIn" },
                { icon: <TwitterIcon />, label: "Twitter" },
                { icon: <PersonIcon />, label: "Portfolio" }
              ].map((social, index) => (
                <SocialIconButton key={index} size="large" aria-label={social.label}>
                  {social.icon}
                </SocialIconButton>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </ContentSection>
    </GradientBackground>
  );
}

// Export the component wrapped with ThemeProvider
export default function HeroSection() {
  return (
    <ThemeProvider theme={theme}>
      <HeroSectionContent />
    </ThemeProvider>
  );
}