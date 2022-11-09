export default function AttractionsItem({attraction}) {
    return <div className="container-place">
            <article>{attraction.Name}</article>
            <article>{attraction.Category.Name}</article>
            <article>{attraction.Address.AddressLine1}</article>
        </div>;
}