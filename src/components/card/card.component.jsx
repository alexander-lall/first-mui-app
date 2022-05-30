import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { AccessTime } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material';

import './card.styles.scss';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2',
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: 'body3',
                    },
                    style: {
                        fontSize: 9,
                    }
                }
            ]
        }
    }
});

const Card = ({details}) => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img className='img' src={details.image} alt={details.name} />
                <ThemeProvider theme={theme}>
                    <Box paddingX={1}>
                        <Typography variant='subtitle1' component='h2'>
                            {details.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTime sx={{ width: 12.5 }}/>
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                {details.duration} days
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }} marginTop={3}>
                            <Rating name='rating' value={details.rating} precision={0.1} size='small' readOnly/>
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                {details.rating}
                            </Typography>
                            <Typography variant='body3' component='p' marginLeft={1.5}>
                                ({details.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' component='h3' marginTop={0}>
                                From €{details.price} 
                            </Typography>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Paper>
        </Grid>
    );
}

export default Card;