import { Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div>
      <h2>Items</h2>
      <Button color="inherit" component={Link} to="add-item">
        Add item
      </Button>
      <Outlet />
    </div>
  );
};

export default Items;
