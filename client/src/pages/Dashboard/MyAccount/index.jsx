import React, { useState } from "react";

import MyAccountComponent from "./MyAccountComponent";
import { Box } from "@mui/material";

export default function MyAccount() {
  const [componentToRender, setComponentToRender] = useState(
    <MyAccountComponent />
  );

  return (
    <Box setComponentToRender={setComponentToRender}>{componentToRender}</Box>
  );
}
