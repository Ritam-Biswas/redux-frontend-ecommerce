import {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartItemList from '../cartItems/cartItemList';

import { styled, alpha } from '@mui/material/styles';
import { 
  Drawer,  
  AppBar, 
  Toolbar, 
  Box, 
  IconButton, 
  Typography, 
  InputBase, 
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '70%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      '&:focus': {
        width: '100%',
      },
    },
  },
}));

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const {noOfItems} = useSelector((state) => state.cart)

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Box>
          <Drawer
            anchor='right'
            open={isOpen}
            onClose={toggleDrawer}
          >
            <CartItemList/>
          </Drawer>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{display: 'flex', justifyContent:'space-between', width:'100%'}}>
            <Link to='/'>
              <Typography
                variant="h6"
                noWrap
                component="div"
                
              >
                DummyStore
              </Typography>
            </Link>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: 0 }}
              onClick={toggleDrawer}
            >
              <Badge badgeContent={noOfItems} color='warning'>
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet/>
    </>
  );
}

export default Navbar;
