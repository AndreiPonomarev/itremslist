import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


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

    const changePage = direction => {
        if (direction && totalPages > page) {
            setPage(page + 1);
        }
        if (!direction && page > 1) {
            setPage(page - 1);
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
            <h2>{page}</h2>
            <ul>
                {ads.map(item => (
                    <li>
                        <Link to={`${match.url}/${item.id}`}>
                            {item.description}
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => changePage(0)}>Prev</button>
            <button onClick={() => changePage(1)}>Next</button>            
        </div>
    );
};
