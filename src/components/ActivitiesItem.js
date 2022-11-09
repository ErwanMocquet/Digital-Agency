export default function ActivitiesItem({activity}){
    return <div className="container-activities">
            <div>{activity.Name}</div>
            <div>{activity.Address.AddressLine1}</div>
        </div>
}