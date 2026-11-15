
import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button
} from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

            <Button
              component={NavLink}
              to="/"
              color="inherit"
              sx={{ display: "flex", gap: 2 }}
            >
              <Group fontSize="large" />
              <Typography variant="h6">Reactivities</Typography>
            </Button>

            <Box sx={{ display: "flex" }}>
              <MenuItemLink to="/activities">
                Activities
              </MenuItemLink>

              <MenuItemLink to="/createActivity">
                Create Activity
              </MenuItemLink>
            </Box>

            <Button color="inherit">
              User menu
            </Button>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
