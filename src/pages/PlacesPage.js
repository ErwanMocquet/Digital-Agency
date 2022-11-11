import React, {useEffect, useState} from 'react'
import PlaceItem from "../components/PlaceItem.js";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";
import logo from "../img/logo.png"

export default function PlacesPage() {
    const [places, setPlaces] = useState([])
    const [loading, setLoading] = useState(true);

    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/placesToEat.json";

    useEffect(() => {
        getData({url: url, setData: setPlaces, setLoading})
    }, []);

    return (
        <main>
            <section>
                <img className="logo" src={logo} alt="Visit Denmark"></img>
            </section>
            <div className='events-top'>
                <h2 className='title-pages'>Places To Eat</h2>
            </div>
            <section className='container-page-events'>
            {
                loading ? <CircularProgress/> :
                    places.map(place => (<PlaceItem place={place} key={place.id}/>))
            }
            </section>
        </main>
    )
}