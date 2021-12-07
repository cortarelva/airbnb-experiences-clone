
import '../css/navbar.css';

import airbnbLogo from '.././images/airbnb-logo.png';


export default function Navbar() {
    return (
        <nav>
            <img className="logo" src={airbnbLogo} alt="Logo" />
        </nav>
    );
}

