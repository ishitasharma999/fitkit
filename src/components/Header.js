import React from 'react'
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Header(props) {
  return (
    <Container maxWidth="xl" id="header-container">
      <Typography color="black" variant="h3" align="center" sx={{fontWeight: 600}}>
        {props.text}
      </Typography>
    </Container>
  )
}
