import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  Box,
  Button,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import PanToolIcon from "@mui/icons-material/PanTool";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../../common/CartWidget";
import "./Navbar.css";

const drawerWidth = 200;

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <ShopIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Todos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/category/cascos">
            <ListItemIcon>
              <SportsMotorsportsIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Cascos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/category/camperas">
            <ListItemIcon>
              <CheckroomIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Camperas" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/category/guantes">
            <ListItemIcon>
              <PanToolIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Guantes" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/carrito">
            <ListItemIcon>
              <ShoppingCartIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText primary="Carrito" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2,
            backgroundColor: "rgb(33, 33, 33)",
            height: 150,
          }}
        >
          <Link to="/">
            <img
              className="logoImg"
              src="https://firebasestorage.googleapis.com/v0/b/gm-motors-c1596.firebasestorage.app/o/gm-motors-logo.png?alt=media&token=b9651e39-01e0-4e7d-8a66-b2a0e36e1a88"
              alt="Logo"
              style={{ padding: "10px", width: 150 }}
            />
          </Link>

          {/* Menú hamburguesa para mobile */}
          <Box
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Menú normal para desktop */}
          <Box
            className="boxButtons"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 5,
            }}
          >
            <Link className="btnCategory" to="/">
              <Button variant="contained">TODOS</Button>
            </Link>
            <Link className="btnCategory" to="/category/cascos">
              <Button variant="contained">CASCOS</Button>
            </Link>
            <Link className="btnCategory" to="/category/camperas">
              <Button variant="contained">CAMPERAS</Button>
            </Link>
            <Link className="btnCategory" to="/category/guantes">
              <Button variant="contained">GUANTES</Button>
            </Link>
            <CartWidget className="btnCart" />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer para mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "grey",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

// import "./Navbar.css";
// import { Button } from "@mui/material";
// import { CartWidget } from "../../common/CartWidget";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <>
//       <div className="navbar">
//         <Link to="/">
//           <img
//             className="logoImg"
//             src="https://firebasestorage.googleapis.com/v0/b/gm-motors-c1596.firebasestorage.app/o/gm-motors-logo.png?alt=media&token=b9651e39-01e0-4e7d-8a66-b2a0e36e1a88"
//             alt="Logo"
//             style={{ padding: "10px" }}
//           />
//         </Link>
//         <div className="boxButtons">
//           <ul className="categorias">
//             <Link className="btnCategory" to="/">
//               <Button className="buttonNav" color="inherit" variant="contained">
//                 TODOS
//               </Button>
//             </Link>
//             <Link className="btnCategory" to="/category/cascos">
//               <Button className="buttonNav" color="inherit" variant="contained">
//                 CASCOS
//               </Button>
//             </Link>
//             <Link className="btnCategory" to="/category/camperas">
//               <Button className="buttonNav" color="inherit" variant="contained">
//                 CAMPERAS
//               </Button>
//             </Link>
//             <Link className="btnCategory" to="/category/guantes">
//               <Button className="buttonNav" color="inherit" variant="contained">
//                 GUANTES
//               </Button>
//             </Link>
//           </ul>
//           <div className="boxCartIcon">
//             <CartWidget className="btnCart" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
