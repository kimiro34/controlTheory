import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const ContactForm = () => {
    return(
        <Box
          sx={{
            minHeight:'760px',
            borderBottom:'1px solid black'
          }}
        >
            <Typography>Send us email without sending us email</Typography>
            <Typography>That's what forms are for, right?</Typography>
            <TextField id="filled-basic" variant="filled" />
        </Box>
    )
}

export default ContactForm;