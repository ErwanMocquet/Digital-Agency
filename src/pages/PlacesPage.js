/*Places
*
*Component Functions to fetch and parse json data, example showing and writing filtering of categories
*Importing and Calling each place in a list of places to be rendered
*
*Author Jeffrey Serio
*/

import React, {useEffect, useState} from 'react'
import PlaceItem from "../components/PlaceItem.js";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";

export default function PlacesPage() {
    const [places, setPlaces] = useState([])
    const [loading, setLoading] = useState(true);

    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/placesToEat.json";

    useEffect(() => {
        getData({url: url, setData: setPlaces, setLoading})
    }, []);

    return (
        <>
            <h2>Places To Eat</h2>
            {
                loading ? <CircularProgress/> :
                    places.map(place => (<PlaceItem place={place} key={place.id}/>))
            }
        </>
    )
}