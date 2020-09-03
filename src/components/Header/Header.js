import React, { useContext, useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

import { Link } from "react-router-dom";
import {UserContext} from "../context/UserContext";


const Header = () => {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="danger" light expand="md" >
            <NavbarBrand>
                <Link to="/" className="text-white">ABI FireBase App</Link>
            </NavbarBrand>
            <NavbarText className="text-white">{
                context.user?.email ? context.user.email :""
                }</NavbarText>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar >
            <Nav className="ml-auto " navbar>
                { context.user ? (
                    <NavItem>
                    <NavLink onClick={() => context.setUser(null)} className="text-white">LogOut</NavLink>
                </NavItem>
                ) : (
                    <>
                    <NavItem>
                    <NavLink tag={Link} to="/Register" className="text-white">Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/Signin" className="text-white">SignIn</NavLink>
                </NavItem>
                    </>
                )
                }
                
                
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;