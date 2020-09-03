import React from 'react';
import {Container} from "reactstrap";

const Footer = () => {
    return(
        <Container
        fluid
        tag="footer"
        className="text-center text-white fixed-bottom bg-danger p-3  " >
            FireBase App
        </Container>
    );
};

export default Footer;