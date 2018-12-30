import React, { useState, useEffect } from 'react'


export const ItemCard = ({ match, ads }) => {

    const [item, setItem] = useState({})
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

    useEffect(
        () => {
            fetchItem();
        },
        []
    );
    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    )
}
