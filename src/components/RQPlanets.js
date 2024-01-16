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
            {planets.map((planet) => {
                return <div key={planet}>{planet}</div>
            })}
        </>
    );
}
