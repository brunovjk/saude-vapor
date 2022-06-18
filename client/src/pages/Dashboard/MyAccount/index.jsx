import React, { useState } from "react";

import MyAccountComponent from "./MyAccountComponent";
import { Box } from "@mui/material";

export default function MyAccount({ isAuth }) {
  const [componentToRender, setComponentToRender] = useState(
    <MyAccountComponent isAuth={isAuth} />
  );

  return (
    <Box setComponentToRender={setComponentToRender}>{componentToRender}</Box>
  );
}
