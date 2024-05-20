import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
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

const getAllItemsWithChildrenItemIds = () => {
  const itemIds = [];
  const registerItemId = (item) => {
    if (item.children?.length) {
      itemIds.push(item.id);
      item.children.forEach(registerItemId);
    }
  };

  MUI_X_PRODUCTS.forEach(registerItemId);

  return itemIds;
};

export default function OrganizationStructure() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [expandedItems, setExpandedItems] = React.useState([]);

  const handleExpandedItemsChange = (event, itemIds) => {
    setExpandedItems(itemIds);
  };

  const handleExpandClick = () => {
    setExpandedItems((oldExpanded) =>
      oldExpanded.length === 0 ? getAllItemsWithChildrenItemIds() : []
    );
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 400 }}>
      <Box sx={{ mb: 1 }}>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
          }}
          onClick={handleExpandClick}
        >
          {expandedItems.length === 0 ? "Expand all" : "Collapse all"}
        </Button>
      </Box>
      <Box sx={{ minHeight: 200, flexGrow: 1 }}>
        <RichTreeView
          items={MUI_X_PRODUCTS}
          expandedItems={expandedItems}
          onExpandedItemsChange={handleExpandedItemsChange}
        />
      </Box>
    </Box>
  );
}
