import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
    MDBCol,
    MDBBadge,
    Card,
    CardBody,
    CardImage,
    CardTitle,
    CardText
} from "mdbreact";

const cardStyle = { margin: "1rem 0", textAlign: "center" };
const cardImageStyle = { maxHeight: "10rem", margin: "0 auto" };
const cardTitleStyle = { maxHeight: "3.5rem", overflow: "hidden" };
const descriptionStyle = {
    display: "inline-block",
    width: "100%",
    maxWidth: "200px"
};

export const ItemCard = ({ match, item }) => {
    const made = item.params.find(el => el[0] === 'Marka')
    const status = item.params.find(el => el[0] === 'Stan')
    return (
    <MDBCol md="4" sm="6" xs="12">
        <Link to={`${match.url}/${item.id}`}>
            <Card style={cardStyle}>
                <CardImage
                    className="img-fluid"
                    src="https://cdn4.iconfinder.com/data/icons/household-items-6/32/household-10-512.png"
                    waves
                    style={cardImageStyle}
                />
                <CardBody>
                    <p className="grey-text" style={descriptionStyle}>
                        <span style={{ float: "left" }}>
                            {made && made[1]}
                        </span>
                        <MDBBadge
                            pill
                            color="danger"
                            style={{ float: "right" }}
                        >
                            {status && status[1]}
                        </MDBBadge>
                    </p>
                    <CardTitle style={cardTitleStyle}>{item.title}</CardTitle>
                </CardBody>
            </Card>
        </Link>
    </MDBCol>
)};
