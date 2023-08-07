import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogout } from '../store/authSlice';



export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(setLogout())
      }
    const navigate=useNavigate();
    const list = (anchor) => (
        <Box
            sx={{ width: "250px", height: "100vh", backgroundColor: "#1b1b1b", color: "rgb(0, 205, 109)" }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{ color: "rgb(0, 205, 109)" }}>
                <ListItem key={1} disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Home" onClick={()=>navigate("/home")}/>
                    </ListItemButton>
                </ListItem>
                <Divider sx={{backgroundColor:"black"}}/>
                <ListItem key={2} disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Programs" onClick={()=>navigate("/workout")}/>
                    </ListItemButton>
                </ListItem>
                <Divider sx={{backgroundColor:"black"}}/>
                <ListItem key={3} disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Goal" onClick={()=>navigate("/goal")}/>
                    </ListItemButton>
                </ListItem>
                <Divider sx={{backgroundColor:"black"}}/>
                <ListItem key={4} disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Profile" onClick={()=>navigate("/profile")}/>
                    </ListItemButton>
                </ListItem>
            <Divider sx={{backgroundColor:"black"}}/>
                <ListItem key={1} disablePadding>
                    <ListItemButton onClick={handleLogout}>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
                <Divider sx={{backgroundColor:"black"}}/>
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className='btnCont' onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{ color: "rgb(6, 207, 106)" }} /></div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}