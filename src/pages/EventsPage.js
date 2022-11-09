import React, { useEffect, useState } from 'react'
import EventItem from "../components/EventItem.js";

export default function EventsPage()
{
    const[events, setEvents] = useState([]);

    useEffect(() => {

        async function getEvents()
        {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/events.json";
            const response = await fetch(url);
            const data = await response.json();
            const filteredrest = [];
          
           try{
                for (var i = 0; i < data.length; i++) {
                var event = data[i];
                filteredrest.push(event)
            }
           }catch (error) {
            console.log('Oh come on! These should be easy peeps! What')
          }
            setEvents(filteredrest);
        }
        getEvents();

    }, []);

    return(
    <>
    <h2>Places To Go</h2>
        {
           events.map(event =>(<EventItem event={event} key={event.id} />))
        }
    </>
    )    
}