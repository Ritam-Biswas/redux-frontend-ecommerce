import { useDispatch } from 'react-redux';

import { addItemQuantity, removeItemQuantity, clearItem } from '../../store/actions/cartActions';

import { ListItem, ListItemAvatar, ListItemText, Stack, Divider, IconButton, Avatar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

const CartItem = ({title, quantity, image, price, id}) => {

    const dispatch = useDispatch()

    const handleAddQuantity = () => {
        dispatch(addItemQuantity({quantity, price, id}))
    }

    const handleRemoveQuantity = () => {
        dispatch(removeItemQuantity({quantity, price, id}))
    }

    const handleClearItem = () => {
        dispatch(clearItem({quantity, price, id}))
    }

    return (
        <>
            <ListItem alignItems="flex-start" sx={{ display: 'flex', columnGap: 2}}>
                <ListItemAvatar sx={{ margin: 0}}>
                    <Avatar alt="Remy Sharp" src={image} variant="rounded" sx={{ width: 56, height: 56 }}/>
                </ListItemAvatar>
                <Stack spacing={1} width='100%'>
                    <ListItemText primary={<Typography variant='body1'>{title}</Typography>}/>
                    <Stack direction='row' justifyContent='space-between'>
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <IconButton>
                            <AddIcon sx={{ color: 'black'}} onClick={handleAddQuantity}/>
                        </IconButton>
                        <Typography variant='body1'>{quantity}</Typography>
                        <IconButton>
                            <RemoveIcon sx={{ color: 'black'}} onClick={handleRemoveQuantity}/>
                        </IconButton>
                    </Stack>
                    <IconButton>
                        <CloseIcon sx={{ color: 'black'}} onClick={handleClearItem}/>
                    </IconButton>
                    </Stack>
                </Stack>
            </ListItem>
            <Divider component='li'/>
        </>
    )
}

export default CartItem
