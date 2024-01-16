import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/planets');
}

export const RQPlanets = () => {
    const { isLoading, data: planets, isError, error } = useQuery('planets', fetchSuperHeroes, { cacheTime: 5000 });

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    if (isLoading) {
        return <h1>Data is Loading...</h1>;
    }

    return (
        <>
            <h1>React Query Planets</h1>
            {planets && planets?.data.map((planet) => {
                return <div key={planet.id}>{planet.planet}</div>
            })}
        </>
    );
}
