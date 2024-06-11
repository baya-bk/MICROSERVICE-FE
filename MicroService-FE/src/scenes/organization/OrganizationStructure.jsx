import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDepartmentThunks, getDepartmentByIdThunks } from "../../store";
import { ExpandMore, ChevronRight, Folder, GetApp } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
export default function OrganizationStructure({ setValue }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [expanded, setExpanded] = React.useState("");
  const [expandedItems, setExpandedItems] = React.useState([]);
  const dispatch = useDispatch();
  const departmentItems = useSelector((state) => state.getAllDepartment.items);
  useEffect(() => {
    const tenantId = 2;
    dispatch(getDepartmentThunks.fetchItems(tenantId));
  }, [dispatch]);

  const mapDepartmentsToTree = (departments, parentId = 0) => {
    return departments
      .filter((department) => department.parent_id === parentId)
      .map((department) => ({
        id: department.department_id.toString(),
        label: department.department_name,

        children: mapDepartmentsToTree(departments, department.department_id),
      }));
  };

  //only expand if icon was clicked
  const handleToggle = (event, nodeIds) => {
    event.persist();
    let iconClicked = event.target.closest(".MuiTreeItem-iconContainer");
    if (iconClicked) {
      setExpanded(nodeIds);
    }
  };

  //only select if icon wasn't clicked
  const handleSelect = (event, id) => {
    event.persist();
    const tenantId = 2;
    let iconClicked = event.target.closest(".MuiTreeItem-iconContainer");
    if (!iconClicked) {
      dispatch(getDepartmentByIdThunks.fetchItemById(tenantId, id));
      setValue(1);
      console.log("iddsdds", id);
    }
  };

  const mappedDepartments = mapDepartmentsToTree(departmentItems);

  const handleExpandedItemsChange = (event, itemIds) => {
    setExpandedItems(itemIds);
  };

  const handleExpandClick = () => {
    setExpandedItems((oldExpanded) =>
      oldExpanded.length === 0
        ? getAllItemsWithChildrenItemIds(mappedDepartments)
        : []
    );
  };

  const getAllItemsWithChildrenItemIds = (items) => {
    const itemIds = [];
    const registerItemId = (item) => {
      if (item.children?.length) {
        itemIds.push(item.id);
        item.children.forEach(registerItemId);
      }
    };

    items.forEach(registerItemId);

    return itemIds;
  };

  const handleSelectedItemsChange = (event, ids) => {
    console.log("iddddddd", ids);
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
          items={mappedDepartments}
          expandedItems={expandedItems}
          onExpandedItemsChange={handleExpandedItemsChange}
          onSelectedItemsChange={handleSelect}
          onItemSelectionToggle={handleToggle}
        />
      </Box>
    </Box>
  );
}
