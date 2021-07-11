import "./LocationInfo.css"



export default function LocationInfo(prop) {
    return (
        <div className="LocationInfo">
            <h2>{`CITY NAME :  ${prop.objLocation.name}`}</h2>
            <h2>{`TYPE :  ${prop.objLocation.type}`}</h2>
            <h2>{`DIMENSION :  ${prop.objLocation.dimensions}`}</h2>
            <h2>{`RESIDENTS NUMBER :  ${prop.objLocation.residentsNumber}`}</h2>
        </div>
    )
}