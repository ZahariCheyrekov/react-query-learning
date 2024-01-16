import axios from "axios";
import { useQuery } from "react-query";

const fetchPlanets = () => {
    return axios.get('http://localhost:4000/planets');
}

export const usePlanetsData = (onSuccess, onError) => {
    return useQuery(
        'planets',
        fetchPlanets,
        {
            onSuccess,
            onError
        }
    );
}
