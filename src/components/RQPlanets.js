import { Link } from "react-router-dom";
import { useAddPlanetData, usePlanetsData } from "../hooks/usePlanetsData";
import { useState } from "react";

export const RQPlanets = () => {
    const [planetName, setPlanetName] = useState('');

    const handleAddPlanetClick = () => {
        mutate({ planetName });
    }

    const onSuccess = (data) => {
        console.log('Success', data);
    }

    const onError = (error) => {
        console.log('Error', error);
    }

    const { isLoading, data: planets, isError, error, isFetching, refetch } = usePlanetsData(onSuccess, onError);
    const { mutate } = useAddPlanetData();

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    if (isLoading || isFetching) {
        return <h1>Data is Loading...</h1>;
    }

    return (
        <>
            <h1>React Query Planets</h1>
            <div>
                <input
                    type="text"
                    value={planetName}
                    onChange={(ev) => setPlanetName(ev.target.value)}
                />
                <button onClick={handleAddPlanetClick}>
                    Add Planet
                </button>
            </div>
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
