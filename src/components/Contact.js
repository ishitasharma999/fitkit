import React from "react";
import { Container } from "@mui/material";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section>
      <Container maxWidth="xl" id="contact-container">
        <ContactCard />
      </Container>
    </section>
  );
};

export default Contact;
