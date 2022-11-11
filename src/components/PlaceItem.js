import { Link } from "react-router-dom"

export default function PlaceItem({place}) {

    const datapass = {
        title: place.Name,
        address: place.Address.AddressLine1,
        image: place.Files.length > 0 && place.Files[0].Uri,
        description: place.Descriptions.length > 0 && place.Descriptions[0].Text,
    }

    return (
        <Link to="/description" state={{datapass}}>
            <div className="container-cards-categories">
                <article className="categoryitem-name">{place.Name}</article>
                <img className="categoryitem-img" src={place.Files.length > 0 && place.Files[0].Uri} alt={place.Name}/>
                <div className="shadow"></div>
            </div>
        </Link>
)}