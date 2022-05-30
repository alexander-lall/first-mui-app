import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ImageCollage from '../../components/image-collage/image-collage.component';
import SimpleAccordion from '../../components/accordion/accordion.component';

const Details = () => {
    return (
        <Container sx={{ marginY: 5 }}>
            <Typography variant='h3' component='h1'>
                Germany
            </Typography>
            <Box marginTop={3} sx={{ display: 'flex' }}>
                <ImageCollage/>
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3}>
                    About This Trip
                </Typography>
                <Typography variant='p' component='body' marginTop={3}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum adipisci ullam, tenetur facere quibusdam, quis, nesciunt ipsum accusamus sit sapiente necessitatibus quisquam tempore sint itaque? Corrupti, a consectetur laborum exercitationem, magnam eligendi enim atque nihil, error nam ratione officiis. Mollitia odit explicabo animi minima laborum dolorum dicta velit quaerat corrupti.
                </Typography>
            </Box>
            <Box>
                <Typography variant='h6' component='h4' marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <SimpleAccordion />
            </Box>
        </Container>

    );
}

export default Details;