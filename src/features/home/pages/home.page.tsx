import { Link } from 'react-router-dom';
import './home.page.scss';
import homeImage from './robothome.png';

export default function HomePage() {
    return (
        <>
            <h2>Home</h2>
            <p>There are robots available.</p>
            <p>
                <img src={homeImage} alt="" className="img" />
            </p>
            <Link to={'/robots'}>
                <button className="btn">Search for Robots</button>
            </Link>
        </>
    );
}
