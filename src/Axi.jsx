import axios from "axios";
import { useState } from "react";



const Axi = () => {
    const [axi, setAxi] = useState([]);

    axios.get('https://restcountries.com/v3.1/all')
        .then((response) => setAxi(response.data))

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                        <th>Area</th>
                    </tr>
                </thead>
                <tbody>
                    {axi.map((country, index) => (
                        <tr key={index}>
                            <td>{country.name.common}</td>
                            <td>{country.capital}</td>
                            <td>{country.population}</td>
                            <td>{country.area}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button>Click</button>
        </div>
    );
}
export default Axi;

