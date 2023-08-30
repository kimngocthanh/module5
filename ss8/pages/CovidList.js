import axios from "axios";
function CovitList({ data }) {
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
                    {data.map(covid => (
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

export async function getStaticProps() {
    const data = (await axios.get('http://localhost:8080/covid')).data
    return {
        props: { data }
    }
}
export default CovitList;
