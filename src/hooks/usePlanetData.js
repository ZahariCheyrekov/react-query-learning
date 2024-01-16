import axios from "axios";
import { useQuery } from "react-query";

const fetchPlanet = ({ queryKey }) => {
    const planetId = queryKey[1];
    return axios.get(`http://localhost:4000/planets/${planetId}`);
}

export const usePlanetData = (planetId, onSuccess, onError) => {
    return useQuery(
        ['planet', planetId],
        fetchPlanet,
        {
            onSuccess,
            onError
        }
    );
}
