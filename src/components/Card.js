import { FaStar } from 'react-icons/fa';

import '../css/card.css';

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) { badgeText = 'SOLD OUT' }
    else if (props.location === "Online") { badgeText = 'ONLINE' }
    console.log(props.item)
    
    
    return (
        <section className="card">
            {badgeText && <h5 className="card-badge">{badgeText}</h5>}
            <img src={props.coverImg} className="card-img"/>
            <div className="card-stats">
                <FaStar className="star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})-</span>
                <span className="gray">{props.location}</span>
            </div>
            <div>{props.title}</div>
            <div><b>From ${props.price} /</b> person</div>
        </section>

    );
}
