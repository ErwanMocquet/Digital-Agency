export default function EventItem({event}) {
    return <div className="container-activities">
            <article>{event.Name}</article>
            <article>{event.Address.AddressLine1}</article>
        </div>;
}