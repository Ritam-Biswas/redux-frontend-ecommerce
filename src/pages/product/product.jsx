import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


import { fetchSelectedProduct, fetchSelectedProductSuccess } from '../../store/actions/productActions'
import { addToCart } from '../../store/actions/cartActions'

import { Box, Container, Divider, Stack, Typography, Button, Paper, Rating, CircularProgress } from '@mui/material'


const Product = () => {

  const {loading, selectedProduct, error} = useSelector((state)=>state.selectedProduct)
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(()=>{
    dispatch(fetchSelectedProduct(id))

    return () => {
      dispatch(fetchSelectedProductSuccess(null))
    }
  }, [])

  const handleAddToCart = () => {
    const product = { 
      id: selectedProduct.id, 
      title: selectedProduct.title, 
      image: selectedProduct.image, 
      price: selectedProduct.price 
    }
    dispatch(addToCart(product))
}

  return (
    <Box component='main'>
      <Container sx={{ paddingTop: 8}}>
        {
          loading? (
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '80vh', alignItems: 'center' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Stack direction='row' spacing={6}>
              <Box sx={{ width: '50%', height:'500px', padding:'20px', backgroundColor: 'white'}}>
                <img src={selectedProduct?.image} alt="product" style={{height:'100%', width:'100%', objectFit:'contain'}}/>
              </Box>
              <Stack spacing={4} width='50%'>
                <Stack spacing={2}>
                  <Typography variant='h4' component='h2'>
                    {selectedProduct?.title}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    {selectedProduct?.description}
                  </Typography>
                  <Stack direction='row' spacing={2} alignItems='center'>
                    <Typography variant='h5'>
                      ₹ {selectedProduct?.price}
                    </Typography>
                    <Rating name="read-only" value={selectedProduct && selectedProduct.rating.rate} precision={0.1} readOnly/>
                    <Typography variant='body2'>
                      {selectedProduct?.rating.rate}
                    </Typography>
                  </Stack>
                </Stack>
                <Divider/>
                <Stack spacing={2}>
                  <Stack direction='row' spacing={2}>
                    <Paper elevation={0} sx={{ padding: '8px'}}>
                      <Typography variant='body2' color='primary'>Category: {selectedProduct?.category}</Typography>
                    </Paper>
                    <Paper variant="outlined" sx={{ padding: '8px', border: '1px solid #9c27b0', background:'inherit'}}>
                    <Typography variant='body2' color='primary'>Stock: {selectedProduct?.rating.count} items</Typography>
                    </Paper>
                  </Stack>
                  <Button variant='contained' size='large' onClick={handleAddToCart}>Add To Cart</Button>
                </Stack>
              </Stack>
            </Stack>
          )
        }  
      </Container>
    </Box>
  )
}

export default Product
