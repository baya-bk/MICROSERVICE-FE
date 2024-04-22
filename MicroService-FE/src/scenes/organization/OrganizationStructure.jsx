import * as React from "react";
import Box from "@mui/material/Box";

import { RichTreeView } from "@mui/x-tree-view/RichTreeView";

const MUI_X_PRODUCTS = [
  {
    id: "grid1",
    label: "INSA",
    children: [
      {
        id: "pickers",
        label: "GADA",
        children: [
          { id: "pickers-community", label: "@mui/x-date-pickers" },
          { id: "pickers-pro", label: "@mui/x-date-pickers-pro" },
        ],
      },
      { id: "grid-community", label: "Construction Project" },
      { id: "grid-pro", label: "EEPERP" },
      { id: "grid-premium", label: "mmmmm" },
      { id: "grid2", label: "Infrormation" },
      {
        id: "pickers2",
        label: "BIFTU",
        children: [
          { id: "biftu1", label: "@mui/x-date-pickers" },
          { id: "biftu2", label: "@mui/x-date-pickers-pro" },
        ],
      },
      {
        id: "pickers3",
        label: "wwww",
        children: [
          { id: "wwww1", label: "@mui/x-date-pickers" },
          { id: "wwww2", label: "@mui/x-date-pickers-pro" },
        ],
      },
      { id: "grid3", label: "its" },
      { id: "grid4", label: "service provider" },
      {
        id: "grid5",
        label: "sample",
      },
      { id: "grid6", label: "zzzz" },
    ],
  },
];

export default function OrganizationStructure() {
  return (
    <Box sx={{ height: 220, flexGrow: 1, maxWidth: 400 }}>
      <RichTreeView items={MUI_X_PRODUCTS} />
    </Box>
  );
}
