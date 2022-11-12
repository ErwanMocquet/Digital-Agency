import React, {useEffect, useState} from 'react'
import ActivitiesItem from "../components/ActivitiesItem";
import getData from "../utils/getData";
import {Box, CircularProgress, Pagination} from "@mui/material";
import logo from "../img/logo.png"

export default function Activities() {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 10;
    const handleChange = (event, value) => {
        setPageNumber(value);
    };

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
                        activities.slice(((pageNumber - 1) * pageSize), (pageNumber * pageSize)).map(activity => (
                            <ActivitiesItem activity={activity} key={activity.id}/>)
                        )
                }
            </section>
            {
                loading ? <CircularProgress/> :
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', py: 5}}>
                        <Pagination count={Math.ceil(activities.length / pageSize)} page={pageNumber}
                                    onChange={handleChange}/>
                    </Box>
            }
        </main>
    )
}