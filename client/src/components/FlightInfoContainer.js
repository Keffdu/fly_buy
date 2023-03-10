import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import FlightTakeoffSharpIcon from '@mui/icons-material/FlightTakeoffSharp';
import { UserContext } from '../context/user';
import { useContext } from 'react';
import {useHistory, Link} from 'react-router-dom'


function FlightInfoContainer() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const { user, setUser } = useContext(UserContext)
  const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };


  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then(
        (r) => {
            if (r.ok) {
                setUser(null)
                history.push("/")
            }
        })
    }

    const avatarStyle={backgroundColor: "#B1BECD"}
    
  return (
    <div className='nav'>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Link to='/flights'><Typography sx={{ minWidth: 100 }}>Flights</Typography></Link>
        <Link to='/log_book'><Typography sx={{ minWidth: 100 }}>Log Book</Typography></Link>
        <Tooltip title="Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar style={avatarStyle} sx={{ width: 32, height: 32 }}>{user.user_initials}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(255,255,255,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to='/profile'><MenuItem onClick={handleClose}>
          <Avatar/> Profile
        </MenuItem></Link>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <FlightTakeoffSharpIcon fontSize="small"/>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FlightInfoContainer