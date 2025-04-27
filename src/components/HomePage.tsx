import { 
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  IconButton,
  Link,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { styled } from "@mui/system";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import heroImage  from "../images/anime heros (1).jpg"

// Styled components
const ProfileImageContainer = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  overflow: "hidden",
  width: 200,
  height: 200,
  position: "relative",
  boxShadow: "0 0 30px #673ab7",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  margin: "0 auto",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 40px #ff4081"
  },
  [theme.breakpoints.down("md")]: {
    width: 180,
    height: 180
  },
  [theme.breakpoints.down("sm")]: {
    width: 150,
    height: 150
  }
}));

const StyledImage = styled('img')({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  transition: "transform 0.5s ease",
  "&:hover": {
    transform: "scale(1.1)"
  }
});

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

// Main component
function HeroSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  // Email handling function
  const handleHireMe = () => {
    window.location.href = "mailto:your-email@example.com?subject=Job%20Opportunity&body=Hi%20Ruth,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project.";
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #121212 0%, #2d1b4c 100%)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, sm: 4 }
      }}
    >
      {/* Background circles - creating the animated gradient effect */}
      <Box
        sx={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(103, 58, 183, 0.2)",
          filter: "blur(60px)",
          top: "20%",
          left: "10%",
          zIndex: 1,
          animation: "float1 20s infinite ease-in-out"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(255, 64, 129, 0.15)",
          filter: "blur(60px)",
          bottom: "20%",
          right: "15%",
          zIndex: 1,
          animation: "float2 20s infinite ease-in-out"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(33, 150, 243, 0.15)",
          filter: "blur(60px)",
          top: "70%",
          left: "25%",
          zIndex: 1,
          animation: "float3 20s infinite ease-in-out"
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(255, 193, 7, 0.1)",
          filter: "blur(60px)",
          top: "10%",
          right: "25%",
          zIndex: 1,
          animation: "float4 20s infinite ease-in-out"
        }}
      />

      {/* Main content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          background: "rgba(30, 30, 30, 0.7)",
          backdropFilter: "blur(12px)",
          borderRadius: 3,
          p: { xs: 3, sm: 4, md: 5 },
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05) inset",
          position: "relative",
          zIndex: 10,
          border: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
        >
          {/* Profile image */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { xs: "100%", md: "auto" }
            }}
          >
            <ProfileImageContainer>
              {/* Overlay effect */}
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
              <StyledImage
                alt="Ruth Kimeli"
                src={heroImage}
              />
            </ProfileImageContainer>
            
            {/* Social Links - Mobile */}
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
                <SocialIconButton key={index} size="medium" aria-label={social.label}>
                  {social.icon}
                </SocialIconButton>
              ))}
            </Stack>
          </Box>

          {/* Content */}
          <Stack 
            spacing={3} 
            sx={{ 
              textAlign: { xs: "center", md: "left" },
              flex: 1
            }}
          >
            <Box>
              <Typography 
                variant="h6" 
                color="#b39ddb"
                sx={{ mb: 1 }}
              >
                Hello, I'm
              </Typography>
              <Typography 
                variant="h2" 
                fontWeight="bold"
                sx={{ 
                  background: "linear-gradient(90deg, #9c27b0 0%, #f50057 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" }
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
                maxWidth: "600px",
                mx: { xs: "auto", md: 0 }
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
                  mt: { xs: 2, md: 3 }, 
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
                {(
                  [
                    { label: "Content Strategy", color: "error" as const },
                    { label: "Community Management", color: "primary" as const },
                    { label: "Analytics", color: "success" as const },
                    { label: "Paid Campaigns", color: "warning" as const },
                    { label: "Brand Development", color: "secondary" as const }
                  ] as const
                ).map((expertise) => (
                  <StyledChip 
                    key={expertise.label}
                    label={expertise.label}
                    color={expertise.color}
                    size={isSmallScreen ? "small" : "medium"}
                  />
                ))}
              </Box>
            </Box>

            {/* Social Links - Desktop */}
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
      </Box>
    </Box>
  );
}

export default HeroSection;