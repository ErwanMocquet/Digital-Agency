import React, {useEffect, useState} from 'react'
import ActivitiesItem from "../components/ActivitiesItem";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";
import logo from "../img/logo.png"

export default function Activities() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/activities.json";

    useEffect(() => {
        getData({url: url, setData: setActivities, setLoading})
    }, []);

    return (
        <main>
            <section>
                <img className="logo" src={logo} alt="Visit Denmark"></img>
            </section>
            <div className='events-top'>
                <h2 className='title-pages'>ACTIVITIES</h2>
            </div>
            <section className='container-page-events'>
            {
                loading ? <CircularProgress/> :
                    activities.map(activity => (<ActivitiesItem activity={activity} key={activity.id}/>))
            }
            </section>
        </main>
    )
}