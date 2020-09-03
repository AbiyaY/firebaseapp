import React, { useContext, useState } from 'react';
import {
    Container,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Input,
    Label,
    Form,
    Button,
    FormGroup,
    Col,
    Row
} from "reactstrap";

import firebase from "firebase/app";
import {UserContext} from "../context/UserContext";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";

const Register = () => {

    const context = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [check, setCheck] = useState('');

    const handleRegister = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then( res => {
                console.log(res);
                context.setUser({email: res.user.email, uid: res.user.uid})
            } )
            .catch(error => {
                console.log(error);
                toast( error.message, {
                    type : "error"
                })
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister();
    }

    if(context.user?.uid){
        return <Redirect to="/" />
    }

    return (
        <Container className = "text-center" >
            <Row>
                <Col lg={6} className="offset-lg-3 mt-5" >
                <Card>
                    <Form onSubmit={handleSubmit} >
                        <CardHeader>Register Here</CardHeader>
                        <CardBody>
                        <FormGroup row>
                                <Label for="name" sm={3} >
                                    Name
                                </Label>
                                <Col sm={9} >
                                    <Input 
                                      type="text"
                                      name="name"
                                      id="name"
                                      placeholder = "Type Your name"
                                      value={name}
                                      onChange={e => setName(e.target.value)}
                                      />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={3} >
                                    Email
                                </Label>
                                <Col sm={9} >
                                    <Input 
                                      type="email"
                                      name="email"
                                      id="email"
                                      placeholder = "Type Your Email"
                                      value={email}
                                      onChange={e => setEmail(e.target.value)}
                                      />
                                </Col>
                            </FormGroup>
                            <FormGroup row >
                                <Label for="password" sm={3} >
                                    Password
                                </Label>
                                <Col sm={9} >
                                    <Input 
                                      type="password"
                                      name="password"
                                      id="password"
                                      placeholder="Type Your Password"
                                      value={password}
                                      onChange={e => setPassword(e.target.value)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="phone" sm={3} >
                                    Phone
                                </Label>
                                <Col sm={9} >
                                    <Input 
                                      type="number"
                                      name="number"
                                      id="number"
                                      placeholder = "Type Your Number"
                                      value={phone}
                                      onChange={e => setPhone(e.target.value)}
                                      />
                                </Col>
                            </FormGroup>
                            <FormGroup row md="5" >
                                
                            
                                    <Input 
                                      type="checkbox"
                                      name="term"
                                      id="term"
                                      value={check}
                                      onChange={e => setCheck(e.target.value)}
                                      />
                                    
                                
                                <Col sm={12} >
                                <Label for="term"  >
                                    I accept the terms and conditions
                                </Label>
                                </Col>
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <Button type= "submit" block color="danger">
                                Register
                            </Button>
                        </CardFooter>
                    </Form>
                </Card>
                </Col>
            </Row>
        </Container>
    )


};

export default Register;