import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/planets');
}

export const RQPlanets = () => {
    const onSuccess = (data) => {
        console.log('Success', data);
    }

    const onError = (error) => {
        console.log('Error', error);
    }

    const { isLoading, data: planets, isError, error, isFetching, refetch } = useQuery(
        'planets',
        fetchSuperHeroes,
        {
            onSuccess,
            onError
        }
    );

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    if (isLoading || isFetching) {
        return <h1>Data is Loading...</h1>;
    }

    return (
        <>
            <h1>React Query Planets</h1>
            <button onClick={refetch}>Get Planets</button>
            {planets && planets?.data.map((planet) => {
                return <div key={planet.id}>{planet.planet}</div>
            })}
        </>
    );
}
