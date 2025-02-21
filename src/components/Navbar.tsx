import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Fade } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: "linear-gradient(to right, #ec4899, #9333ea)", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }}>
      <Toolbar>
        {/* Mobile Menu Icon */}
        <IconButton edge="start" color="inherit" onClick={handleMenuOpen} sx={{ display: { xs: "block", md: "none" } }}>
          <MenuIcon />
        </IconButton>

        {/* Brand Name with Animation */}
        <Typography
          variant="h6"
          component={motion.div}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ flexGrow: 1, fontWeight: "bold", textAlign: { xs: "center", md: "left" }, cursor: "pointer", letterSpacing: 2 }}
        >
          Ruth
        </Typography>

        {/* Desktop Menu with Hover Effects */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {["Homepage", "Portfolio", "About", "Certifications", "Contact me"].map((item) => (
            <Typography
              key={item}
              variant="body1"
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.3s",
                "&:hover": { color: "#fbbf24", transform: "scale(1.1)" }
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Toolbar>

      {/* Mobile Dropdown Menu with Fade Effect */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} TransitionComponent={Fade}>
        {["Homepage", "Portfolio", "About", "Certifications", "Contact me"].map((item) => (
          <MenuItem key={item} onClick={handleMenuClose}>{item}</MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
