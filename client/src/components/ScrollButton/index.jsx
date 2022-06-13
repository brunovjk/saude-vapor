import React, { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Box, Button } from "@mui/material";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Box
      sx={{
        display: visible ? "flex" : "none",
        justifyContent: "flex-end",
        alignItems: "center",
        maxWidth: "1500px",
        width: "95%",
        height: "0px",
        bottom: "40px",
        p: { xs: "8px", sm: "16px", md: "32px" },
      }}
    >
      <Button sx={{ p: "0px" }} onClick={scrollToTop}>
        <ArrowCircleUpIcon />
      </Button>
    </Box>
  );
};

export default ScrollButton;
