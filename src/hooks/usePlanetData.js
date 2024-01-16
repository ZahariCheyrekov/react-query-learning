import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchPlanet = ({ queryKey }) => {
    const planetId = queryKey[1];
    return axios.get(`http://localhost:4000/planets/${planetId}`);
}

export const usePlanetData = (planetId, onSuccess, onError) => {
    const queryClient = useQueryClient();

    return useQuery(
        ['planet', planetId],
        fetchPlanet,
        {
            onSuccess,
            onError,
            initialData: () => {
                const planet = queryClient.getQueryData('planets')?.data.find(planet => planet.id === parseInt(planetId));

                if (planet) {
                    return {
                        data: planet
                    }
                } else {
                    return undefined;
                }
            }
        }
    );
}
