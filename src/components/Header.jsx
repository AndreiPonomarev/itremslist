import React from "react";
import { Link } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
} from "mdbreact";

export const Header = ({ match, location }) => (
    <header>
        <MDBNavbar color="indigo" dark expand="sm" scrolling fixed="top" >
            <MDBNavbarNav left>
                <MDBNavItem active={match.isExact}>
                    <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem active={location.pathname ==='/items'}>
                    <MDBNavLink to="/items">Items</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
    </header>
);
