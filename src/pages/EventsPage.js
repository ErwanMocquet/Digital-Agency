import React, {useEffect, useState} from 'react'
import EventItem from "../components/EventItem.js";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";

export default function EventsPage() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/events.json";

    useEffect(() => {
        getData({url: url, setData: setEvents, setLoading})
    }, []);

    return (
        <>
            <h2>Places To Go</h2>
            {
                loading ? <CircularProgress/> :
                    events.map(event => (<EventItem event={event} key={event.id}/>))
            }
        </>
    )
}