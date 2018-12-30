import React, { useState, useEffect } from "react";
import {
    MDBCol,
    MDBRow,
    MDBMedia,
    CardBody,
    CardImage,
    CardTitle,
    CardText
} from "mdbreact";

export const Item = ({ match, ads }) => {
    const [item, setItem] = useState({});

    const fetchItem = async () => {
        try {
            const response = await fetch(`/api/item?id=${match.params.id}`);
            const json = await response.json();
            const item = json.item;

            setItem(item);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchItem();
    }, []);
    return (
        <MDBRow>
            <MDBCol lg="9" md="12">
                <h3>{item.title}</h3>
                <MDBRow>
                    <MDBCol size="8">
                        <div className="view overlay zoom">
                            <img
                                src="https://cdn4.iconfinder.com/data/icons/household-items-6/32/household-10-512.png"
                                className="img-fluid mx-auto d-block"
                                alt="Item image"
                            />
                        </div>
                    </MDBCol>
                    <MDBCol size="4">
                        {item.params && item.params.map(param => (
                            <p key={param[0]}>{`${param[0]}: ${param[1]}`}</p>
                        ))}
                        <p>{`Created: ${item.created}`}</p>
                        <p>{`City: ${item.city_label}`}</p>
                        <p className="cyan-text h4 font-weight-bold">{'$9.99'}</p>

                    </MDBCol>
                </MDBRow>
                <p className="grey-text">{item.description}</p>
            </MDBCol>
        </MDBRow>
    );
};
