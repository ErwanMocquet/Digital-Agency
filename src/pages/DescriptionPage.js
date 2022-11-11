import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export default function DescriptionPage() {

    const location = useLocation();
    const datapass = location.state
    console.log(datapass)

    return (
        <main>
            <div className="container-description">
                <img className="img-description" src={datapass.datapass.image} alt="Event" />
                <h1 className="title-description">{datapass.datapass.title}</h1>
                <p className="address-description">{datapass.datapass.address}</p>
                <div className="shadow" id="shadow-description"></div>
            </div>
            <div className="text-desc-container">
                <p className="text-description">{datapass.datapass.description}</p>
            </div>
            <Link to="/yourtrip" className="container-trips-2">
                <h1>ADD TO YOUR TRIP</h1>
                <AddIcon></AddIcon>
            </Link>
        </main>
    )
}