import React, {useEffect, useState} from 'react'
import AttractionsItem from "../components/AttractionsItem.js";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";

export default function AttractionsPage() {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/attractions.json";

    useEffect(() => {
        getData({url, setData: setAttractions, setLoading})
    }, []);

    return (
        <>
            <h2>Places To Go</h2>
            {
                loading ? <CircularProgress/> :
                    attractions.map(attraction => (<AttractionsItem attraction={attraction} key={attraction.id}/>))
            }
        </>
    )
}