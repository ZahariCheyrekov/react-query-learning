import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/planets');
}

export const usePlanetsData = (onSuccess, onError) => {
    return useQuery(
        'planets',
        fetchSuperHeroes,
        {
            onSuccess,
            onError,
            select: (data) => {
                const planets = data.data.map(planet => planet.planet);
                return planets;
            }
        }
    );
}
