import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../store/actions/cartActions';

import {Card, CardActionArea, CardContent, Typography, Button, CardMedia, CardActions} from '@mui/material'

const shortenDescription = (text, maxLength) => {
    if(text.length > maxLength){
        return text.slice(0, maxLength)+'...'
    }
    return text;
} 


const ProductCard = ({product}) => {

    const {title, description, image, price, id} = product

    const dispatch = useDispatch()

    const descriptionLength = 100

    const handleAddToCart = () => {
        const product = { id, title, image, price }
        dispatch(addToCart(product))
    }

    return (
        <Card sx={{ height: '500px', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
            <CardActionArea>
                <Link to={`product/${id}`}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={image}
                        sx={{ objectFit: 'contain', padding: '10px'}}
                    />
                </Link>
            </CardActionArea>
            <CardContent component='a' href='/product/1'>
                <Typography gutterBottom variant="body1" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                    {shortenDescription(description, descriptionLength)}
                </Typography>
                <Typography variant='h6' component="p">
                    ₹ {price}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto'}}>
                <Button variant="contained" size='medium' sx={{ width: '100%'}} onClick={handleAddToCart}>Add To Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
