import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"


import { Box, Container,  Grid, CircularProgress } from "@mui/material"

import ProductCard from "../../components/productCard/productCard"
import { fetchProducts } from "../../store/actions/productActions"

const Home = () => {

  const dispatch = useDispatch()
  const { loading, error, products} = useSelector((state) => state.products)
  console.log(products)

  useEffect(()=>{
    dispatch(fetchProducts()); 
  },[])

  if(error){
    return <div>{error}</div>
  }

  return (
    <Box component="main">
      <Container component="section" sx={{ mt:4}}>
        {
          loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '80vh', alignItems: 'center' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={2}>
              {
                products.map((product)=>{
                  return(
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <ProductCard product={product}/>
                    </Grid>
                  )
                })
              }
            </Grid>
          )
        }
      </Container>
    </Box>
  )
}

export default Home
