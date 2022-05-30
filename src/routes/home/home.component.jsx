import { Fragment } from 'react';
import Container from '@mui/system/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Card from '../../components/card/card.component';

import categories from '../../data.json';

const Home = () => {
    return (
        <Container sx={{ marginY: 5 }}>
        {
          categories.map((category, index) => (
            <Fragment key={index}>
              <Typography variant='h4' component='h2' marginTop={5} marginBottom={3}>
                {category.name}
              </Typography>
              <Grid container spacing={5}>
                {
                  category.tours.map((tour, idx) => (
                    <Card details={tour} key={idx} />
                  ))
                }
              </Grid>
            </Fragment>
          ))
        }
      </Container>  
    );
}

export default Home;