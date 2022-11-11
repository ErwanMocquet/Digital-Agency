import React, {useEffect, useState} from 'react'
import EventItem from "../components/EventItem.js";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";
import logo from "../img/logo.png";

export default function EventsPage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/events.json";

    useEffect(() => {
        getData({url: url, setData: setEvents, setLoading})
    }, []);

    return (
        <main>
            <section>
                <img className="logo" src={logo} alt="Visit Denmark"></img>
            </section>
            <div className="events-top">
                <h2 className='title-pages'>EVENTS</h2>
            </div>
            <section className='container-page-events'>
                {
                    loading ? <CircularProgress/> :
                        events.map(event => (<EventItem event={event} key={event.id}/>))
                }
            </section>
        </main>
    )
}