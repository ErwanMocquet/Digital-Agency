import React, { useEffect, useState } from 'react'
import AttractionsItem from "../components/AttractionsItem.js";

export default function AttractionsPage()
{
    const[attractions, setAttractions] = useState([]);

    useEffect(() => {

        async function getAttractions()
        {
            const url = "https://raw.githubusercontent.com/manypossibles/designops/master/assets/data/en/categories/attractions.json";
            const response = await fetch(url);
            const data = await response.json();
            const filteredrest = [];
          
           try{
                for (var i = 0; i < data.length; i++) {
                var attraction = data[i];
                filteredrest.push(attraction)
            }
           }catch (error) {
            console.log('Oh come on! These should be easy peeps! What')
          }
            setAttractions(filteredrest);
        }
        getAttractions();

    }, []);

    return(
    <>
    <h2>Places To Go</h2>
        {
           attractions.map(attraction =>(<AttractionsItem attraction={attraction} key={attraction.id} />))
        }
    </>
    )    
}