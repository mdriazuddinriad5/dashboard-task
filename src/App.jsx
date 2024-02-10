import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// import img1 from './assets/Logo.png';
import img2 from './assets/Icon Bell.svg';
import img3 from './assets/Ellipse 1.png';
import img4 from './assets/Icon Apps.svg';
import img5 from './assets/Icon User.svg';
import img6 from './assets/Icon User Board.svg';
import img7 from './assets/Icon Board.svg';
import img8 from './assets/Icon Digital Board.svg';
import img9 from './assets/Icon Team.svg';
import img10 from './assets/Icon Support.svg';

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
      backgroundColor: '#12375D', 
      ...(open ? openedMixin(theme) : closedMixin(theme)),
    },
    '& .MuiListItemButton-root': {
      color: '#FFFFFF', // Change this line to set the text color
    },
  }),
);

export default function TrialNavbar() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={2}>
        <Toolbar sx={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--fuchsia-100, #ECDFFA)' }}>
          <IconButton
            color="#1A1A1B"
            aria-label="toggle drawer"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ mr: 2 }}
          >
            {/* {open ? <MenuIcon /> : <MenuOpenIcon />} */}
          </IconButton>
          {/* <img src={img1} alt="" />
          <Typography sx={{ fontSize: '16px', fontFamily: 'Inter', fontWeight: 600, marginLeft: 2 }} color={'#8E09EF'} variant="h6" noWrap component="div">
            LAMA
          </Typography> */}
          <Box
            display="flex"
            alignItems="center"
            sx={{ marginLeft: 'auto' }}
          >
            <SearchIcon sx={{ color: '#1A1A1B', marginRight: 4 }} />
            <img src={img2} alt="" />
            <Typography sx={{ fontSize: '14px', fontFamily: 'Inter', fontWeight: 400, marginLeft: 4, marginRight: 2 }} color={'#1A1A1B'} variant="h6" noWrap component="div">
              Annette Black
            </Typography>
            <img src={img3} alt="" />
            <ArrowDropDownIcon sx={{ color: '#1A1A1B', marginLeft: 2 }} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>

        <Divider />


        <List sx={{ margin: 1 }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={img4} />
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={img5} />
              </ListItemIcon>
              <ListItemText primary={'Profile'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={img6} />
              </ListItemIcon>
              <ListItemText primary={'Performance'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={img7} />
              </ListItemIcon>
              <ListItemText primary={'Performance Ratings'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={img8} />
              </ListItemIcon>
              <ListItemText primary={'HR Feedback'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={img9} />
              </ListItemIcon>
              <ListItemText primary={'Your Team'} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img src={img10} />
              </ListItemIcon>
              <ListItemText primary={'Support'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
