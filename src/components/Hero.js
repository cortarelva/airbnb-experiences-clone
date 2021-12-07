
import '../css/hero.css';

import heroImg from '.././images/hero-img.png';

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero-img" src={heroImg} alt="Hero Image" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by<br/>
                one-of-a-kind hosts—all without leaving home.
            </p>
      </section>
    );
}