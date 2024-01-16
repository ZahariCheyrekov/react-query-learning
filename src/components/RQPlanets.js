import { Link } from "react-router-dom";
import { usePlanetsData } from "../hooks/usePlanetsData";

export const RQPlanets = () => {
    const onSuccess = (data) => {
        console.log('Success', data);
    }

    const onError = (error) => {
        console.log('Error', error);
    }

    const { isLoading, data: planets, isError, error, isFetching, refetch } = usePlanetsData(onSuccess, onError)

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
                return <div key={planet.id}>
                    <Link to={`/rq-planets/${planet.id}`} >
                        {planet.planet}
                    </Link>
                </div >
            })}

        </>
    );
}
