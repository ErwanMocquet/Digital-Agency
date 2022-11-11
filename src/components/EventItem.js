import { Link } from "react-router-dom"

export default function EventItem({event}) {

    const datapass = {
        title: event.Name,
        address: event.Address.AddressLine1,
        image: event.Files.length > 0 && event.Files[0].Uri,
        description: event.Descriptions.length > 0 && event.Descriptions[0].Text,
    }

    return (
    <Link to="/description" state={{ datapass }}>
        <div className="container-cards-categories">
                <article className="categoryitem-name">{event.Name}</article>
                <img className="categoryitem-img" src={event.Files.length > 0 && event.Files[0].Uri} alt={event.Name}/>
                <div className="shadow"></div>
        </div>
    </Link>
)}