import { Link } from 'react-router-dom'
import './root.css'

export default function Root() {
    return (
        <div className="container">
            <Link className="test" to={'ai-102/'}> Azure AI Engineer Associate - AI-102</Link>
            <Link className="test" to={'az-104/'}> Azure Administrator Associate - AZ-104  </Link>
            <Link className="test" to={'az-204/'}> Azure Developer Associate - AZ-204</Link>
            <Link className="test" to={'az-220/'}> Azure IoT Developer Specialty - AZ-220</Link>
            <Link className="test" to={'az-305/'}> Azure Solutions Architect Expert - AZ-305 </Link>
            <Link className="test" to={'az-400/'}> Azure DevOps Engineer Expert - AZ-400</Link>
            <Link className="test" to={'dp-100/'}> Azure Data Scientist Associate - DP-100</Link>
            <Link className="test" to={'dp-203/'}> Azure Data Engineer Associate - DP-203</Link>
            <Link className="test" to={'dp-300/'}> Azure Database Administrator Associate - DP-300</Link>
            <Link className="test" to={'dp-420/'}> Azure Cosmos DB Developer Specialty - DP-420</Link>
            <Link className="test" to={'pl-200/'}> Power Platform Functional Consultant Associate - PL-200</Link>
            <Link className="test" to={'pl-300/'}> Power BI Data Analyst - PL-300</Link>
            <Link className="test" to={'pl-400/'}> Power Platform Developer Associate - PL-400</Link>
            <Link className="test" to={'pl-600/'}> Power Platform Solution Architect Expert - PL-600</Link>
        </div>
    );
}