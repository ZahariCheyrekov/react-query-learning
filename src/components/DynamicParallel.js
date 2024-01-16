import axios from "axios";
import { useQueries } from "react-query";

const fetchPlanet = ({ queryKey }) => {
    const planetId = queryKey[1];
    return axios.get(`http://localhost:4000/planets/${planetId}`);
}

export const DynamicParallel = ({ planetIds }) => {
    const queryResults = useQueries(
        planetIds.map(id => {
            return {
                queryKey: ['planet-ids', id],
                queryFn: () => fetchPlanet(id)
            }
        })
    );

    console.log({ queryResults });

    return (
        <h1>DynamicParallel</h1>
    );
}
