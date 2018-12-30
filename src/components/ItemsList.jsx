import React, { useState, useEffect } from "react";
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";

import { ItemCard } from "./ItemCard";

export const ItemsList = ({ match }) => {
    const [ads, setAds] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            const response = await fetch(`/api/items?page=${page}`);
            const json = await response.json();
            const data = json.data;
            const { ads, total_pages } = data;
            setAds(ads);
            setTotalPages(total_pages);
        } catch (e) {
            console.error(e);
        }
    };

    const changePage = newPage => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    useEffect(
        () => {
            fetchData();
        },
        [page]
    );

    return (
        <div>
            <MDBRow>
                {ads.map(item => (
                    <ItemCard match={match} item={item} key={item.id} />
                ))}
            </MDBRow>

            <MDBRow>
                <MDBCol>
                    <MDBBtn
                        outline
                        color="primary"
                        size="sm"
                        onClick={() => changePage(page - 1)}
                    >
                        Prev
                    </MDBBtn>
                    <MDBBtn
                        outline
                        color="primary"
                        size="sm"
                        onClick={() => changePage(page + 1)}
                    >
                        Next
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </div>
    );
};
