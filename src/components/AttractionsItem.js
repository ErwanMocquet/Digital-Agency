import { Link } from "react-router-dom"

export default function AttractionsItem({attraction}) {

    const datapass = {
        title: attraction.Name,
        address: attraction.Address.AddressLine1,
        image: attraction.Files.length > 0 && attraction.Files[0].Uri,
        description: attraction.Descriptions.length > 0 && attraction.Descriptions[0].Text,
    }

    return (
    <Link to="/description" state={{datapass}}>
        <div className="container-cards-categories">
                <article className="categoryitem-name">{attraction.Name}</article>
                <img className="categoryitem-img" src={attraction.Files.length > 0 && attraction.Files[0].Uri} alt={attraction.Name}/>
        </div>
    </Link>
)}