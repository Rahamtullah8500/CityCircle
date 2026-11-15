
import { Button } from "@mui/material";
import type { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({
  children,
  to
}: {
  children: ReactNode;
  to: string;
}) {
  return (
    <Button
      component={NavLink}
      to={to}
      color="inherit"
      sx={{
        fontSize: "1rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        "&.active": {
          color: "yellow"
        }
      }}
    >
      {children}
    </Button>
  );
}