import React from 'react';
import {WiCloud,WiCelsius} from "react-icons/wi";
import {
    Container,
    Row,
    Col
} from "reactstrap";

const Weather = ({loading,weather}) => {
    if(loading)
        return <h1>Loading...</h1>
    return(
        <Container className="text-center">
            <Row className="text-center mt-5">
            <Col md="10">
            <div>
            <p>Region :  {weather.location?.region}</p>
            <p>Country :  {weather.location?.country}</p>
            <p> Temperature :  {weather.current?.temp_c}<WiCelsius/></p>
            <p> Cloud :  {weather.current?.cloud}<WiCloud/></p>
            <p>UV :  {weather.current?.uv}</p>
            </div>
            </Col>
            </Row>
        </Container>
    
    
    )};

export default Weather;


