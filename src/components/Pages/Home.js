import React, { useContext, useState, useEffect} from "react";

import {
    Container,
    Row,
    Col,
    InputGroup,
    Input,
    InputGroupAddon,
    Button,
    Form
} from "reactstrap";

import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Weather from "../Weather/Weather";

const Home = () => {

    const APP_KEY = "4078ef130076401db1a175048202107";


    const context = useContext(UserContext);
    const [weather, setWeather] = useState({});
    const [search,setSearch] = useState("");
    const [query, setQuery] = useState('cv4 8lu')
    const [loading, setLoading] = useState(false);


    useEffect(() => {

    const getWeather = async () =>{
        try{
            setLoading(true);
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${APP_KEY}&q=${query}`);
            const data = await response.json();
            setWeather(data);
            console.log(data);
            setLoading(false);
            

        } catch (error) {
            toast("Not able to Find",{
                type : "error"
            })
        }
    
    }
    
        getWeather();
    },[query]);
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    } 

    // Behind Login
    if(!context.user?.uid) {
        return <Redirect to="/signin" />
    }


    return(
        <Container>
            <Row className="offset-lg-3 mt-5">
                <Col md="5">
                <Form onSubmit={getSearch}>
                <InputGroup>
                <Input 
                    type="text"
                    name =" country" 
                    placeholder = "Country..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    
                />
                <InputGroupAddon addonType="append" >
                    <Button color="danger"  type="submit">Search</Button>
                </InputGroupAddon>
                </InputGroup>
                
                </Form>
                
                </Col>
            </Row>
            <Weather loading={loading} weather={weather}/>
            
        </Container>

    );
};

export default Home;