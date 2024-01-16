import { useParams } from "react-router-dom";
import { usePlanetData } from "../hooks/usePlanetData";

export const RQPlanet = () => {
    const { planetId } = useParams();
    const { isLoading, data, isError, error, isFetching } = usePlanetData(planetId);

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    if (isLoading || isFetching) {
        return <h1>Data is Loading...</h1>;
    }

    return (
        <>
            <h1>Planet Data</h1>
            <h2>{data?.data.name} {data?.data.planet}</h2>
        </>
    );
}
