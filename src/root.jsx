import { Link } from 'react-router-dom'
import './root.css'

export default function Root() {
    return (
        <div className="container">
            <Link className="test" to={'dp-203/'}> DP-203 </Link>
            <Link className="test" to={'dp-900/'}> DP-900 </Link>
            <Link className="test" to={'pl-300/'}> PL-300 </Link>
            <Link className="test" to={'az-104/'}> AZ-104 </Link>
        </div>
    );
}