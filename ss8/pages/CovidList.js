import { getCovid } from "./db/data"
function CovitList() {

    return (
        <>
            <h1>Viet Nam is COVID-19 information</h1>
            <table>
                <thead>
                    <tr>
                        <th>date</th>
                        <th>confirmed</th>
                        <th>active</th>
                        <th>recovered</th>
                        <th>deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {getCovid().map(covid =>(
                        <tr key={covid.id}>
                            <td>{covid.date}</td>
                            <td>{covid.confirmed}</td>
                            <td>{covid.active}</td>
                            <td>{covid.recovered}</td>
                            <td>{covid.deaths}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default CovitList;