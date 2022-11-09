import React, { useEffect, useState } from 'react'
import ActivitiesItem from "../components/ActivitiesItem";

export default function Activities()
{
    const[activities, setActivities] = useState([]);

    useEffect(() => {

        async function getActivities()
        {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/activities.json";
            const response = await fetch(url);
            const data = await response.json();
            const filteredrest = [];
          
           try{
                for (var i = 0; i < data.length; i++) {
                var activity = data[i];
                filteredrest.push(activity)
            }
           }catch (error) {
            console.log('Oh come on! These should be easy peeps! What')
          }
            setActivities(filteredrest);
        }
        getActivities();

    }, []);

    return(
    <>
    <h2>Places To Visit</h2>
        {
           activities.map(activity =>(<ActivitiesItem activity={activity} key={activity.id} />))
        }
    </>
    )    
}