import "./Navbar.css";
import { Button } from "@mui/material";
import { CartWidget } from "../../common/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img
            className="logoImg"
            src="https://firebasestorage.googleapis.com/v0/b/gm-motors-c1596.firebasestorage.app/o/gm-motors-logo.png?alt=media&token=b9651e39-01e0-4e7d-8a66-b2a0e36e1a88"
            alt="Logo"
            style={{ padding: "10px" }}
          />
        </Link>
        <div className="boxButtons">
          <ul className="categorias">
            <Link className="btnCategory" to="/">
              <Button className="buttonNav" color="inherit" variant="contained">
                TODOS
              </Button>
            </Link>
            <Link className="btnCategory" to="/category/cascos">
              <Button className="buttonNav" color="inherit" variant="contained">
                CASCOS
              </Button>
            </Link>
            <Link className="btnCategory" to="/category/camperas">
              <Button className="buttonNav" color="inherit" variant="contained">
                CAMPERAS
              </Button>
            </Link>
            <Link className="btnCategory" to="/category/guantes">
              <Button className="buttonNav" color="inherit" variant="contained">
                GUANTES
              </Button>
            </Link>
          </ul>
          <div className="boxCartIcon">
            <CartWidget className="btnCart" />
          </div>
        </div>
      </div>
    </>
  );
};

// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";

// import { Link, Outlet } from "react-router-dom";
// import "./Navbar.css";
// import { useState } from "react";
// import { menuItems } from "../../../router/navigation";
// const drawerWidth = 200;

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />

//       <List>
//         {menuItems.map(({ id, path, title, Icon }) => {
//           return (
//             <Link key={id} to={path}>
//               <ListItem disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     <Icon sx={{ color: "whitesmoke" }} />
//                   </ListItemIcon>
//                   <ListItemText primary={title} sx={{ color: "whitesmoke" }} />
//                 </ListItemButton>
//               </ListItem>
//             </Link>
//           );
//         })}
//       </List>
//     </div>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: "100%",
//         }}
//       >
//         <Toolbar
//           sx={{ gap: "20px", display: "flex", justifyContent: "space-between" }}
//         >
//           <Link to="/" style={{ color: "whitesmoke" }}>
//             <img
//               className="logo"
//               src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1731525311/phone-store/StorePhone_wuydic.png"
//               alt=""
//             />
//           </Link>
//           <IconButton
//             color="secondary.primary"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//           >
//             <MenuIcon color="secondary.primary" />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav" aria-label="mailbox folders">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           anchor={"right"}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: "block" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//               backgroundColor: "#1976d2",
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           py: 4,
//           width: "100%",
//           minHeight: "100vh",
//           px: 2,
//         }}
//       >
//         <Toolbar />

//         <Outlet />
//       </Box>
//     </Box>
//   );
// }

// export default Navbar;
