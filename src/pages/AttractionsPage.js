import React, {useEffect, useState} from 'react'
import AttractionsItem from "../components/AttractionsItem.js";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";
import logo from "../img/logo.png"

export default function AttractionsPage() {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/attractions.json";

    useEffect(() => {
        getData({url, setData: setAttractions, setLoading})
    }, []);

    return (
        <main>
            <section>
                <img className="logo" src={logo} alt="Visit Denmark"></img>
            </section>
            <div className='events-top'>
                <h2 className='title-pages'>ATTRACTIONS</h2>
            </div>
            <section className='container-page-events'>
            {
                loading ? <CircularProgress/> :
                    attractions.map(attraction => (<AttractionsItem attraction={attraction} key={attraction.id}/>))
            }
            </section>
        </main>
    )
}