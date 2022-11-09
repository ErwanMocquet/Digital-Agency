export default function PlaceItem({place}) {
    return <div className="container-place">
            <article>{place.Name}</article>
            <article>{place.Category.Name}</article>
            <article>{place.Address.AddressLine1}</article>
        </div>;
}