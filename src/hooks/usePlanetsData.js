import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

const fetchPlanets = () => {
    return request({ url: '/planets' });
}

const addPlanet = (planet) => {
    return request({ url: '/planets', method: 'post', data: planet });
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
        onMutate: async (newPlanet) => {
            await queryClinet.cancelQueries('planets');
            const previousPlanetData = queryClinet.getQueryData('planets');
            queryClinet.setQueriesData('planets', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [
                        ...oldQueryData.data, {
                            id: oldQueryData?.data?.length + 1, ...newPlanet
                        },
                    ]
                }
            });
            return {
                previousPlanetData
            }
        },
        onError: (error, planet, context) => {
            queryClinet.setQueryData('planets', context.previousPlanetData);
        },
        onSettled: () => {
            queryClinet.invalidateQueries('planets');
        }
    });
}
