import React, {useEffect, useState} from 'react'
import ActivitiesItem from "../components/ActivitiesItem";
import getData from "../utils/getData";
import {CircularProgress} from "@mui/material";

export default function Activities() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/activities.json";

    useEffect(() => {
        getData({url: url, setData: setActivities, setLoading})
    }, []);

    return (
        <>
            <h2>Places To Visit</h2>
            {
                loading ? <CircularProgress/> :
                    activities.map(activity => (<ActivitiesItem activity={activity} key={activity.id}/>))
            }
        </>
    )
}