import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const fetchPlanets = () => {
    return axios.get('http://localhost:4000/planets');
}

const addPlanet = (planet) => {
    return axios.post('http://localhost:4000/planets', planet)
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

export const useAddPlanetData = (planet) => {
    const queryClinet = useQueryClient();
    return useMutation(addPlanet, {
        onSuccess: (data) => {
            queryClinet.setQueriesData('planets', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, data.data]
                }
            });
        }
    });
}
