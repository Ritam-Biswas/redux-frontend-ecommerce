import { useSelector } from "react-redux";

import CartItem from "../cartItem/cartItem";

import { Typography, List, Box, Button } from "@mui/material";


const CartItemList = () => {

  const {cartItems, totalPrice} = useSelector((state)=> state.cart)
  console.log(totalPrice)

  return (
    <Box
      sx={{ width:{ xs:'250px', sm:'400px' }, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height:'100%', padding: 2 }}
      role="presentation"
    >
      <Box>
        <Typography variant='h6' >My Cart</Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {
            cartItems.map((item)=>
              <CartItem key={item.id} title={item.title} quantity={item.quantity} image={item.image} price={item.price} id={item.id}/>
            )
          }
        </List>
      </Box>
      <Button variant="contained">Checkout</Button>
    </Box>
  )
}

export default CartItemList